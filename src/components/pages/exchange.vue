<template lang="pug">
  .container
    .exchange
      .title.mb-5 兌換專區
      //- hr.w-100
      .table-responsive
        table.table
          thead
            tr
              th.border-top-0 商品名稱
              th.border-top-0 編輯連結
          tbody
            tr(v-for="item in coupons")
              td {{item.templateName}}
              td
                a.btn.btn-sm.btn-outline-primary(:href="item.editLink") 連結

</template>

<script>
import {mapState, mapActions} from 'vuex'
export default{
  computed: {
    ...mapState('exchangeModules', ['coupons'])
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
</style>
