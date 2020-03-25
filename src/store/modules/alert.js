export default{
  state: {
    message: '',
    theme: ''
  },
  // actions: {
  //   changeMessage ({commit}, message) {
  //     commit('changeMessage', message)
  //   }
  // },
  mutations: {
    changeMessage (state, {message, theme}) {
      state.message = message
      state.theme = theme
      setTimeout(function () {
        state.message = ''
        state.theme = ''
      }, 2000)
    }
  }
}
