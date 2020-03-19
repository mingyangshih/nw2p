import axios from 'axios'
import qs from 'querystring'
export default {
  state: {
  },
  actions: {
    LOGIN ({commit}, {memberId, password}) {
      commit('LOADING', true)
      let data = {account: memberId, password: password}
      // console.log(qs.stringify(data))
      axios.post(`${process.env.API}auth/login`, qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((response) => {
        // 存資料到localstorage
        let nw2pData = JSON.stringify(response.data.data[0])
        localStorage.setItem('nw2pData', nw2pData)
        // call navbar.js setTokenData mutations to set data
        // 為了修改navbar 上的顯示方式
        commit('setTokenData', JSON.parse(nw2pData))
        commit('LOADING', false)
      }).catch((error) => {
        console.log(error.data.error_message)
      })
    }
  }
}
