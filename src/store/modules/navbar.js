export default {
  state: {
    totalCategory: [],
    totalProduct: [],
    nw2pMemberData: {
      UAID: '',
      UNAME: '',
      UDNAME: '',
      token: '',
      expired_at: ''
    }
  },
  actions: {
    // 取下拉選單內容
    getNavBarList ({commit}) {
      let totalCategory = []
      fetch(`${process.env.API}product/getmenu`, {method: 'get'}).then(res => {
        return res.json()
      }).then(result => {
        // 過濾有幾種種類
        result.data.forEach((item) => {
          if (totalCategory.indexOf(item.productCategory) < 0) {
            totalCategory.push(item.productCategory)
          }
        })
        let totalProduct = result.data
        commit('listDetail', {totalCategory, totalProduct})
      })
    },
    // 檢查local storage 是否有內容，登入過會有內容，有登入過navbar 上方顯示方式直接顯示
    checkToken ({commit}) {
      let nw2pData = JSON.parse(localStorage.getItem('nw2pData'))
      commit('setTokenData', nw2pData)
    }
  },
  mutations: {
    // 上方下拉選單種類
    listDetail (state, {totalCategory, totalProduct}) {
      state.totalCategory = totalCategory
      state.totalProduct = totalProduct
    },
    // 登入後修改資料、登出後清空資料
    setTokenData (state, nw2pData) {
      state.nw2pMemberData.UAID = nw2pData.UAID
      state.nw2pMemberData.UNAME = nw2pData.UNAME
      state.nw2pMemberData.UDNAME = nw2pData.UDNAME
      state.nw2pMemberData.token = nw2pData.token
      state.nw2pMemberData.expired_at = nw2pData.expired_at
    }
  }
}
