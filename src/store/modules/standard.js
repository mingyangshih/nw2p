import axios from 'axios'
import { getField, updateField } from 'vuex-map-fields'

export default {
  state: {
    // 分類名稱 給左上角Break crumb用
    categoryName: '',
    categoryId: null,
    // 篩選下方照片用
    productId: null,
    // 規格名稱
    standardTitle: '',
    // 右上方小圖
    productSpec: [],
    // 全部資料
    productItem: [],
    // 下方文字資料
    productFeature: [],
    //
    productMaster: [],
    // 網友推薦
    productRecommend: [],
    // 規格頁數選資料
    productIntroDesc: [],
    productIntroLeftCol: [],
    productIntroRightCol: [],
    // 方向
    direction: '',
    // 對應方向
    specId: null,
    // 對應尺寸
    sizeId: null,
    styleId: null,
    // Taopix 連結
    editLink: '',
    price: null,
    discountprice: null,
    priceRange: null
  },
  actions: {
    getStandardData (context, {id}) {
      let API_PATH = process.env.API
      context.commit('LOADING', true, {root: true})
      let getAPI = `${API_PATH}product/getdetail/${id}`
      return axios.get(getAPI).then((response) => {
        let {productSpec, productItem, productFeature, productRecommend, productMaster, productIntroDesc} = response.data.data
        // 規格標題
        let standardTitle = productItem[0].productName
        let categoryName = productItem[0].categoryName
        let categoryId = productItem[0].categoryId
        let productId = productItem[0].productId
        context.commit('changeStandardData', {productSpec, productItem, productFeature, standardTitle, categoryName, categoryId, productId, productRecommend, productMaster, productIntroDesc})
        context.commit('LOADING', false, {root: true})
      }).catch((error) => { console.log(error) })
    }
  },
  mutations: {
    changeStandardData (state, {productSpec, productItem, productFeature, standardTitle, categoryName, categoryId, productId, productRecommend, productMaster, productIntroDesc}) {
      state.productSpec = productSpec
      state.productItem = productItem
      state.productFeature = productFeature
      state.direction = productSpec[0].specName
      state.specId = productSpec[0].specId
      state.sizeId = productSpec[0].productSize[0].sizeId
      state.styleId = productItem[0].styleId
      state.standardTitle = standardTitle
      state.categoryName = categoryName
      state.categoryId = categoryId
      state.productId = productId
      state.productRecommend = productRecommend
      state.productMaster = productMaster
      state.productIntroDesc = productIntroDesc
    },
    updateField
  },
  // computed
  getters: {
    getField,
    // 改變規格改變尺寸
    productSize (state) {
      let productSize = []
      state.productSpec.forEach(item => {
        if (item.specId === state.specId) {
          productSize = item.productSize
          state.sizeId = item.productSize[0].sizeId
        }
      })
      return productSize
    },
    // 選specid sizeid秀詳細資料
    specId_sizeId_info (state, getters) {
      let productIntroLeftCol = []
      let productIntroRightCol = []
      let productIntroId = []
      let link = null
      let price = null
      let priceRange = null
      let cnt = null
      // 取得判斷是否要進到風格的cnt
      state.productSpec.forEach(itm => {
        itm.productSize.forEach(item => {
          if (item.sizeId === state.sizeId) {
            cnt = item.cnt
          }
        })
      })
      // 用specid and sizeid 篩選價錢跟編輯連結
      state.productItem.forEach((itm) => {
        if (itm.specId === state.specId && itm.sizeId === state.sizeId) {
          state.editLink = itm.editLink
          link = itm.editLink
          state.price = itm.price
          state.discountprice = itm.discountprice
          // 判斷價格是否有起
          if (itm.price[itm.price.length - 1] === '起') {
            price = itm.price.substring(0, itm.price.length - 1)
            state.priceRange = true
            priceRange = true
          } else {
            price = itm.price
            state.priceRange = true
            priceRange = false
          }
        }
      })
      // 組合產品特性
      state.productIntroDesc.forEach((item, idx) => {
        productIntroLeftCol.push(item.introName)
        productIntroId.push(item.productIntroId)
        if (idx === 0) {
          getters.productSize.forEach(itm => {
            if (itm.sizeId === state.sizeId) productIntroRightCol.push(itm.sizeDesc)
          })
        } else {
          productIntroRightCol.push(item.productIntroDesc)
        }
      })
      state.productIntroLeftCol = productIntroLeftCol
      state.productIntroRightCol = productIntroRightCol
      return {productIntroLeftCol, productIntroRightCol, productIntroId, link, price, priceRange, cnt}
    }
  }
}
