import axios from 'axios'
export default {
  state: {
    bulletinArray: []
  },
  actions: {
    getBulletin ({state}) {
      let API_PATH = process.env.API
      let getAPI = `${API_PATH}bulletin/list`
      axios.get(getAPI).then(response => {
        state.bulletinArray = response.data.data
      }).catch((error) => {
        if (error.response) {
          console.log(error)
        }
      }).finally(() => {
      })
    }
  }
}
