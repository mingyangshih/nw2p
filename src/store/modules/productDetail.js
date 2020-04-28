import axios from 'axios'

export default{
  state: {
    subMenuTotalData: [],
    categoryName: null
  },
  actions: {
    getSubMenu (context, {categoryId}) {
      let API_PATH = window.API
      context.commit('LOADING', true, {root: true})
      let getAPI = `${API_PATH}product/getsubmenu/${categoryId}`
      axios.get(getAPI).then(response => {
        let subMenuTotalData = response.data.data
        let categoryName = response.data.data[0].categoryName
        context.commit('subMenuTotalData', {subMenuTotalData, categoryName})
      }).catch(error => {
        console.log(error)
      }).finally(() => {
        context.commit('LOADING', false, {root: true})
      })
    }
  },
  mutations: {
    subMenuTotalData (state, {subMenuTotalData, categoryName}) {
      state.subMenuTotalData = subMenuTotalData
      state.categoryName = categoryName
    }
  }
}
