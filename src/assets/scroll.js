export const scroll = {
  methods: {
    scroll (elclass) {
      let el = document.querySelectorAll(`.${elclass}`)
      let elem = [...el]
      let distance = []
      elem.forEach(function (item) {
        distance.push(item.offsetTop)
      })
      // distance fomr wiodow to element
      return {elem, distance}
    }
  }
}
