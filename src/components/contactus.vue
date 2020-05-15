<template lang="pug">
  .contactus
    .title 客服信箱
    hr
    .d-flex.align-items-center
      .col-md-3
        p 客服信箱
      .col-md-9
        p services@cloud2p.com
    .d-flex.align-items-center
      .col-md-3
        p 客服時間
      .col-md-9
        p 週一至週五 ( 非例假日 )，10:00 ~ 12:00 及 13:00 ~ 17:00
    .d-flex.align-items-center.mb-3
      .col-md-3
        p 姓名
      .col-md-9
        input(type="text").form-control
    .d-flex.align-items-center.mb-3
      .col-md-3
        p 電話
      .col-md-9
        input(type="text").form-control
    .d-flex.align-items-center.mb-3
      .col-md-3
        p Email
      .col-md-9
        input(type="text").form-control
    .d-flex.align-items-center.mb-3
      .col-md-3
        p 您的留言
      .col-md-9
        textarea(name="" id="" cols="30" rows="10").form-control
    .d-flex.align-items-center.mb-3
      .col-md-3
      .col-md-9
        p 如一直收不到回覆信件，請查明您的垃圾信件夾，並將services@cloudw2p.com 加入通訊錄喔！上列您填入的資料，僅在雲端印刷網上交易使用，不會作為其他用途使用。以上資料請仔細填寫，聯絡將以此資料為主，謝謝您的填寫。
    .d-flex.justify-content-end
      button.btn.btn-primary.font-weight-bold.btnInPage.pr-0.py-0.my-3.text-decoration-none 確認送出 <i class="fas fa-chevron-right fa-xs"></i>

  //-   <vue-recaptcha sitekey="6LdHFfcUAAAAADCn3wk3uobB9hE3kWWwIkIA5h-u" @verify="buttonshow =true" @expired="buttonshow = false">
  //- </vue-recaptcha>
  //- <button v-if="buttonshow">test</button>
  </div>

</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
export default {
  components: { VueRecaptcha },
  data: function () {
    return {
      buttonshow: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .title{
    font-size: 24px;
    font-weight: bold;
    font-family: "Noto Serif TC",serif;
  }
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
