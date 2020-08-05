import axios from 'axios'
// import { getField, updateField } from 'vuex-map-fields'
export default {
  state: {
    productInfo: [],
    productItem: [],
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
    activePage: null
  },
  actions: {
    getStyle (context, {id, specId, sizeId}) {
      let API_PATH = process.env.API
      let getAPI = `${API_PATH}product/getdetailwithstyle/${id}/${specId}/${sizeId}/1/templateName/20`
      context.commit('LOADING', true, {root: true})
      return axios.get(getAPI).then((response) => {
        let {productItem} = response.data.data
        let {productName, categoryName, categoryId} = productItem[0]
        // count pagination
        let pagination = []
        productItem.forEach(itm => {
          if (pagination.indexOf(itm.page_no) === -1) {
            pagination.push(itm.page_no)
          }
        })
        context.commit('setStyleData', {productItem, id, specId, sizeId, productName, categoryName, categoryId, pagination})
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
      })
    },
    getStyleClass (context, {id}) {
      let API_PATH = process.env.API
      let getAPI = `${API_PATH}product/getstyle/${id}`
      return axios.get(getAPI).then((response) => {
        let getStyleClass = response.data
        context.commit('setStyleClass', {getStyleClass})
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        context.commit('LOADING', false, {root: true})
      })
    },
    changeStyle (context, {changeStyleId}) {
      let API_PATH = process.env.API
      let {id, specId, sizeId} = context.state
      let getAPI = `${API_PATH}product/getdetailwithstyle/${id}/${specId}/${sizeId}/${changeStyleId}/templateName/20`
      context.commit('LOADING', true, {root: true})
      axios.get(getAPI).then((response) => {
        let {productItem} = response.data.data
        let {productName, categoryName, categoryId} = context.state
        // 算pagination
        let pagination = []
        productItem.forEach(itm => {
          if (pagination.indexOf(itm.page_no) === -1) {
            pagination.push(itm.page_no)
          }
        })
        context.commit('setStyleData', {productItem, id, specId, sizeId, productName, categoryName, categoryId, pagination})
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        context.commit('LOADING', false, {root: true})
      })
    }
  },
  mutations: {
    setStyleData (state, {productItem, id, specId, sizeId, productName, categoryName, categoryId, pagination}) {
      state.productItem = productItem
      state.productItemRender = productItem
      state.productName = productName
      state.categoryName = categoryName
      state.categoryId = categoryId
      state.id = id
      state.specId = specId
      state.sizeId = sizeId
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
