import axios from 'axios'
import { getField, updateField } from 'vuex-map-fields'

export default {
  state: {
    // 右上方小圖
    productSpec: [],
    // 全部資料
    productInfo: [],
    // 下拉頁數
    // productPages: [],
    // 左邊相片
    productAlbum: [],
    productAlbumLength: null,
    // 運送天數
    shippingDay: null,
    // 方向
    direction: '',
    // 頁數
    pages: '',
    // 對應方向
    specId: null,
    // 對應尺寸
    sizeId: null,
    // Taopix 連結
    designLink: ''
  },
  actions: {
    getStandardData (context, {id}) {
      context.commit('LOADING', true, {root: true})
      let getAPI = `${process.env.API}product/getdetail/${id}`
      axios.get(getAPI).then((response) => {
        let productSpec = response.data.data[1].productSpec
        let productInfo = response.data.data[2].productInfo
        let productAlbum = response.data.data[0].productAlbum
        let productAlbumLength = productAlbum.length
        let productPages = []
        productInfo.forEach((item) => {
          if (productPages.indexOf(item.productPages) < 0) {
            productPages.push(item.productPages)
          }
        })
        context.commit('changeStandardData', {productSpec, productInfo, productAlbum, productPages, productAlbumLength})
      }).catch((error) => { console.log(error) }).finally(() => {
        context.commit('LOADING', false, {root: true})
      })
    },
    // 因條件不同，篩選運送天數，編輯網址，sizeId
    shippingDayChange ({commit, state}) {
      state.productInfo.forEach((item, index) => {
        if (item.productPages === state.pages && item.specId === state.specId && item.sizeId === state.sizeId) {
          let editLink = item.editLink
          let shippingDay = state.productInfo[index]['shippingDay']
          commit('shippingDayChange', {shippingDay, editLink})
        }
      })
    }
  },
  mutations: {
    changeStandardData (state, {productSpec, productInfo, productAlbum, productPages, productAlbumLength}) {
      state.productSpec = productSpec
      state.productInfo = productInfo
      state.productAlbum = productAlbum
      state.productAlbumLength = productAlbumLength
      state.productPages = productPages
      state.shippingDay = productInfo[0].shippingDay
      state.direction = productSpec[0].specName
      state.pages = productPages[0]
      state.specId = 1
      state.sizeId = productSpec[0].productSize[0].sizeId
      state.designLink = productInfo[0].editLink
    },
    shippingDayChange (state, {shippingDay, editLink}) {
      state.shippingDay = shippingDay
      state.designLink = editLink
    },
    updateField
  },
  getters: {
    getField,
    // 改變方向改變尺寸
    productSize (state) {
      let productSize = []
      state.productSpec.forEach(item => {
        if (item.specName === state.direction) {
          productSize = item.productSize
          state.sizeId = item.productSize[0].sizeId
        }
      })
      return productSize
    },
    // 改變方向、尺寸，改變頁數
    productPages (state) {
      let productPages = []
      state.productInfo.forEach(item => {
        if (item.specId === state.specId && item.sizeId === state.sizeId) {
          productPages.push(item.productPages)
          state.pages = productPages[0]
        }
      })
      return productPages
    }
  }
}
