import axios from 'axios'
import qs from 'querystring'
export default {
  state: {
  },
  actions: {
    LOGIN (context, {memberId, password}) {
      // console.log(memberId, password)
      let data = {account: memberId, password: password}
      // console.log(qs.stringify(data))
      axios.post(`${process.env.API}/login`, qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((response) => {
        console.log(response.data)
      }).catch((error) => {
        console.log(error.data.error_message)
      })
    }
  }
}
