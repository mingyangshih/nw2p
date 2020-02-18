import axios from 'axios'
import { getField, updateField } from 'vuex-map-fields'

export default {
  state: {
    // 右上方小圖
    productSpec: [],
    // 全部資料
    productInfo: [],
    // 下拉頁數
    productPages: [],
    // 左邊相片
    productAlbum: [],
    // 運送天數
    shippingDay: null,
    size: '',
    pages: '',
    specId: null,
    designLink: ''
  },
  actions: {
    getStandardData (context, {id}) {
      context.commit('LOADING', true, {root: true})
      axios.get(`http://192.168.20.133:8001/api/v1/product/${id}`).then((response) => {
        let productSpec = response.data.data[1].productSpec
        let productInfo = response.data.data[2].productInfo
        let productAlbum = response.data.data[0].productAlbum
        let productPages = []
        productInfo.forEach((item) => {
          if (productPages.indexOf(item.productPages) < 0) {
            productPages.push(item.productPages)
          }
        })
        context.commit('changeStandardData', {productSpec, productInfo, productAlbum, productPages})
      }).catch((error) => { console.log(error) }).finally(() => {
        context.commit('LOADING', false, {root: true})
      })
    },
    shippingDayChange ({commit, state}) {
      state.productInfo.forEach((item, index) => {
        if (item.productPages === state.pages && item.specId === state.specId) {
          console.log(item.editLink)
          let editLink = item.editLink
          let shippingDay = state.productInfo[index]['shippingDay']
          commit('shippingDayChange', {shippingDay, editLink})
        }
      })
    }
  },
  mutations: {
    changeStandardData (state, {productSpec, productInfo, productAlbum, productPages}) {
      state.productSpec = productSpec
      state.productInfo = productInfo
      state.productAlbum = productAlbum
      state.productPages = productPages
      state.shippingDay = productInfo[0].shippingDay
      state.size = productSpec[0].specName
      state.pages = productPages[0]
      state.specId = 1
      state.designLink = productInfo[0].editLink
    },
    shippingDayChange (state, {shippingDay, editLink}) {
      state.shippingDay = shippingDay
      state.designLink = editLink
    },
    updateField
  },
  getters: {
    getField
  }
}
