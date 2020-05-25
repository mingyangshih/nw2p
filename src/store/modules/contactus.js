import { getField, updateField } from 'vuex-map-fields'

export default{
  namespaced: true,
  state: {
    contactInfo: {
      name: '',
      phone: '',
      email: '',
      message: ''
    }
  },
  actions: {
    contactus ({state, commit}) {
      let API_PATH = window.API
      fetch(`${API_PATH}user/sendmail`, {method: 'POST',
        body: JSON.stringify(state.contactInfo),
        headers: {
          'content-type': 'application/json'
        }}).then(res => {
        return res.json()
      }).then(result => {
        // 回傳0: 寄信成功，回傳-1: 代表寄信失敗
        if (result.error_code === 0) {
          let message = '傳送成功'
          let theme = 'primary'
          commit('changeMessage', {message, theme}, {root: true})
        } else {
          let message = '傳送失敗，請重試一次'
          let theme = 'danger'
          commit('changeMessage', {message, theme}, {root: true})
        }
      }).finally(() => {
        commit('clearContactInfo')
      })
    }
  },
  mutations: {
    updateField,
    clearContactInfo (state) {
      let keys = Object.keys(state.contactInfo)
      keys.forEach((itm) => {
        state.contactInfo[itm] = ''
      })
    }
  },
  getters: {
    getField
  }
}
