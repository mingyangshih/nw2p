<template lang="pug">
  .container
    .row.pt-4.justify-content-cneter
      .col-md-3.col-6.footerContent
        p.footerTitle.font-weight-bold 商品資訊
        p 相片書
        p 卡片系列
        p 生活雜貨
        p 創意科技
        p 衣料織品
      .col-md-6.col-6.d-flex(:class="{'flex-column':viewportWidth<=640}")
        .aboutUs.w-100.w-md-50
          p.footerTitle.font-weight-bold 關於我們
          p 關於永豐
          p 服務使用條款
          p 隱私條款
        .saledServiceBox.w-100.w-md-50
          p.footerTitle.font-weight-bold 售後服務
          p 常見問題
          p 退貨須知
          p 付款與運費說明
      .col-md-3.px-0.mx-0(:class="{'row':viewportWidth <= 640,'flex-column':viewportWidth <= 640,'align-items-center':viewportWidth <= 640}")
        p.footerTitle.font-weight-bold(v-if="viewportWidth > 640") 聯絡我們
        p 週一至週五 9:00~18:00
        p 電子郵件 service@babala.com.tw
        <i class="fab fa-facebook-square fa-lg"></i>
    .d-flex.justify-content-center.mt-3.pb-3(v-if="viewportWidth <= 640")
      button.btn.btn-primary.font-weight-bold.btnInPage.pr-0.py-0 聯絡我們 <i class="fas fa-chevron-right fa-xs"></i>
</template>

<script>
export default {
  props: ['viewportWidth']
}
</script>
<style lang="scss" scoped>
.footerContent{
  font-size: 17px;
}
.footerTitle{
  font-size: 21px;
}
@media(max-width:640px){
  .footerContent{
    p{
      padding-left: 16px;
    }
  }
}
// 頁面中的Btn樣式
.btnInPage{
  border-radius: 5px;
  width: 203px;
  height: 39px;
  font-size: 21px;
  padding-left: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  .fa-chevron-right{
    margin-left: 37px;
  }
}
</style>
