import axios from 'axios'
import qs from 'querystring'
export default {
  state: {},
  actions: {
    ENROLL (context, enrollData) {
      // console.log(enrollData)
      axios.post(`${process.env.API}user/createuser`, qs.stringify(enrollData), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((response) => {
        window.location.reload()
        console.log(response.data)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
