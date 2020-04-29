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
    productInfo: [],
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
    // Taopix 連結
    editLink: '',
    price: null
  },
  actions: {
    getStandardData (context, {id}) {
      let API_PATH = window.API
      context.commit('LOADING', true, {root: true})
      let getAPI = `${API_PATH}product/getdetail/${id}`
      return axios.get(getAPI).then((response) => {
        let productSpec = response.data.data[1].productSpec
        let productInfo = response.data.data[2].productInfo
        // 規格標題
        let standardTitle = response.data.data[2].productInfo[0].productName
        let categoryName = response.data.data[2].productInfo[0].categoryName
        let categoryId = response.data.data[2].productInfo[0].categoryId
        let productId = response.data.data[2].productInfo[0].productId
        context.commit('changeStandardData', {productSpec, productInfo, standardTitle, categoryName, categoryId, productId})
      }).catch((error) => { console.log(error) }).finally(() => {
        context.commit('LOADING', false, {root: true})
      })
    }
  },
  mutations: {
    changeStandardData (state, {productSpec, productInfo, standardTitle, categoryName, categoryId, productId}) {
      state.productSpec = productSpec
      state.productInfo = productInfo
      state.direction = productSpec[0].specName
      state.specId = productSpec[0].specId
      state.sizeId = productSpec[0].productSize[0].sizeId
      state.standardTitle = standardTitle
      state.categoryName = categoryName
      state.categoryId = categoryId
      state.productId = productId
    },
    updateField
  },
  // computed
  getters: {
    getField,
    // 改變方向改變尺寸
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
      state.productInfo.forEach((itm) => {
        if (itm.specId === state.specId && itm.sizeId === state.sizeId) {
          state.productIntroDesc = itm.productIntroDesc
          state.editLink = itm.editLink
          link = itm.editLink
          state.price = itm.price
          price = itm.price
          itm.productIntroDesc.forEach((item, idx) => {
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
        }
      })
      state.productIntroLeftCol = productIntroLeftCol
      state.productIntroRightCol = productIntroRightCol
      return {productIntroLeftCol, productIntroRightCol, productIntroId, link, price}
    }
  }
}
