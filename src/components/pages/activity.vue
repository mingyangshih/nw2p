<template lang="pug">
  .activity
    .container-fluid.px-0.d-flex.justify-content-center
      img.img-fluid.deskImg(src="../../../static/activity/desktop.jpg")
      img.img-fluid.mobileImg(src="../../../static/activity/mobile.jpg")
    .container
      .d-flex.justify-content-center.align-items-center.my-4
        .activityTitle.font-weight-bold 活動期間
      p.w-100.text-center.firstDesc.font-weight-bold 第一波活動：2020/10/16 <span class="secondDesc">(上午 10:00)</span> ～2020/10/30 <span class="secondDesc">(下午 18:00)</span> 桌月曆早鳥 8 折
      p.w-100.text-center.firstDesc.font-weight-bold 第二波活動：2020/11/2 <span class="secondDesc">(上午 10:00)</span>～2020/11/13 <span class="secondDesc">(下午 23:59)</span> <span class="notice">詳細內容敬請期待！</span>
      .d-flex.justify-content-center.align-items-center.my-4
        .activityTitle.font-weight-bold 抽獎時間
      p.w-100.text-center.firstDesc.font-weight-bold 11 月第 4 週，詳細日期將另行公布。
      .d-flex.justify-content-center.align-items-center.my-4
        .activityTitle.font-weight-bold 領獎方式
      p.w-100.text-center.firstDesc.font-weight-bold.mb-md-3 抽出得獎者後將於 <a href="https://www.facebook.com/cloudw2p.tw/" class="text-decoration-none" target="_blank">永豐雲端印刷往粉絲團</a>與本頁面
      p.w-100.text-center.firstDesc.font-weight-bold 公布相關訊息，同時由客服人員主動聯繫得獎者，確認領獎相關事宜。
      .d-flex.justify-content-center.align-items-center.my-4
        .activityTitle.font-weight-bold.bg-primary 活動規則
      p.w-100.firstDesc.font-weight-bold.text-justify 兩波活動期間內，<span class="notice font-weight-bold">只要在永豐雲端印刷網新站<a href="https://new.cloudw2p.com/" class="notice" target="_blank">(https://new.cloudw2p.com/)</a>消費滿 1500 元（運費不列入計算）</span>，即可憑發票號碼參加抽獎，活動期間內消費滿額次數越多，就能有越多抽獎機會。
      p.w-100.text-left.secondDesc 範例：
      ol
        li.secondDesc 小明在活動期間於新站消費 3 次，消費金額皆為 1600 元，則小明獲得 3 次抽獎機會。
        li.secondDesc 小花在活動期間於新站消費 1 次，消費金額為 3000 元，則小花獲得 1 次抽獎機會。
        li.secondDesc 小宇在活動期間於新站消費 1 次，消費金額為 1470 元，含運費共 1550 元，但不符合活動規則，無法獲得抽獎機會。
        li.secondDesc 小志在活動期間於<span class="notice font-weight-bold">舊站</span>消費 2 次，消費金額皆為 1700 元，但不符合活動規則，無法獲得抽獎機會。
      .d-flex.justify-content-center.align-items-center.my-4
        .activityTitle.font-weight-bold.bg-primary 注意事項
      ol
        li.secondDesc 本次活動每位會員限領一次獎項，若抽獎過程出現重複得獎人，永豐紙業將另外抽出得獎人替補。
        li.secondDesc 中獎者若未滿 20 歲須獲得法定代理人同意並代為領取。
        li.secondDesc 依中華民國所得稅法規定，凡中獎價值超過新台幣 $1,000 元者，獎項將須列入個人年度綜合所得稅申報（稅額以獎品市價計算）。中獎價值超過新台幣 $20,000 元者，須繳納 10% 稅金（非中華民國境內居住之個人，依法扣繳 20% 稅金。又稅額以獎品市價計算），永豐紙業依法代收中獎稅金，若中獎人未能如期依法繳納應繳稅額，即視為放棄得獎資格。
        li.secondDesc 本活動限設籍於臺灣、澎湖、金門、馬祖地區消費者參與。
        li.secondDesc 獎項詳細內容與規格以實物為準，主辦單位不提供購買證明與發票，也不負贈品之任何維護或保固責任。
        li.secondDesc 若得獎名單公布後 14 天得獎人未主動領獎，亦或得獎人會員資料與聯絡資訊不實導致無法聯繫，則永豐紙業有權取消得獎資格，並重新抽獎。
        li.secondDesc 如遇獎品缺項，永豐紙業有權替換等價商品。
        li.secondDesc 如有未盡事宜，永豐紙業擁有保留、修改、暫停及解釋活動內容之權利，修改訊息將於活動網頁公佈，恕不另行通知。
</template>

<script>
export default{

}
</script>

<style lang="scss" scoped>
  .activityTitle{
    background: #E54E55;
    color:white;
    font-size: 36px;
    padding:8px 30px;
    box-sizing: border-box;
    font-family: "Noto Serif TC",serif;
    letter-spacing: 1px;
    font-size: 36px;
    border-radius: 20px;
  }
  @media(max-width: 640px){
    .activityTitle{
      font-size: 28px;
    }
  }
  .firstDesc{
    font-size: 27px;
    font-family: "Noto Serif TC",serif;
    letter-spacing: 1px;
    .notice{
      color: #E54E55;
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
      color: #E54E55;
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
