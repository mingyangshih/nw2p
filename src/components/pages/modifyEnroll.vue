<template lang="pug">
  .modifyEnroll
    .container-fluid
      .row.px-0.campaign.campaignBox.bg-primary(v-if="fullWidth >= 640")
        p.mb-0.w-100.campaignDes.bor 全商品8折優惠 / 20% OFF．滿499免運費
    .container
      navbarhead(:viewportWidth="fullWidth")
      navCustomize(:viewportWidth="fullWidth")
    .container
      p.font-weight-bold.name.border-bottom.mb-0.py-3(v-if="fullWidth<= 640") Hi {{nw2pMemberData.UDNAME}}!
      nav(aria-label="breadcrumb")
        ol.breadcrumb.bg-white.pl-0
          router-link(to="/").text-gray.breadcrumb-item.text-decoration-none 首頁
          li.text-gray.breadcrumb-item 我的帳戶
          li.breadcrumb-item.active.text-dark 資料修改
      hr
    .container
      .row
        .col-md-2
          .d-flex.flex-column
            router-link(to="/modifyEnroll").text-decoration-none.mb-3.sideBarDetail 資料修改
            router-link(to="/modifyEnroll/changePassword").text-decoration-none.mb-3.sideBarDetail 變更密碼
        .col-md-10
          router-view
    enrollmodal
    loginmodal
</template>

<script>
import navbarhead from '../navbarhead'
import navCustomize from '../navCustomize'
import {mapActions, mapState} from 'vuex'
import enrollmodal from '../../components/enrollmodal'
import loginmodal from '../../components/loginmodal'
export default {
  components: {
    navbarhead,
    enrollmodal,
    loginmodal,
    navCustomize
  },
  data () {
    return {
      fullWidth: document.body.clientWidth
    }
  },
  methods: {
    ...mapActions('modifyEnrollModules', ['getOldData'])
  },
  computed: {
    ...mapState({
      nw2pMemberData: state => state.navbarModules.nw2pMemberData
    })
  },
  created () {
    // 取得舊資料
    this.getOldData()
  },
  mounted () {
    const vm = this
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

<style lang="scss" scoped>
$s14: 14px;
$s20: 20px;
$serif: 'Noto Serif TC', serif;
.campaign{
  font-size: $s20;
  max-width: 1920px;
}
.campaignBox{
  height: 60px;
  box-sizing: border-box;
  color:white;
}
.campaignDes{
  display: flex;
  justify-content: center;
  align-items: center
}
hr{
  border-top: 1px solid rgba(0,0,0,.8);
}
.sideBarDetail{
  color: black;
  &:hover{
    color:rgba(0,0,0,.5)
  }
}
.name{
  font-family:'DFKai-sb';
  font-size: 20px;
}
</style>
