<template lang="pug">
  .invoiceAndSaledService
    .title 發票與售後服務
    hr
    .d-flex.flex-column
      input(type="checkbox" id="first").d-none
      .d-flex.labelContent
        label(for="first").mb-0.plus.mr-3 +
        label(for="first").mb-0.minus.mr-3 -
        label(for="first").destitle.mb-0 Q1：如何聯絡我們?
      .text-justify.indent.pl-3 A：聯絡資訊
      .text-justify.indent.pl-3 客服專線： 02-2266-8944 Ext.8800
      .text-justify.indent.pl-3 services@cloudw2p.com
      .text-justify.indent.pl-3 週一至週五 ( 非例假日 )，10:00 ~ 12:00 及 13:00 ~ 17:00
    hr
    .d-flex.flex-column
      input(type="checkbox" id="two").d-none
      .d-flex.labelContent
        label(for="two").mb-0.plus.mr-3 +
        label(for="two").mb-0.minus.mr-3 -
        label(for="two").destitle.mb-0 Q2：付款後，兩週都未收到商品怎麼辦？
      .text-justify.indent.pl-3 A：請登入後，至「我的帳戶」→「您的訂單」中，可查詢訂單狀態。若仍有疑問，請寄信至客服信箱(services@cloudw2p.com，內容註明詢問事項、訂單與聯絡電話)或來電，我們將盡快提供協助。
      .text-justify.indent.pl-3 ※ 永豐雲端印刷網將會為會員保留最近三個月的物流相關資料以供查詢。
    hr
    .d-flex.flex-column
      input(type="checkbox" id="three").d-none
      .d-flex.labelContent
        label(for="three").mb-0.plus.mr-3 +
        label(for="three").mb-0.minus.mr-3 -
        label(for="three").destitle.mb-0 Q3：商品「發票」會如何收到?
      .text-justify.indent.pl-3 A：如有實體發票，發票會隨商品包裝，附於箱內。
      .text-justify.indent.pl-3 若未收到發票，請於客服時間來電或使用客服信箱，並註明內容詢問事項與聯絡電話將有專人為您處理。
    hr
    .d-flex.flex-column
      input(type="checkbox" id="four").d-none
      .d-flex.labelContent
        label(for="four").mb-0.plus.mr-3 +
        label(for="four").mb-0.minus.mr-3 -
        label(for="four").destitle.mb-0 Q4：商品「更換發票三聯式」公司戶的辦法？
      .text-justify.indent.pl-3 A：雲端印刷網在訂購流程中均有提供填寫「發票統編」及「抬頭的欄位」，請提供欲換開的抬頭和統編，將此問題 mail 到雲端印刷網的客服信箱 ( services@cloudw2p.com ) 或來電客服中心，將有專人為您處理。
      .text-justify.indent.pl-3 ※ 經客服人員確認後，請將收到的發票寄回，內附回郵信封，並註明欲變更的資料，我們將另行為您修改。
      .text-justify.indent.pl-3 ※ 寄回地址：236新北市土城區中央路一段365巷7號6樓 永豐雲端印刷網(客服部) 收 ( 一般作業時間約2週，請您稍後 )。
    hr
    .d-flex.flex-column
      input(type="checkbox" id="five").d-none
      .d-flex.labelContent
        label(for="five").mb-0.plus.mr-3 +
        label(for="five").mb-0.minus.mr-3 -
        label(for="five").destitle.mb-0 Q5：客訴或退貨時能否更換製作內容及製作材料？
      .text-justify.indent.pl-3 A：因工廠採自動化生產，若更換材料將影響產品正確性及一致性，故無法更換。
    hr
    .d-flex.flex-column
      input(type="checkbox" id="six").d-none
      .d-flex.labelContent
        label(for="six").mb-0.plus.mr-3 +
        label(for="six").mb-0.minus.mr-3 -
        label(for="six").destitle.mb-0 Q6：如何「退貨」？
      .text-justify.indent.pl-3 A：您在永豐雲端印刷網購買的每件商品均屬個人之客製化商品，故不提供七天鑑賞期。非人為惡意損壞之缺頁、掉頁、裝訂錯誤等重大瑕疵，恕不退貨。
      .text-justify.indent.pl-3 所訂購商品如發生缺頁、裝訂不良、印刷污損與其他歸責於本公司之情況，請於收到商品的七日內，拍下瑕疵發生情形，將照片及問題mail到客服信箱( services@cloudw2p.com )，本公司將在收到您的問題反應和確認問題歸屬後，視情況提供處理辦法，無故不接受退貨。
      .text-justify.indent.pl-3 ※些許色差屬印刷正常現象，彩色印刷是由CMYK四色版套印而成，由於印刷和承印物的特殊性，印刷成品色差值控制在±10%以內均為合格產品，顯示器上視覺顏色和印刷成品顏色均有一定的差異，不同批次的產品也會略有差異，詳情請參閱國際膠印印刷標準ISO12647-2，故色差並不構成退貨要件中的重大瑕疵。
    hr
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .title{
    font-size: 24px;
    font-weight: bold;
    font-family: "Noto Serif TC",serif;
  }
  .destitle{
    line-height: 18px;
    display: block;
    cursor: pointer;
    &:hover{
      border-bottom: 1px solid black;
    }
  }
  .plus{
    width: 20px;
    height: 20px;
    background: rgba(0,0,0,.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    line-height: 16px;
    &:hover{
      background: #000;
    }
  }
  .minus{
    width: 20px;
    height: 20px;
    background: black;
    display: none;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 50%;
    cursor: pointer;
    font-weight: bold;
    line-height: 16px;
  }
  input:checked ~ .labelContent > .plus{
    display: none;
  }
  input:checked ~ .labelContent > .minus{
    display: flex;
  }
  .indent{
    display: none;
    margin-left: 1.6rem;
    // text-indent: -1.6rem;
    margin-top: 16px;
  }
  input:checked ~ .indent{
    display: initial;
  }
  input ~ .imgBox{
    display: none;
  }
  input ~ .imgBox{
    display: flex;
  }
  input ~ .imgBox > img{
    display: none;
  }
  input:checked ~ .imgBox > img{
    display: initial;
    max-width:550px;
  }
</style>
