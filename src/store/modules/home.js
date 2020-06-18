import axios from 'axios'

export default {
  state: {
    // 一個理由下面的資料
    getIndexData: [],
    getHomeCategoryData: []
  },
  actions: {
    // 取一個理由下面的資料
    getIndex ({commit}) {
      let API_PATH = process.env.API
      commit('LOADING', true, {root: true})
      return axios.get(`${API_PATH}product/getindex`).then((response) => {
        commit('changeIndexData', response.data.data)
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        commit('LOADING', false, {root: true})
      })
    },
    getHomeCategory ({commit}) {
      let API_PATH = process.env.API
      return axios.get(`${API_PATH}product/getcategory`).then((response) => {
        commit('changeHomeCategoryData', response.data.data)
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        commit('LOADING', false, {root: true})
      })
    }
  },
  mutations: {
    changeIndexData (state, indexData) {
      state.getIndexData = indexData
    },
    changeHomeCategoryData (state, getHomeCategoryData) {
      state.getHomeCategoryData = getHomeCategoryData
    }
  }
}
