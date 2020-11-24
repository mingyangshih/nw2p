import axios from 'axios'
export default {
  namespaced: true,
  state: {
    pcBanner: [],
    mobileBanner: []
  },
  actions: {
    getBanner ({commit}) {
      // const vm = this
      let API_PATH = process.env.API
      return axios.get(`${API_PATH}banner/list`).then(response => {
        // console.log(response)
        let pcBanner = response.data.data[0].pc
        let mobileBanner = response.data.data[1].mobile
        commit('getBanner', {pcBanner, mobileBanner})
      }).catch(err => {
        if (err.response) {
          console.log(err)
        }
      })
    }
  },
  mutations: {
    getBanner (state, {pcBanner, mobileBanner}) {
      state.pcBanner = pcBanner
      state.mobileBanner = mobileBanner
    }
  }
}
