<template lang="pug">
  .teachEdit
    //- 桌機看到的樣子
    .desktopContent
      .title 編輯教學
      hr
      .d-flex.flex-column
        input(type="checkbox" id="oneOne" checked).d-none
        .d-flex.labelContent
          label(for="oneOne").mb-0.plus.mr-3 +
          label(for="oneOne").mb-0.minus.mr-3 -
          label(for="oneOne").destitle.mb-0 1.點選「我要製作」開啟編輯器並上傳圖片
        .text-justify.indent.pl-3 (1) 點選藍色按鈕「添加圖片並開始」
        .imgBox.justify-content-center.ml-md-3
          img(src="../assets/img/serviceContent/1-1.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (2) 上傳圖片
        .imgBox.justify-content-center.ml-md-3
          img(src="../assets/img/serviceContent/1-2.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (3) 將上傳的照片拖拉到編輯區的圖片框中
        .imgBox.ml-md-3.justify-content-center.ml-md-3
          img(src="../assets/img/serviceContent/1-3.jpg").img-fluid.mt-3
      hr
      .d-flex.flex-column
        input(type="checkbox" id="twoOne").d-none
        .d-flex.labelContent
          label(for="twoOne").mb-0.plus.mr-3 +
          label(for="twoOne").mb-0.minus.mr-3 -
          label(for="twoOne").destitle.mb-0 2-1.開始編輯：左方工具列「圖片」功能說明
        .text-justify.indent.pl-3 (1) 照片排序
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-1-1.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (2) 圖片管理器
        .imgBox.ml-md-3.justify-content-center
          img(src="../assets/img/serviceContent/2-1-2.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (3) 撤銷(復原鍵入) / 重做 / 照片右上角數字 / 總上傳張數
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-1-3.jpg").img-fluid.mt-3
      hr
      .d-flex.flex-column
        input(type="checkbox" id="twoTwo").d-none
        .d-flex.labelContent
          label(for="twoTwo").mb-0.plus.mr-3 +
          label(for="twoTwo").mb-0.minus.mr-3 -
          label(for="twoTwo").destitle.mb-0 2-2.開始編輯：上方工具列「編輯工具」功能說明
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-2-0.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (1) 添加圖片框 / 添加文本框(文字框)
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-2-1.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (2) 點選「自動排版」，即跳出下圖視窗，將您上傳的圖片自動編輯到作品。
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-2-2.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (3) 智能指引：編輯的過程中會顯示參考線。
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-2-3.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (4) 頁面版式：選擇版型拖拉到編輯區使用
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-2-4.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (5) 背景：選擇背景拖拉到編輯區使用
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-2-5.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (6) 素材庫：選擇圖示拖拉到編輯區使用
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-2-6.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (7) 蒙版：選擇遮色片效果拖拉到圖片上使用
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-2-7.jpg").img-fluid.mt-3
      hr
      .d-flex.flex-column
        input(type="checkbox" id="twoThree").d-none
        .d-flex.labelContent
          label(for="twoThree").mb-0.plus.mr-3 +
          label(for="twoThree").mb-0.minus.mr-3 -
          label(for="twoThree").destitle.mb-0 2-3. 開始編輯：上方工具列「圖片選項」功能說明
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-3-0.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (1) 效果
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-3-1.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (2) 增強
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-3-2.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (3) 裁剪 / 整理
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-3-3.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (4) 邊界
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-3-4.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (5) 陰影
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-3-5.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (6) 透明度
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-3-6.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (7) 方向
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-3-7.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (8) 形狀
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-3-8.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (9) 尺寸&位置
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-3-9.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (10) 對齊
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-3-10.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (11) 佈置
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-3-11.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (12) 適合
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-3-12.jpg").img-fluid.mt-3
      hr
      .d-flex.flex-column
        input(type="checkbox" id="twoFour").d-none
        .d-flex.labelContent
          label(for="twoFour").mb-0.plus.mr-3 +
          label(for="twoFour").mb-0.minus.mr-3 -
          label(for="twoFour").destitle.mb-0 2-4. 開始編輯：上方工具列「文字選項」功能說明
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-4-0.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (1) 文本編輯
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-4-1.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (2) 文本格式
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-4-2.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (3) 文本對齊
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-4-3.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (4) 邊界
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-4-4.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (5) 背景
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-4-5.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (6) 輪流
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-4-6.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (7) 文本方向
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-4-7.jpg").img-fluid.mt-3
      hr
      .d-flex.flex-column
        input(type="checkbox" id="twoFive").d-none
        .d-flex.labelContent
          label(for="twoFive").mb-0.plus.mr-3 +
          label(for="twoFive").mb-0.minus.mr-3 -
          label(for="twoFive").destitle.mb-0 2-5. 開始編輯：右方工具列「編輯器」功能說明
        .text-justify.indent.pl-3 (1)  剪下         (2)  複製         (3)  貼上         (4)  刪除
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-5.jpg").img-fluid.mt-3
      hr
      .d-flex.flex-column
        input(type="checkbox" id="twoSix").d-none
        .d-flex.labelContent
          label(for="twoSix").mb-0.plus.mr-3 +
          label(for="twoSix").mb-0.minus.mr-3 -
          label(for="twoSix").destitle.mb-0 2-6. 開始編輯：下方工具列「頁次管理」功能說明
        ol.indent
          li 總頁數：下拉可以更改可訂購頁數。(可訂購頁數分別為36、48、60、72、84頁)
          li 插入頁：插入頁數一次為 2 頁，編輯完成總頁數請依照36、48、60、72、84頁為主。
          li 刪除頁：刪除頁數一次為 2 頁，編輯完成總頁數請依照36、48、60、72、84頁為主。
          li 頁次：可以拖拉更換頁面順序。
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/2-6.jpg").img-fluid.mt-3
      hr
      .d-flex.flex-column
        input(type="checkbox" id="threeThree").d-none
        .d-flex.labelContent
          label(for="threeThree").mb-0.plus.mr-3 +
          label(for="threeThree").mb-0.minus.mr-3 -
          label(for="threeThree").destitle.mb-0 3. 編輯完成進行訂購
        .text-justify.indent.pl-3 (1) 點選右上角「添加到購物車」即可進行結帳
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/3.jpg").img-fluid.mt-3
      hr
      .d-flex.flex-column
        input(type="checkbox" id="fourFour").d-none
        .d-flex.labelContent
          label(for="fourFour").mb-0.plus.mr-3 +
          label(for="fourFour").mb-0.minus.mr-3 -
          label(for="fourFour").destitle.mb-0 4. 上方工具列「作品管理」功能說明
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/4-0.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (1) 分享：您可以複製連結到您社群網站分享作品
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/4-1.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (2) 簡單編輯：可切換到簡單模式編輯
        .text-justify.indent.pl-3 (3) 保存：輸入作品名稱及可儲存作品
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/4-3.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (4) 預覽
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/4-4.jpg").img-fluid.mt-3
        .text-justify.indent.pl-3 (5) 各國語言切換
        .imgBox.ml-md-3
          img(src="../assets/img/serviceContent/4-5.jpg").img-fluid.mt-3
      hr
    //- mobile看到的樣子
    .mobileContent
      .title.mb-3 編輯教學
      .px-0
        .d-flex.flex-column
          input(type="checkbox" id="teachEditoneone" checked).d-none
          .d-flex.labelContent
            //- label(for="teachEditoneone").mb-0.plus.mr-3 +
            //- label(for="teachEditoneone").mb-0.minus.mr-3 -
            label(for="teachEditoneone").destitle.mb-0 1.點選「我要製作」開啟編輯器並上傳圖片
          .text-justify.indent (1) 點選藍色按鈕「添加圖片並開始」
          .imgBox.justify-content-center
            img(src="../assets/img/serviceContent/1-1.jpg").img-fluid.mt-3
          .text-justify.indent (2) 上傳圖片
          .imgBox.justify-content-center
            img(src="../assets/img/serviceContent/1-2.jpg").img-fluid.mt-3
          .text-justify.indent (3) 將上傳的照片拖拉到編輯區的圖片框中
          .imgBox.justify-content-center
            img(src="../assets/img/serviceContent/1-3.jpg").img-fluid.mt-3
        hr
        .d-flex.flex-column
          input(type="checkbox" id="teachEdittwoOne").d-none
          .d-flex.labelContent
            //- label(for="teachEdittwoOne").mb-0.plus.mr-3 +
            //- label(for="teachEdittwoOne").mb-0.minus.mr-3 -
            label(for="teachEdittwoOne").destitle.mb-0 2-1.開始編輯：左方工具列「圖片」功能說明
          .text-justify.indent (1) 照片排序
          .imgBox
            img(src="../assets/img/serviceContent/2-1-1.jpg").img-fluid.mt-3
          .text-justify.indent (2) 圖片管理器
          .imgBox.justify-content-center
            img(src="../assets/img/serviceContent/2-1-2.jpg").img-fluid.mt-3
          .text-justify.indent (3) 撤銷(復原鍵入) / 重做 / 照片右上角數字 / 總上傳張數
          .imgBox
            img(src="../assets/img/serviceContent/2-1-3.jpg").img-fluid.mt-3
        hr
        .d-flex.flex-column
          input(type="checkbox" id="teachEdittwoTwo").d-none
          .d-flex.labelContent
            //- label(for="teachEdittwoTwo").mb-0.plus.mr-3 +
            //- label(for="teachEdittwoTwo").mb-0.minus.mr-3 -
            label(for="teachEdittwoTwo").destitle.mb-0 2-2.開始編輯：上方工具列「編輯工具」功能說明
          .imgBox
            img(src="../assets/img/serviceContent/2-2-0.jpg").img-fluid.mt-3
          .text-justify.indent (1) 添加圖片框 / 添加文本框(文字框)
          .imgBox
            img(src="../assets/img/serviceContent/2-2-1.jpg").img-fluid.mt-3
          .text-justify.indent (2) 點選「自動排版」，即跳出下圖視窗，將您上傳的圖片自動編輯到作品。
          .imgBox
            img(src="../assets/img/serviceContent/2-2-2.jpg").img-fluid.mt-3
          .text-justify.indent (3) 智能指引：編輯的過程中會顯示參考線。
          .imgBox
            img(src="../assets/img/serviceContent/2-2-3.jpg").img-fluid.mt-3
          .text-justify.indent (4) 頁面版式：選擇版型拖拉到編輯區使用
          .imgBox
            img(src="../assets/img/serviceContent/2-2-4.jpg").img-fluid.mt-3
          .text-justify.indent (5) 背景：選擇背景拖拉到編輯區使用
          .imgBox
            img(src="../assets/img/serviceContent/2-2-5.jpg").img-fluid.mt-3
          .text-justify.indent (6) 素材庫：選擇圖示拖拉到編輯區使用
          .imgBox
            img(src="../assets/img/serviceContent/2-2-6.jpg").img-fluid.mt-3
          .text-justify.indent (7) 蒙版：選擇遮色片效果拖拉到圖片上使用
          .imgBox
            img(src="../assets/img/serviceContent/2-2-7.jpg").img-fluid.mt-3
        hr
        .d-flex.flex-column
          input(type="checkbox" id="teachEdittwoThree").d-none
          .d-flex.labelContent
            //- label(for="teachEdittwoThree").mb-0.plus.mr-3 +
            //- label(for="teachEdittwoThree").mb-0.minus.mr-3 -
            label(for="teachEdittwoThree").destitle.mb-0 2-3. 開始編輯：上方工具列「圖片選項」功能說明
          .imgBox
            img(src="../assets/img/serviceContent/2-3-0.jpg").img-fluid.mt-3
          .text-justify.indent (1) 效果
          .imgBox
            img(src="../assets/img/serviceContent/2-3-1.jpg").img-fluid.mt-3
          .text-justify.indent (2) 增強
          .imgBox
            img(src="../assets/img/serviceContent/2-3-2.jpg").img-fluid.mt-3
          .text-justify.indent (3) 裁剪 / 整理
          .imgBox
            img(src="../assets/img/serviceContent/2-3-3.jpg").img-fluid.mt-3
          .text-justify.indent (4) 邊界
          .imgBox
            img(src="../assets/img/serviceContent/2-3-4.jpg").img-fluid.mt-3
          .text-justify.indent (5) 陰影
          .imgBox
            img(src="../assets/img/serviceContent/2-3-5.jpg").img-fluid.mt-3
          .text-justify.indent (6) 透明度
          .imgBox
            img(src="../assets/img/serviceContent/2-3-6.jpg").img-fluid.mt-3
          .text-justify.indent (7) 方向
          .imgBox
            img(src="../assets/img/serviceContent/2-3-7.jpg").img-fluid.mt-3
          .text-justify.indent (8) 形狀
          .imgBox
            img(src="../assets/img/serviceContent/2-3-8.jpg").img-fluid.mt-3
          .text-justify.indent (9) 尺寸&位置
          .imgBox
            img(src="../assets/img/serviceContent/2-3-9.jpg").img-fluid.mt-3
          .text-justify.indent (10) 對齊
          .imgBox
            img(src="../assets/img/serviceContent/2-3-10.jpg").img-fluid.mt-3
          .text-justify.indent (11) 佈置
          .imgBox
            img(src="../assets/img/serviceContent/2-3-11.jpg").img-fluid.mt-3
          .text-justify.indent (12) 適合
          .imgBox
            img(src="../assets/img/serviceContent/2-3-12.jpg").img-fluid.mt-3
        hr
        .d-flex.flex-column
          input(type="checkbox" id="teachEdittwoFour").d-none
          .d-flex.labelContent
            //- label(for="teachEdittwoFour").mb-0.plus.mr-3 +
            //- label(for="teachEdittwoFour").mb-0.minus.mr-3 -
            label(for="teachEdittwoFour").destitle.mb-0 2-4. 開始編輯：上方工具列「文字選項」功能說明
          .imgBox
            img(src="../assets/img/serviceContent/2-4-0.jpg").img-fluid.mt-3
          .text-justify.indent (1) 文本編輯
          .imgBox
            img(src="../assets/img/serviceContent/2-4-1.jpg").img-fluid.mt-3
          .text-justify.indent (2) 文本格式
          .imgBox
            img(src="../assets/img/serviceContent/2-4-2.jpg").img-fluid.mt-3
          .text-justify.indent (3) 文本對齊
          .imgBox
            img(src="../assets/img/serviceContent/2-4-3.jpg").img-fluid.mt-3
          .text-justify.indent (4) 邊界
          .imgBox
            img(src="../assets/img/serviceContent/2-4-4.jpg").img-fluid.mt-3
          .text-justify.indent (5) 背景
          .imgBox
            img(src="../assets/img/serviceContent/2-4-5.jpg").img-fluid.mt-3
          .text-justify.indent (6) 輪流
          .imgBox
            img(src="../assets/img/serviceContent/2-4-6.jpg").img-fluid.mt-3
          .text-justify.indent (7) 文本方向
          .imgBox
            img(src="../assets/img/serviceContent/2-4-7.jpg").img-fluid.mt-3
        hr
        .d-flex.flex-column
          input(type="checkbox" id="teachEdittwoFive").d-none
          .d-flex.labelContent
            //- label(for="teachEdittwoFive").mb-0.plus.mr-3 +
            //- label(for="teachEdittwoFive").mb-0.minus.mr-3 -
            label(for="teachEdittwoFive").destitle.mb-0 2-5. 開始編輯：右方工具列「編輯器」功能說明
          .text-justify.indent (1)  剪下         (2)  複製         (3)  貼上         (4)  刪除
          .imgBox
            img(src="../assets/img/serviceContent/2-5.jpg").img-fluid.mt-3
        hr
        .d-flex.flex-column
          input(type="checkbox" id="teachEdittwoSix").d-none
          .d-flex.labelContent
            //- label(for="teachEdittwoSix").mb-0.plus.mr-3 +
            //- label(for="teachEdittwoSix").mb-0.minus.mr-3 -
            label(for="teachEdittwoSix").destitle.mb-0 2-6. 開始編輯：下方工具列「頁次管理」功能說明
          ol.pl-0.ml-3.indent
            li 總頁數：下拉可以更改可訂購頁數。(可訂購頁數分別為36、48、60、72、84頁)
            li 插入頁：插入頁數一次為 2 頁，編輯完成總頁數請依照36、48、60、72、84頁為主。
            li 刪除頁：刪除頁數一次為 2 頁，編輯完成總頁數請依照36、48、60、72、84頁為主。
            li 頁次：可以拖拉更換頁面順序。
          .imgBox
            img(src="../assets/img/serviceContent/2-6.jpg").img-fluid.mt-3
        hr
        .d-flex.flex-column
          input(type="checkbox" id="teachEditthreeThree").d-none
          .d-flex.labelContent
            //- label(for="teachEditthreeThree").mb-0.plus.mr-3 +
            //- label(for="teachEditthreeThree").mb-0.minus.mr-3 -
            label(for="teachEditthreeThree").destitle.mb-0 3. 編輯完成進行訂購
          .text-justify.indent (1) 點選右上角「添加到購物車」即可進行結帳
          .imgBox
            img(src="../assets/img/serviceContent/3.jpg").img-fluid.mt-3
        hr
        .d-flex.flex-column
          input(type="checkbox" id="teachEditfourFour").d-none
          .d-flex.labelContent
            //- label(for="teachEditfourFour").mb-0.plus.mr-3 +
            //- label(for="teachEditfourFour").mb-0.minus.mr-3 -
            label(for="teachEditfourFour").destitle.mb-0 4. 上方工具列「作品管理」功能說明
          .imgBox
            img(src="../assets/img/serviceContent/4-0.jpg").img-fluid.mt-3
          .text-justify.indent (1) 分享：您可以複製連結到您社群網站分享作品
          .imgBox
            img(src="../assets/img/serviceContent/4-1.jpg").img-fluid.mt-3
          .text-justify.indent (2) 簡單編輯：可切換到簡單模式編輯
          .text-justify.indent (3) 保存：輸入作品名稱及可儲存作品
          .imgBox
            img(src="../assets/img/serviceContent/4-3.jpg").img-fluid.mt-3
          .text-justify.indent (4) 預覽
          .imgBox
            img(src="../assets/img/serviceContent/4-4.jpg").img-fluid.mt-3
          .text-justify.indent (5) 各國語言切換
          .imgBox(style="width:100%")
            img(src="../assets/img/serviceContent/4-5.jpg").img-fluid.mt-3
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @media(max-width:641px){
    .desktopContent{
      display: none;
    }
  }
  .title{
    font-size: 24px;
    font-weight: bold;
    font-family: "Noto Serif TC",serif;
  }
  @media(min-width:641px){
    .mobileContent{
      display: none;
    }
    .destitle{
      line-height: 18px;
      display: block;
      cursor: pointer;
      &:hover{
        border-bottom: 1px solid black;
      }
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
    // margin-left: 1.6rem;
    // text-indent: -1.6rem;
    margin-top: 16px;
  }
  input:checked ~ .indent{
    display: initial;
    margin-top: 24px;
  }
  input ~ .imgBox{
    display: none;
  }
  input:checked ~ .imgBox{
    display: flex;
    max-width: 980px;
  }
  @media(max-width: 641px){
    input:checked ~ .imgBox{
      display: initial;
      max-width: 100%;
    }
  }
  input ~ .imgBox > img{
    display: none;
  }
  input:checked ~ .imgBox > img{
    display: initial;
    width:100%;
  }
</style>
