export const scroll = {
  methods: {
    scroll (elclass) {
      let el = document.querySelector(`.${elclass}`)
      return el.offsetTop
    }
  }
}
