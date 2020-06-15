<template lang="pug">
  .teachEdit
    .title 編輯教學
    hr
    .d-flex.flex-column
      input(type="checkbox" id="first" checked).d-none
      .d-flex.labelContent
        label(for="first").mb-0.plus.mr-3 +
        label(for="first").mb-0.minus.mr-3 -
        label(for="first").destitle.mb-0 1.點選「我要製作」開啟編輯器並上傳圖片
      .text-justify.indent.pl-3 (1) 點選藍色按鈕「添加圖片並開始」
      .imgBox.justify-content-center
        img(src="../assets/img/serviceContent/1-1.jpg").img-fluid.mt-3
      .text-justify.indent.pl-3 (2) 上傳圖片
      .imgBox.justify-content-center
        img(src="../assets/img/serviceContent/1-2.jpg").img-fluid.mt-3
      .text-justify.indent.pl-3 (3) 將上傳的照片拖拉到編輯區的圖片框中
      .imgBox.justify-content-center
        img(src="../assets/img/serviceContent/1-3.jpg").img-fluid.mt-3
    hr
    .d-flex.flex-column
      input(type="checkbox" id="twoOne" checked).d-none
      .d-flex.labelContent
        label(for="twoOne").mb-0.plus.mr-3 +
        label(for="twoOne").mb-0.minus.mr-3 -
        label(for="twoOne").destitle.mb-0 2-1.開始編輯：左方工具列「圖片」功能說明
      .text-justify.indent.pl-3 (1) 照片排序
      .imgBox.justify-content-center
        img(src="../assets/img/serviceContent/2-1-1.jpg").img-fluid.mt-3
      .text-justify.indent.pl-3 (2) 圖片管理器
      .imgBox.justify-content-center
        img(src="../assets/img/serviceContent/2-1-2.jpg").img-fluid.mt-3
      .text-justify.indent.pl-3 (3) 撤銷(復原鍵入) / 重做 / 照片右上角數字 / 總上傳張數
      .imgBox.justify-content-center
        img(src="../assets/img/serviceContent/2-1-3.jpg").img-fluid.mt-3
    hr
    .d-flex.flex-column
      input(type="checkbox" id="twoTwo" checked).d-none
      .d-flex.labelContent
        label(for="twoTwo").mb-0.plus.mr-3 +
        label(for="twoTwo").mb-0.minus.mr-3 -
        label(for="twoTwo").destitle.mb-0 2-2.開始編輯：上方工具列「編輯工具」功能說明
      .imgBox.justify-content-center
        img(src="../assets/img/serviceContent/2-2-0.jpg").img-fluid.mt-3
      .text-justify.indent.pl-3 (1) 添加圖片框 / 添加文本框(文字框)
      .imgBox.justify-content-center
        img(src="../assets/img/serviceContent/2-2-1.jpg").img-fluid.mt-3
      .text-justify.indent.pl-3 (2) 點選「自動排版」，即跳出下圖視窗，將您上傳的圖片自動編輯到作品。
      .imgBox.justify-content-center
        img(src="../assets/img/serviceContent/2-1-3.jpg").img-fluid.mt-3
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
    max-width: 100%;
  }
  input ~ .imgBox > img{
    display: none;
  }
  input:checked ~ .imgBox > img{
    display: initial;
    width:100%;
  }
</style>
