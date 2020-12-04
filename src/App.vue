<template lang="pug">
  #app(:class="{'scrollDiasbled':sideBarShow || openStyleModal}")
    loading(:active.sync="isLoading" :is-full-page="fullPage" :color="color" :loader="loader")
    .container-fluid
      .row.px-0.campaign.campaignBox.bg-primary.desktop
        p.mb-0.w-100.campaignDes(v-for="(item,idx) in bulletinArray" v-if="bulletin === idx" v-html="item.content")
        //-  && Date.parse(item.issueEndDate) > timestemp
    .container.px-0.mx-md-6
      combineNav
    .container-fluid
      .row.px-0.campaign.campaignBox.bg-primary.mobile
        p.mb-0.w-100.campaignDes(v-for="(item,idx) in bulletinArray" v-if="bulletin === idx" v-html="item.content")
    router-view
    .container-fluid.border-top.px-0.footer
      footerComponent(:viewportWidth="fullWidth")
    copyright(:viewportWidth="fullWidth")
</template>

<script>
import {mapState, mapActions} from 'vuex'
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
      fullWidth: document.body.clientWidth,
      bulletin: 0,
      timestemp: null

    }
  },
  methods: {
    ...mapActions('bulletinModules', ['getBulletin'])
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    },
    ...mapState('bulletinModules', ['bulletinArray']),
    ...mapState({
      sideBarShow: state => state.sideBarShow,
      openStyleModal: state => state.openStyleModal
    })
  },
  async mounted () {
    const vm = this
    // resize 事件
    window.onresize = () => {
      return (() => {
        vm.fullWidth = document.documentElement.clientWidth
      })()
    }
    await vm.getBulletin()
    let date = new Date()
    let timestemp = date.getTime()
    vm.timestemp = timestemp
    // 跑馬燈邏輯
    await setInterval(function () {
      if (vm.bulletin < vm.bulletinArray.length - 1) {
        vm.bulletin += 1
      } else {
        vm.bulletin = 0
      }
    }, 2500)
  },
  async created () {

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
  a{
    color: white;
  }
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
.mobile{
  display:none;
}
.desktop{
  display:flex;
}
@media(max-width:640px){
  .mobile{
    display:flex;
  }
  .desktop{
    display:none;
  }
}
</style>
