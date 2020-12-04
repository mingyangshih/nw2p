<template lang="pug">
  .invoiceSearch
    alert
    .title 發票查詢
    //- ＊此處所顯示的電子發票皆為使用「永豐雲端印刷網會員載具」之發票。 ＊如欲查詢使用其它載具的發票內容，請至財政部電子發票整合服務平台查詢。 ＊您也可以進行會員載具歸戶，所有在永豐雲端印刷網交易的雲端發票，都可在財政部電子發票整合服務平台統一管理。
    hr.w-100
    p ＊本頁顯示訂單發票資料，電子發票若選擇「會員載具＞個人雲端發票」則使用「永豐雲端印刷網會員載具」儲存。
    p ＊如欲查詢使用其它載具的發票內容，請至<a href="https://www.einvoice.nat.gov.tw/" target="_blank">財政部電子發票整合服務平台</a>查詢。
    p ＊您的訂單資料可於下單後六小時內在本頁面查詢，發票號碼則會於商品出貨後三天內自動更新。
    .searchBarContent.mb-5
      p.mb-0 從
      input(type="date" v-model="startDate").form-control.rounded-0
      p.mb-0 至
      input(type="date" v-model="endDate").form-control.rounded-0
      button.btn.btn-outline-secondary.btn-sm.rounded-0.font-weight-bold.searchBtn(@click="getInvoice") 查詢
    .tableContent
      .table-responsive
        table.table
          thead
            tr
              th(scope='col').border-top-0.px-0 訂單編號
              th(scope='col').border-top-0.px-0 發票號碼
              th(scope='col').border-top-0.px-0 開立時間
              th(scope='col').border-top-0.px-0 金額
              th(scope='col').border-top-0.px-0 備註
              th(scope='col').border-top-0.px-0 發票類別
          tbody
            tr(v-for="item in invoiceAry" )
              th(scope='row') {{item.ordernumber}}
              td().text-primary.font-weight-bold.invoiceNum <span @click="invoiceNum(item.invoicenumber)" v-if="item.invoicenumber">{{item.invoicenumber}}</span>
              td {{item.invoicedate}}
              td {{JSON.parse(item.tot_amt)|currency}}
              td
              td {{item.inv_kind}}
    // Modal
    #invoiceModal.modal.fade(tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true')
      .modal-dialog(role='document')
        .modal-content
          .modal-header.border-bottom-0
            button.close(type='button' @click="closeModal")
              span(aria-hidden='true') &times;
          .modal-body
            #system
            #imgbox

</template>

<script>
import {mapActions, mapState} from 'vuex'
import { createHelpers } from 'vuex-map-fields'
import alert from '../components/alert'
const { mapFields } = createHelpers({
  getterType: 'invoiceSearchModules/getField',
  mutationType: 'invoiceSearchModules/updateField'
})
export default{
  components: {alert},
  computed: {
    ...mapFields(['startDate', 'endDate']),
    ...mapState('invoiceSearchModules', ['invoiceAry'])
  },
  methods: {
    ...mapActions('invoiceSearchModules', ['getInvoice', 'init', 'invoiceImg', 'closeModal']),
    invoiceNum (invoiceNum) {
      this.$store.commit('invoiceSearchModules/invoiceNum', {invoiceNum})
      this.invoiceImg()
    }
  },
  created () {
    let vm = this
    vm.init()
  }
}
</script>

<style lang="scss" scoped>
  .invoiceNum{
    cursor: pointer;
  }
  .title{
    font-size: 24px;
    font-weight: bold;
    font-family: "Noto Serif TC",serif;
  }
  .searchBtn{
    flex-shrink: 0;
  }

  @media(min-width: 640px) {
    .searchBarContent{
      display:flex;
      justify-content:center;
      align-items:center;
      input[type="date"]{
        margin:0 8px;
      }
    }
  }
  @media(max-width: 641px) {
    .searchBarContent{
      display:flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      input[type="date"]{
        margin:0 0 8px;
      }
    }
  }

  th,td{
    vertical-align: middle;
    text-align: center;
  }
</style>
