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
      let API_PATH = window.API
      axios.post(`${API_PATH}auth/login`, qs.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then((response) => {
        // 存資料到localstorage
        // console.log(response)
        if (response.data.error_code === 0) {
          let nw2pData = JSON.stringify(response.data.data[0])
          localStorage.setItem('nw2pData', nw2pData)
          // call navbar.js setTokenData mutations to set data
          // 為了修改navbar 上的顯示方式
          // commit('setTokenData', JSON.parse(nw2pData))
          alert('success')
          // commit('changeMessage', {message: '登入成功', theme: 'primary'})
          commit('LOADING', false)
        } else {
          alert('fail')
          // commit('changeMessage', {message: '登入失敗', theme: 'danger'})
          commit('LOADING', false)
        }
      }).catch(() => {
        // console.log(error.data.error_message)
        alert('API問題')
      })
    }
  }
}
