<template lang="pug">
  .container
    .exchange
      .title.mb-5 兌換專區
      hr.w-100
      .d-flex.justify-content-center
        //- ol
        //-   li 請先確認要兌換商品的名稱與規格，再點擊開始製作。
        //-   li 作品編輯完成後請結帳，並於結帳頁面輸入兌換碼，才能完成兌換。
        //-   li 兌換專區商品結帳只限下單一品項，若有多個兌換商品請分次結帳。
        //-   li 換專區商品無法與一般商品合併結帳，請分開結帳。
        //-   li 兌換專區可於網站首頁最下方「服務內容」區塊點擊連結進入。
        img.img-fluid(src="../../../static/exchange.jpg", alt="")
    div(v-for="itm in kind")
      p.text-center.font-weight-bold.kindTitle.my-4 {{itm}}
      .row
        .col-md-3(v-for="item in coupons" v-if="item.productName === itm")
          a(:href="item.editLink").d-flex.flex-column.w-100.mb-3.shadow.text-decoration-none
            img(:src="item.imgcover ", alt="").img-fluid
            .w-100.p-3.text-center
              //- p.mb-0 {{item.categoryName}}
              p.mb-0.exchangeName {{item.templateName}}

</template>

<script>
import {mapState, mapActions} from 'vuex'
export default{
  computed: {
    ...mapState('exchangeModules', ['coupons', 'kind'])
  },
  methods: {
    ...mapActions('exchangeModules', ['getGroupCoupon'])
  },
  created () {
    // console.log(this.$store.state)
    let vm = this
    vm.getGroupCoupon()
  }
}
</script>

<style lang="scss" scoped>
  .title{
    font-size: 24px;
    font-weight: bold;
    font-family: "Noto Serif TC",serif;
  }
  .exchangeName {
    // font-size: 1px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    padding: 0 5px 0;
    color: #000;
  }
  .kindTitle{
    font-size: 24px;
    font-family: "Noto Serif TC",serif;
  }
</style>
