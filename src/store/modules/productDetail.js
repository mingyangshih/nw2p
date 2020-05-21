import axios from 'axios'
import router from '@/router'

export default{
  state: {
    subMenuTotalData: [],
    categoryName: null,
    subProducts: []
  },
  actions: {
    getSubMenu (context, {categoryId}) {
      context.commit('LOADING', true, {root: true})
      let API_PATH = window.API
      context.state.categoryName = null
      let getAPI = `${API_PATH}product/getsubmenu/${categoryId}`
      return axios.get(getAPI).then(response => {
        let subMenuTotalData = response.data.data
        let subProducts = response.data.data[0].subProducts
        let categoryName = response.data.data[0].categoryName
        context.commit('subMenuTotalData', {subMenuTotalData, categoryName, subProducts})
      }).catch(error => {
        console.log(error)
        router.push('/')
      }).finally(() => {
        context.commit('LOADING', false, {root: true})
      })
    }
  },
  mutations: {
    subMenuTotalData (state, {subMenuTotalData, categoryName, subProducts}) {
      state.subMenuTotalData = subMenuTotalData
      state.categoryName = categoryName
      state.subProducts = subProducts
    }
  }
}
