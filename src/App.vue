<template lang="pug">
  #app
    loading(:active.sync="isLoading" :is-full-page="fullPage" :color="color" :loader="loader")
    .container-fluid
      .row.px-0.campaign.campaignBox.bg-primary(v-if="fullWidth >= 640")
        p.mb-0.w-100.campaignDes 全商品8折優惠 / 20% OFF．滿499免運費
    .container.px-0
      tpxNavbarhead(:viewportWidth="fullWidth")
      navCustomize(:viewportWidth="fullWidth")
    .container-fluid
      .row.px-0.campaign.campaignBox.bg-primary(v-if="fullWidth < 640")
        p.mb-0.w-100.campaignDes 全商品8折優惠 / 20% OFF．滿499免運費
    router-view
</template>

<script>
import tpxNavbarhead from './components/tpxNavbarhead'
import navCustomize from './components/navCustomize'
export default {
  name: 'App',
  components: {
    // loading
    tpxNavbarhead,
    navCustomize
  },
  data () {
    return {
      fullPage: true,
      color: '#5c87a6',
      loader: 'dots',
      fullWidth: document.body.clientWidth
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  mounted () {
    const vm = this
    // resize 事件
    window.onresize = () => {
      return (() => {
        vm.fullWidth = document.documentElement.clientWidth
      })()
    }
  },
  watch: {
    // val 為改變的值
    fullWidth (val) {
      this.fullWidth = val
    }
  }
}
</script>

<style lang="scss">
@import "./assets/all.scss";
$s14: 14px;
$s20: 20px;
$serif: 'Noto Serif TC', serif;
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
#app {
  font-family: Arial, Helvetica, "Microsoft JhengHei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
// 最上方促銷活動
.campaign{
  font-size: $s20;
  max-width: 100vw;
}
.campaignBox{
  height: 60px;
  box-sizing: border-box;
  color:white;
}
@media(max-width: 640px) {
 .campaign{
   font-size: 5vw;
 }
}
.campaignDes{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
