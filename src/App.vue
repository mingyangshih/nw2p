<template lang="pug">
  #app
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
body{
  &::-webkit-scrollbar {
    // display: none;
  }
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
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>
