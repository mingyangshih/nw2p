import { getField, updateField } from 'vuex-map-fields'

export default{
  namespaced: true,
  state: {
    contactInfo: {
      name: '',
      phone: '',
      email: '',
      message: '',
      // 取圖片時回傳的code
      captchacode: '',
      // user 填的
      captcha: ''
    },
    // 用來判斷未填的欄位
    emptyInput: [],
    // getImage回傳值
    verifyImg: '',
    code: '',
    // enter by customer
    verifyCode: ''
  },
  actions: {
    // 觸發聯絡我們
    contactus ({state, commit, dispatch}) {
      // let vm = this
      let API_PATH = process.env.API
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
            let message = result.error_message
            let theme = 'primary'
            let emptyInput = []
            // 成功彈出視窗
            commit('changeMessage', {message, theme}, {root: true})
            // 成功後判斷哪些未填的array清空
            commit('testEmptyInput', emptyInput)
            // 成功後把所有input全部清空
            commit('clearContactInfo')
            dispatch('getImage')
          } else {
            let message = result.error_message
            let theme = 'danger'
            commit('changeMessage', {message, theme}, {root: true})
          }
        })
      }
    },
    getImage ({commit}) {
      let API_PATH = process.env.API
      let number = Math.random()
      fetch(`${API_PATH}captcha/create?${number}`, {
        method: 'POST'
      }).then(res => {
        return res.json()
      }).then(result => {
        commit('verifyImgAndCode', result)
      })
    }
    // captcha ({state, commit, dispatch}) {
    //   let API_PATH = process.env.API
    //   let form = `captcha=${state.verifyCode}&captchacode=${state.code}`
    //   // jquery
    //   $.ajax({
    //     async: true,
    //     type: 'post',
    //     url: `${API_PATH}captcha/validate`,
    //     data: form,
    //     success: function (data) {
    //       if (data.code === 'N') {
    //         let message = '驗證碼輸入錯誤'
    //         let theme = 'danger'
    //         commit('changeMessage', {message, theme}, {root: true})
    //       } else {
    //         state.verifyCode = ''
    //         dispatch('contactus')
    //       }
    //     },
    //     error: function (jqXHR, textStatus) {
    //     }
    //   })
    // }
  },
  mutations: {
    updateField,
    // 清空用戶填寫的資料
    clearContactInfo (state) {
      let keys = Object.keys(state.contactInfo)
      keys.forEach((itm) => {
        state.contactInfo[itm] = ''
      })
      state.emptyInput = []
    },
    // 設定判斷是否全部都填的array
    testEmptyInput (state, emptyInput) {
      state.emptyInput = emptyInput
    },
    verifyImgAndCode (state, result) {
      state.verifyImg = result.imagedata
      state.contactInfo.captchacode = result.code
    }
  },
  getters: {
    getField
  }
}
