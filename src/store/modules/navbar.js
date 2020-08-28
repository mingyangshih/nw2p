// import API from '../../../static/api-path/apiPath'
export default {
  state: {
    totalCategory: [],
    eachCategoryNumber: [],
    categoryId: [],
    // 所有產品
    totalProduct: [],
    productEnCategory: [],
    eachCategoryProduct: [],
    // 設計品牌館
    totalDesign: [],
    totalDesignCategory: []
  },
  actions: {
    // 取下拉選單內容
    getNavBarList ({commit}) {
      let totalCategory = []
      let categoryId = []
      let productEnCategory = []
      let API_PATH = process.env.API
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
        // 某個大類下有幾個產品，過濾出產品的ID，先設空array
        let eachCategoryProduct = new Array(totalCategory.length)
        for (let i = 0; i < eachCategoryProduct.length; i++) {
          eachCategoryProduct[i] = []
        }

        // 把全部的值設成0
        eachCategoryNumber.fill(0, 0)
        result.data.forEach(item => {
          totalCategory.forEach((item1, idx) => {
            if (item.productCategory === item1) {
              eachCategoryNumber[idx] += 1
              eachCategoryProduct[idx].push(item.productId)
            }
          })
        })
        // 全部產品的資料
        let totalProduct = result.data
        commit('listDetail', {totalCategory, totalProduct, eachCategoryNumber, categoryId, productEnCategory, eachCategoryProduct})
      })
    },
    getBrandList ({commit}) {
      let API_PATH = process.env.API
      fetch(`${API_PATH}design/getmenu`, {method: 'get'}).then(res => {
        return res.json()
      }).then(result => {
        let totalDesign = result.data
        let totalDesignCategory = []
        totalDesign.forEach(itm => {
          if (totalDesignCategory.indexOf(itm.groupcode) === -1) {
            totalDesignCategory.push(itm.groupcode)
          }
        })
        commit('brandListDetail', {totalDesign, totalDesignCategory})
      })
    }
  },
  mutations: {
    // 上方下拉選單種類
    listDetail (state, {totalCategory, totalProduct, eachCategoryNumber, categoryId, productEnCategory, eachCategoryProduct}) {
      state.totalCategory = totalCategory
      state.eachCategoryNumber = eachCategoryNumber
      state.totalProduct = totalProduct
      state.categoryId = categoryId
      state.productEnCategory = productEnCategory
      state.eachCategoryProduct = eachCategoryProduct
    },
    brandListDetail (state, {totalDesign, totalDesignCategory}) {
      state.totalDesignCategory = totalDesignCategory
      state.totalDesign = totalDesign
    }
  }
}
