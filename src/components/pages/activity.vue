<template lang="pug">
  .activity
    .container-fluid.px-0
      img.img-fluid.deskImg(src="../../../static/activity/desktop.jpg" v-if="activityId == 1")
      img.img-fluid.mobileImg(src="../../../static/activity/mobile.jpg" v-if="activityId == 1")
      img.img-fluid.deskImg(src="../../../static/activity/desktop2.jpg" v-if="activityId == 2")
      img.img-fluid.mobileImg(src="../../../static/activity/mobile2.jpg" v-if="activityId == 2")
    .container
      .d-flex.justify-content-center.align-items-center.my-4
        .activityTitle.font-weight-bold 活動期間
      p.w-100.text-center.firstDesc.font-weight-bold 第一波活動：2020/10/16 <span class="secondDesc">(上午 10:00)</span> ～2020/10/30 <span class="secondDesc">(下午 18:00)</span> 桌月曆早鳥 8 折
      p.w-100.text-center.firstDesc.font-weight-bold 第二波活動：2020/11/2 <span class="secondDesc">(上午 10:00)</span>～2020/11/13 <span class="secondDesc">(下午 23:59)</span> <span class="notice">全館88折</span>
      .d-flex.justify-content-center.align-items-center.my-4
        .activityTitle.font-weight-bold 抽獎時間
      p.w-100.text-center.firstDesc.font-weight-bold 2020年11月第 4 週，詳細日期將另行公布。
      .d-flex.justify-content-center.align-items-center.my-4
        .activityTitle.font-weight-bold 領獎方式
      p.w-100.text-center.firstDesc.font-weight-bold.mb-md-3 <a href="https://www.facebook.com/cloudw2p.tw/posts/226494198832169" class="text-decoration-none" target="_blank">點我看抽獎活動得獎名單！</a>
      p.w-100.text-center.firstDesc.font-weight-bold 公布相關訊息，同時有客服人員主動聯繫得獎人，確認及辦理領獎相關事宜。
      .d-flex.justify-content-center.align-items-center.my-4
        .activityTitle.font-weight-bold.bg-primary 活動規則
      p.w-100.firstDesc.font-weight-bold.text-justify 兩波活動期間內，<span class="notice font-weight-bold">只要在永豐雲端印刷網新網站<a href="https://new.cloudw2p.com/" class="notice" target="_blank">(https://new.cloudw2p.com/)</a>單筆消費金額滿 1500 元（運費不列入計算）</span>，即可憑發票號碼參加抽獎，活動期間內消費滿額次數越多，就能有越多抽獎機會。
      p.w-100.text-left.secondDesc 範例：
      ol
        li.secondDesc 小明在活動期間於新網站消費 3 次，消費金額皆為 1600 元，則小明獲得 3 次抽獎機會。
        li.secondDesc 小花在活動期間於新網站消費 1 次，消費金額為 3000 元，則小花獲得 1 次抽獎機會。
        li.secondDesc 小宇在活動期間於新網站消費 1 次，消費金額為 1470 元，含運費共 1550 元，但不符合活動規則，無法獲得抽獎機會。
        li.secondDesc 小志在活動期間於<span class="notice font-weight-bold">舊網站</span>消費 2 次，消費金額皆為 1700 元，但不符合活動規則，無法獲得抽獎機會。
      .d-flex.justify-content-center.align-items-center.my-4
        .activityTitle.font-weight-bold.bg-primary 注意事項
      ol
        li.secondDesc 本活動限設籍於臺灣、澎湖、金門、馬祖地區之會員參與。
        li.secondDesc 本次活動每位會員限領一個獎項，若抽獎過程出現重複得獎人，主辦單位將另外抽出得獎人替補。
        li.secondDesc 依中華民國所得稅法規定，凡中獎價值超過新台幣 $1,000 元(含)者，需繳交身分證正反面影本供報稅使用，獎項將列入個人年度綜合所得稅申報。中獎價值超過新台幣 $20,000 元者，得獎人須先繳納 10% 稅金（非中華民國境內居住之個人，依法扣繳 20% 稅金），主辦單位依法代收中獎稅金，若得獎人未先行依法繳納稅金，即視為放棄得獎資格，並不得異議。獎品之稅金均以獎品市價計算。
        li.secondDesc 中獎者參加本活動而需支付任何稅捐皆為中獎者之法定義務，概與主辦單位/執行單位無關。前述稅捐法規如有更新或變動者，依修正後之規定辦理。
        li.secondDesc 得獎人若未滿 20 歲須獲得法定代理人同意並代為領取 。
        li.secondDesc 獎品悉以實物為準，主辦單位不提供獎品之購買證明與發票，也不負獎品之任何維護或保固責任。
        li.secondDesc 本活動獎品不得要求轉換、轉讓或折換現金。
        li.secondDesc 主辦單位保有變更兌換獎品或內容之權利，有權以等值商品或服務替代。
        li.secondDesc 獎項寄送地區僅限台、澎、金、馬，主辦單位不處理郵寄獎項至海外地區。
        li.secondDesc 本活動以系統以隨機方式抽出，主辦單位就本活動參加者之資格，保有審查之權利，若以惡意之電腦程式或其他明顯違反活動公平性之方式，或經查核有不符合本活動規定之參加資格者，一經本公司發現或經第三人檢舉，主辦單位除得立即取消參加者之參加、得獎資格，並得追回獎品。
        li.secondDesc 如因電腦、網路、電話、技術或其他不可歸責於主辦單位之事由，而使參與本活動者所登錄之資料有遺失、錯誤或毀損所導致資料無效之情況，主辦單位不負任何法律責任與任何通知，參加者與得獎者亦不得異議。
        li.secondDesc 若得獎名單公布後 14 天得獎人未主動領獎，亦或得獎人會員資料與聯絡資訊不實導致無法聯繫，則主辦單位有權取消得獎資格，並重新抽獎。
        li.secondDesc 領獎期限內未完成相關手續或領獎者，視同放棄得獎權利，不接受開立扣繳憑單者，亦同。
        li.secondDesc 如有未盡事宜，主辦單位保有取消、終止、修改、暫停及解釋活動內容之權利，最新訊息將於活動網頁公佈，恕不另行通知。
</template>

<script>
export default{
  data () {
    return {
      activityId: null
    }
  },
  created () {
    this.activityId = this.$route.params.id
  },
  watch: {
    async '$route' (to, from) {
      const vm = this
      const id = to.params.id
      if (to.params.id !== from.params.id) {
        vm.activityId = id
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .activityTitle{
    background: #f24f55;
    color:white;
    padding:8px 30px;
    box-sizing: border-box;
    font-family: "Noto Serif TC",serif;
    letter-spacing: 1px;
    font-size: 30px;
    border-radius: 20px;
  }
  @media(max-width: 640px){
    .activityTitle{
      font-size: 22px;
    }
  }
  .firstDesc{
    font-size: 27px;
    font-family: "Noto Serif TC",serif;
    letter-spacing: 1px;
    .notice{
      color: #f24f55;
    }
  }
  @media(max-width: 640px){
    .firstDesc{
      font-size: 19px;
    }
  }
  .secondDesc{
    font-size: 21px;
    font-family: Microsoft JhengHei;
    .notice{
      color:#f24f55;
    }
  }
  li{
    letter-spacing: 2px;
  }
  @media(max-width: 640px){
    li{
      font-size: 18px;
    }
  }
  @media(max-width: 640px){
    .deskImg{
      display:none;
    }
    .mobileImg{
      display:initial;
    }
  }
  @media(min-width: 640px){
    .deskImg{
      display:initial;
    }
    .mobileImg{
      display:none;
    }
  }
</style>
