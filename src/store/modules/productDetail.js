import axios from 'axios'
import router from '@/router'

export default{
  state: {
    subMenuTotalData: [],
    categoryName: null,
    subProducts: [],
    categoryBannerText: ''
  },
  actions: {
    getSubMenu (context, {categoryId}) {
      context.commit('LOADING', true, {root: true})
      let API_PATH = process.env.API
      context.state.categoryName = null
      let getAPI = `${API_PATH}product/getsubmenu/${categoryId}`
      return axios.get(getAPI).then(response => {
        let subMenuTotalData = response.data.data
        let subProducts = response.data.data[0].subProducts
        let categoryName = response.data.data[0].categoryName
        let {categoryBannerText} = response.data.data[0]
        context.commit('subMenuTotalData', {subMenuTotalData, categoryName, subProducts, categoryBannerText})
        context.commit('LOADING', false, {root: true})
      }).catch(error => {
        console.log(error)
        router.push('/')
      })
    }
  },
  mutations: {
    subMenuTotalData (state, {subMenuTotalData, categoryName, subProducts, categoryBannerText}) {
      state.subMenuTotalData = subMenuTotalData
      state.categoryName = categoryName
      state.subProducts = subProducts
      state.categoryBannerText = categoryBannerText
    }
  }
}
