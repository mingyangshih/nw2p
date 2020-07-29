import axios from 'axios'
export default {
  state: {
    bulletinArray: []
  },
  actions: {
    getBulletin ({state}) {
      let API_PATH = process.env.API
      let getAPI = `${API_PATH}bulletin/list`
      return axios.get(getAPI).then(response => {
        state.bulletinArray = response.data.data
      })
    }
  }
}
