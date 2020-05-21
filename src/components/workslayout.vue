<template lang="pug">
  .workslayout
    .title 作品編排
    hr
    .d-flex.flex-column
      input(type="checkbox" id="first").d-none
      .d-flex.labelContent
        label(for="first").mb-0.plus.mr-3 +
        label(for="first").mb-0.minus.mr-3 -
        label(for="first").destitle Q1：「色差」說明？
      .text-justify.indent.pl-3 A：印刷品皆屬影像複製，影響色彩呈現的原因有油墨、紙張、色彩曲線、時間、機台等等，所以同一圖檔在不同次印刷時，色彩都會有些微差距，色差度10%內皆屬正常。就如同沖印相片即使到同一個相館，不同天洗出來，色彩亦有差異一樣，即使大量同時印刷，前後時段印出的產品，也會略有差異，這是色彩複製一定會有的問題，詳情請參閱國際膠印印刷標準ISO12647-2。
    hr
    .d-flex.flex-column
      input(type="checkbox" id="two").d-none
      .d-flex.labelContent
        label(for="two").mb-0.plus.mr-3 +
        label(for="two").mb-0.minus.mr-3 -
        label(for="two").destitle Q2：何謂「作品編輯期限」？
      .text-justify.indent.pl-3 A：因系統空間有限，「編輯期限」是由最新的編輯日起算，一次編輯期限為30天，如果您逾期，我們會假設您已經不需要這個作品，系統會自動刪除作品，一旦刪除將無法復原。請大家隨時回來「我的作品」編輯你未完成的作品喔！※ 當系統空間不足，逾期作品 ( 包含上傳照片 ) 將優先被刪除。當您每次登入繼續編輯，系統會重新計算編輯期限，所以只要您有持續的在編輯您的作品，就不用擔心作品會被刪除囉！
    hr
    .d-flex.flex-column
      input(type="checkbox" id="three").d-none
      .d-flex.labelContent
        label(for="three").mb-0.plus.mr-3 +
        label(for="three").mb-0.minus.mr-3 -
        label(for="three").destitle Q3：何謂「購買後的作品保存期限」？
      .text-justify.indent.pl-3 A：因系統空間有限，「購買後的作品保存期限」是由購買日起算90天，如果超過此保存期限，系統會自動刪除作品，一旦刪除無法復原。如果您有機會再次編輯或購買該作品，建議您在作品永久刪除前，進入「我的作品」在該作品上選擇「複製」，系統將會複製一份一樣的作品在您的「我的作品」中，您將有30天可繼續完成您的作品。

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
    text-indent: -1.6rem;
    margin-top: 20px;
  }
  input:checked ~ .indent{
    display: initial;
  }
</style>
