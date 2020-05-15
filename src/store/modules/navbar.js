// import API from '../../../static/api-path/apiPath'
export default {
  state: {
    totalCategory: [],
    eachCategoryNumber: [],
    categoryId: [],
    totalProduct: [],
    productEnCategory: []
    // nw2pMemberData: {
    //   UAID: '',
    //   UNAME: '',
    //   UDNAME: '',
    //   token: '',
    //   expired_at: ''
    // }
  },
  actions: {
    // 取下拉選單內容
    getNavBarList ({commit}) {
      let totalCategory = []
      let categoryId = []
      let productEnCategory = []
      let API_PATH = window.API
      fetch(`${API_PATH}product/getmenu`, {method: 'get'}).then(res => {
        return res.json()
      }).then(result => {
        // 過濾有幾種種類
        result.data.forEach((item) => {
          if (totalCategory.indexOf(item.productCategory) < 0) {
            totalCategory.push(item.productCategory)
            // 取得進入大類的ID
            categoryId.push(item.categoryId)
            productEnCategory.push(item.productEnCategory)
          }
        })
        // 計算各大類下的產品數量(用來決定是否要讓下拉選單可連到大類頁)
        // 建新array 對應大類總數
        let eachCategoryNumber = new Array(totalCategory.length)
        // 把全部的值設成0
        eachCategoryNumber.fill(0, 0)
        result.data.forEach(item => {
          totalCategory.forEach((item1, idx) => {
            if (item.productCategory === item1) eachCategoryNumber[idx] += 1
          })
        })
        // 全部產品的資料
        let totalProduct = result.data
        commit('listDetail', {totalCategory, totalProduct, eachCategoryNumber, categoryId, productEnCategory})
      })
    }
    // 檢查local storage 是否有內容，登入過會有內容，有登入過navbar 上方顯示方式直接顯示
    // checkToken ({commit, state}) {
    //   let nw2pData = JSON.parse(localStorage.getItem('nw2pData'))
    //   if (nw2pData === null) {
    //     nw2pData = {
    //       UAID: '',
    //       UNAME: '',
    //       UDNAME: '',
    //       token: '',
    //       expired_at: ''
    //     }
    //     localStorage.setItem('nw2pData', JSON.stringify(nw2pData))
    //   }
    //   commit('setTokenData', nw2pData)
    // }
  },
  mutations: {
    // 上方下拉選單種類
    listDetail (state, {totalCategory, totalProduct, eachCategoryNumber, categoryId, productEnCategory}) {
      state.totalCategory = totalCategory
      state.eachCategoryNumber = eachCategoryNumber
      state.totalProduct = totalProduct
      state.categoryId = categoryId
      state.productEnCategory = productEnCategory
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
