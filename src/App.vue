<template lang="pug">
  #app(:class="{'scrollDiasbled':sideBarShow}")
    loading(:active.sync="isLoading" :is-full-page="fullPage" :color="color" :loader="loader")
    .container-fluid
      .row.px-0.campaign.campaignBox.bg-primary(v-if="fullWidth > 640")
        p.mb-0.w-100.campaignDes 新平台，新體驗，正式上線！
    .container.px-0.mx-md-6
      combineNav
    .container-fluid
      .row.px-0.campaign.campaignBox.bg-primary(v-if="fullWidth <= 640")
        p.mb-0.w-100.campaignDes 新平台，新體驗，正式上線！
    router-view
    .container-fluid.border-top.px-0.footer
      footerComponent(:viewportWidth="fullWidth")
    copyright(:viewportWidth="fullWidth")
</template>

<script>
import {mapState} from 'vuex'
import tpxNavbarhead from './components/tpxNavbarhead'
import navCustomize from './components/navCustomize'
import combineNav from './components/combineNav'
import footerComponent from './components/footer'
import copyright from './components/copyright'
export default {
  name: 'App',
  components: {
    footerComponent,
    tpxNavbarhead,
    navCustomize,
    combineNav,
    copyright
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
    },
    ...mapState({
      sideBarShow: state => state.sideBarShow
    })
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
// 側邊欄打開不給滾動
.scrollDiasbled{
  height: 100vh;
  overflow: hidden;
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
.footer{
  background-color: #f4f4f1;
  position: relative;
}
.modal-backdrop{
  z-index: 0;
}
// .darkBg{
//   width: 100%;
//   background: rgba(0,0,0,.4);
//   height: 100vh;
//   position: absolute;
//   top:0;
//   bottom:0;
//   right:0;
//   z-index:99;
// }
// .overlay{
//   position: fixed;
//   top: 0px;
//   left: 0px;
//   right: 0px;
//   bottom: 0px;
//   background-color: rgba(0, 0, 0, 0.4);
//   z-index:100;

//   .overlay-content {
//     height: 100%;
//     overflow: scroll;
//   }
// }

</style>
