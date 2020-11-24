import axios from 'axios'
// import { getField, updateField } from 'vuex-map-fields'
export default {
  state: {
    productInfo: [],
    productItem: [],
    productMaster: [],
    productItemRender: [],
    getStyleClass: [],
    productName: '',
    categoryName: '',
    categoryId: null,
    id: null,
    specId: null,
    sizeId: null,
    styleId: 1,
    pagination: [],
    activePage: null,
    templateImgCount: null
  },
  actions: {
    getStyle (context, {id, specId, sizeId, styleId}) {
      let API_PATH = process.env.API
      let getAPI = `${API_PATH}product/getdetailwithstyle/${id}/${specId}/${sizeId}/${styleId}/templateName/20`
      context.commit('LOADING', true, {root: true})
      return axios.get(getAPI).then((response) => {
        let {productItem, productMaster} = response.data.data
        let {productName, categoryName, categoryId} = productItem[0]
        // count pagination
        let pagination = []
        productItem.forEach(itm => {
          if (pagination.indexOf(itm.page_no) === -1) {
            pagination.push(itm.page_no)
          }
        })
        context.commit('setStyleData', {productItem, id, specId, sizeId, productName, categoryName, categoryId, pagination, productMaster})
      }).catch((error) => {
        console.log(error)
      })
    },
    getStyleClass (context, {id}) {
      let API_PATH = process.env.API
      let getAPI = `${API_PATH}product/getstyle/${id}`
      return axios.get(getAPI).then((response) => {
        let getStyleClass = response.data
        context.commit('setStyleClass', {getStyleClass})
        context.commit('LOADING', false, {root: true})
      }).catch((error) => {
        console.log(error)
      })
    },
    // 換風格重新抓一次資料
    changeStyle (context, {changeStyleId}) {
      let API_PATH = process.env.API
      let {id, specId, sizeId} = context.state
      let getAPI = `${API_PATH}product/getdetailwithstyle/${id}/${specId}/${sizeId}/${changeStyleId}/templateName/20`
      context.commit('LOADING', true, {root: true})
      axios.get(getAPI).then((response) => {
        let {productItem, productMaster} = response.data.data
        let {productName, categoryName, categoryId} = context.state
        // 算pagination
        let pagination = []
        productItem.forEach(itm => {
          if (pagination.indexOf(itm.page_no) === -1) {
            pagination.push(itm.page_no)
          }
        })
        context.commit('setStyleData', {productItem, id, specId, sizeId, productName, categoryName, categoryId, pagination, productMaster})
        context.commit('LOADING', false, {root: true})
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mutations: {
    setStyleData (state, {productItem, id, specId, sizeId, productName, categoryName, categoryId, pagination, productMaster}) {
      state.productItem = productItem
      state.productMaster = productMaster
      state.templateImgCount = productMaster[0].templateImgCount
      state.productItemRender = productItem
      state.productName = productName
      state.categoryName = categoryName
      state.categoryId = categoryId
      state.id = id
      state.specId = specId
      state.sizeId = sizeId
      state.styleId = productItem[0].styleId
      state.pagination = pagination
      state.activePage = pagination[0]
    },
    setStyleClass (state, {getStyleClass}) {
      state.getStyleClass = getStyleClass
    }
  },
  getters: {
  }
}
