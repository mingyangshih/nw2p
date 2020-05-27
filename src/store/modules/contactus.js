import { getField, updateField } from 'vuex-map-fields'

export default{
  namespaced: true,
  state: {
    contactInfo: {
      name: '',
      phone: '',
      email: '',
      message: ''
    },
    // 用來判斷未填的欄位
    emptyInput: []
  },
  actions: {
    contactus ({state, commit}) {
      let API_PATH = window.API
      let keys = Object.keys(state.contactInfo)
      let emptyInput = []
      keys.forEach((itm, idx) => {
        if (state.contactInfo[itm] === '') emptyInput.push(idx)
      })
      // 判斷是否全部都有填
      if (emptyInput.length > 0) {
        let message = '請填寫必填欄位'
        let theme = 'danger'
        commit('changeMessage', {message, theme}, {root: true})
        commit('testEmptyInput', emptyInput)
      } else {
        fetch(`${API_PATH}user/sendmail`, {method: 'POST',
          body: JSON.stringify(state.contactInfo),
          headers: {
            'content-type': 'application/json'
          }}).then(res => {
          return res.json()
        }).then(result => {
        // 先檢查是否全部都有填
        // 回傳0: 寄信成功，回傳-1: 代表寄信失敗
          if (result.error_code === 0) {
            let message = '傳送成功'
            let theme = 'primary'
            let emptyInput = []
            // 成功彈出視窗
            commit('changeMessage', {message, theme}, {root: true})
            // 成功後判斷哪些未填的array清空
            commit('testEmptyInput', emptyInput)
            // 成功後把所有input全部清空
            commit('clearContactInfo')
          }
          // else {
          // let message = '傳送失敗，請重試一次'
          // let theme = 'danger'
          // let emptyInput = []
          // 先傳一次把之前檢測的清空
          // commit('testEmptyInput', emptyInput)
          // 失敗彈出視窗
          // commit('changeMessage', {message, theme}, {root: true})
          // let keys = Object.keys(state.contactInfo)
          // keys.forEach((itm, idx) => {
          //   if (state.contactInfo[itm] === '') emptyInput.push(idx)
          // })
          // 判斷哪些未填
          // commit('testEmptyInput', emptyInput)
          // }
        }).finally(() => {
        })
      }
    }
  },
  mutations: {
    updateField,
    // 清空用戶填寫的資料
    clearContactInfo (state) {
      let keys = Object.keys(state.contactInfo)
      keys.forEach((itm) => {
        state.contactInfo[itm] = ''
      })
    },
    // 設定判斷是否全部都填的array
    testEmptyInput (state, emptyInput) {
      state.emptyInput = emptyInput
    }
  },
  getters: {
    getField
  }
}
