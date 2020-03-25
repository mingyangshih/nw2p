import router from '../../router'
export default {
  actions: {
    // 登出修改state資訊，清空localstorage 內容
    logOut ({commit}) {
      commit('LOADING', true, {root: true})
      let nw2pData = JSON.stringify({
        UAID: '',
        UNAME: '',
        UDNAME: '',
        token: '',
        expired_at: ''
      })
      // 登出清空資料存到local storage
      localStorage.setItem('nw2pData', nw2pData)
      // 登出commit mutaions 到 navbar.js
      commit('setTokenData', JSON.parse(nw2pData))
      if (location.hash === '#/modifyEnroll') {
        router.push('/')
      }
      commit('LOADING', false, {root: true})
    }
  }
}
