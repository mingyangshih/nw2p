<template lang="pug">
  .standard
    .container-fluid
      .row.px-0.campaign.campaignBox.bg-primary(v-if="fullWidth >= 640")
        p.mb-0.w-100.campaignDes 全商品8折優惠 / 20% OFF．滿499免運費
      //- navbar
    .container
      navbarhead(:viewportWidth="fullWidth")
      .row.px-0.campaign.campaignBox.bg-primary(v-if="fullWidth < 640")
        p.mb-0.w-100.campaignDes 全商品8折優惠 / 20% OFF．滿499免運費
    .container
      .row
        .col-md-6
          swiper(:viewportWidth="fullWidth")
        .col-md-6
          p.productTitle 平裝相片書
          p.text-primary.font-weight-bold.secondTitle 選擇裝訂/尺寸
          p.font-weight-bold 尺寸
          .d-flex.align-items-end.mb-3
            .d-flex.flex-column(@click="size = '21正方 210x210mm'")
              img(src="../../assets/img/standard/b01.jpg")
              span.fz12.w-100.text-center 21正方
              span.fz12.w-100.text-center 210x210 mm
            .d-flex.flex-column.ml-3(@click="size = 'A4直 210x297mm'")
              img(src="../../assets/img/standard/b02.jpg")
              span.fz12.w-100.text-center A4直
              span.fz12.w-100.text-center 210x297 mm
          .d-flex.align-items-center
            label.mb-0(for="pageNumber") 頁數
            select#pageNumber.form-control.w-75.ml-3(v-model="pages")
              option(value=36) 內裝36頁 + 封面封底
              option(value=40) 內裝40頁 + 封面封底
          hr
          p.text-primary.font-weight-bold.secondTitle 產品資訊
            .row
              .col-3
                p 尺寸
              .col-9
                p {{size}}
            .row
              .col-3
                p 頁數
              .col-9
                p {{pages}}頁

</template>

<script>
import navbarhead from '../navbarhead'
import swiper from '../swiperComponent'
export default {
  components: {
    navbarhead,
    swiper
  },
  data () {
    return {
      fullWidth: document.body.clientWidth,
      size: '',
      pages: ''
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

<style lang="scss" scoped>
  $s14: 14px;
  $s20: 20px;
  $serif: 'Noto Serif TC', serif;
  .fz12{
    font-size: 12px;
  }
  .standard{
    width: 100%;
    // overflow-x: hidden;
  }
  // 促銷活動樣式
  .campaign{
    font-size: $s20;
    font-weight: bold;
    max-width: 1920px;
  }
  @media(max-width: 640px) {
    .campaign{
      font-size: 5vw;
    }
  }
  .campaignBox{
    height: 60px;
    box-sizing: border-box;
    color:white;
  }
  .campaignDes{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  // 產品規格設定
  .productTitle{
    font-size: 24px;
    font-weight: bold;
  }
  .secondTitle{
    font-size: 18px;
  }
  // hr 樣式
  hr{
    border-top: 2px solid rgba(0,0,0,0.5);
  }
</style>
