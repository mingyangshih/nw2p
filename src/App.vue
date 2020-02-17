<template lang="pug">
  #app
    loading(:active.sync="isLoading" :is-full-page="fullPage" :color="color" :loader="loader")
    router-view
</template>

<script>
export default {
  name: 'App',
  components: {
    // loading
  },
  data () {
    return {
      fullPage: true,
      color: '#5c87a6',
      loader: 'dots'
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang="scss">
body{
  -ms-overflow-style: none;
}
// 解決RWD螢幕寬度問題 https://css-tricks.com/forums/topic/best-media-query-excluding-scroll-solution/
@media(min-width: 640px) and (max-width: 657px){
  html {
    overflow: hidden;
    height: 100%;
  }

  body {
    height: 100%;
    overflow-y: scroll;
    position: relative;
  }
}

@import "./assets/all.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
