<template lang="pug">
  .workslayout
    .desktopContent
      .title 作品編排須知
      hr
      .d-flex.flex-column
        input(type="checkbox" id="first").d-none
        .d-flex.labelContent
          label(for="first").mb-0.plus.mr-3 +
          label(for="first").mb-0.minus.mr-3 -
          label(for="first").destitle.mb-0 Q1：編輯作品時需要注意什麼事情？
        ol.indent
          li 畫面中的灰色外框為該商品製作時可能會裁切或裝訂的出血(裁切)範圍，文字不可超出或接近黑色外框線，以免被裁切掉，請將重要圖文避開此區。
          li 相片書產品內頁編排勿靠近中線頁面內側(此為裝訂處)以免被裁切或不易閱讀。
          li 編輯時如需滿版或靠齊邊緣，照片必須超出黑色外框線並填滿灰色區域，成品才不會露出白邊。
        .imgBox.justify-content-center()
          img(src="../assets/img/serviceContent/作品編排須知Q01.jpg" style="max-width:80%;").img-fluid.mt-3
      hr
      .d-flex.flex-column
        input(type="checkbox" id="highlow").d-none
        .d-flex.labelContent
          label(for="highlow").mb-0.plus.mr-3 +
          label(for="highlow").mb-0.minus.mr-3 -
          label(for="highlow").destitle.mb-0 Q2：「高級編輯」和「簡單編輯」的差異？
        .text-justify.indent.pl-3 A：說明如下：
        .text-justify.indent.pl-0.ml-5 高級編輯：適用「電腦版」，編輯功能較豐富。
        .text-justify.indent.pl-0.ml-5 簡單編輯：適用「電腦版」和「手機版」。因手機裝置的螢幕寬度限制，若使用手機編排作品僅限使用簡單編輯。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="two").d-none
        .d-flex.labelContent
          label(for="two").mb-0.plus.mr-3 +
          label(for="two").mb-0.minus.mr-3 -
          label(for="two").destitle.mb-0 Q3：如何知道圖片解析度夠不夠？
        .text-justify.indent.pl-3 A：請您將上傳的圖片拉進編輯區或圖片框內，若圖片框出現驚嘆號圖示就表示圖片解析度不足，會影響印刷成品，建議您更換圖片或縮小圖片至驚嘆號圖示消失，亦表示解析度足夠。
        .imgBox.justify-content-center
          img(src="../assets/img/serviceContent/作品編排須知Q02.jpg" style="max-width:80%;").img-fluid.mt-3
      hr
      .d-flex.flex-column
        input(type="checkbox" id="three").d-none
        .d-flex.labelContent
          label(for="three").mb-0.plus.mr-3 +
          label(for="three").mb-0.minus.mr-3 -
          label(for="three").destitle Q4：圖片可以使用哪些檔案格式和色彩模式？
        .text-justify.indent.pl-3 A：可以上傳JPG、JPEG、PNG、TIFF的影像檔案格式；RGB或CMYK的色彩模式皆可上傳。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="four").d-none
        .d-flex.labelContent
          label(for="four").mb-0.plus.mr-3 +
          label(for="four").mb-0.minus.mr-3 -
          label(for="four").destitle Q5：同一個作品可以不同的行動裝置上編輯嗎？
        .text-justify.indent.pl-3 A：可以。只要有確定儲存作品就可以在不同的行動裝置(如手機、平板、電腦)登入繼續編輯。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="five").d-none
        .d-flex.labelContent
          label(for="five").mb-0.plus.mr-3 +
          label(for="five").mb-0.minus.mr-3 -
          label(for="five").destitle Q6：未編輯完成的作品，可以之後繼續編輯嗎？
        .text-justify.indent.pl-3 A：未編輯完成的作品，請點選「保存」，若您尚未加入會員，請依步驟註冊，註冊完成作品將會儲存在「我的作品」內。若您已成為本站會員，請登入會員帳號，即可將作品儲存。若要繼續編輯作品時請登入後，可在「我的作品」內，點選作品下方的「編輯」按鈕。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="sevenZero").d-none
        .d-flex.labelContent
          label(for="sevenZero").mb-0.plus.mr-3 +
          label(for="sevenZero").mb-0.minus.mr-3 -
          label(for="sevenZero").destitle Q7：「我的作品」和「購買後的作品」保存期限有多長?
        .text-justify.indent.pl-3 A：說明如下：
        .text-justify.indent.pl-3 因系統空間有限，「我的作品」的編輯期限是由最新的編輯日起算，如果您超過60天未編輯作品，我們會假設您已經不需要這個作品，系統就會自動刪除作品。請大家隨時回來「我的作品」編輯您未完成的作品喔！
        .text-justify.indent.pl-3 「購買後的作品」的保存期限是由訂購完成後起算，如果您超過365天未再「重新訂購」或「複製」作品，系統就會自動刪除作品，造成您的不便，敬請見諒。
        .text-justify.indent.pl-3 ※ 當系統空間不足，逾期作品 ( 包含上傳照片 ) 將優先被刪除。當您每次登入繼續編輯，系統會重新計算編輯期限，所以只要您有持續的在編輯您的作品，就不用擔心作品會被刪除囉！

      hr
      .d-flex.flex-column
        input(type="checkbox" id="six").d-none
        .d-flex.labelContent
          label(for="six").mb-0.plus.mr-3 +
          label(for="six").mb-0.minus.mr-3 -
          label(for="six").destitle Q8：編輯時的操作反應很慢？
        .text-justify.indent.pl-3 A：因本站使用的是即時線上編輯器，主要的原因與您當下的網路速度及網路環境有關。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="seven").d-none
        .d-flex.labelContent
          label(for="seven").mb-0.plus.mr-3 +
          label(for="seven").mb-0.minus.mr-3 -
          label(for="seven").destitle Q9：使用手機編輯作品時，為何不能調整相片框位置及大小或增加文字及插圖？
        .text-justify.indent.pl-3 A：因手機版瀏覽裝置限制僅能支援「簡易編輯」，請您使用電腦或平板裝置編輯作品，即可使用「進階編輯」操作上列功能。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="eight").d-none
        .d-flex.labelContent
          label(for="eight").mb-0.plus.mr-3 +
          label(for="eight").mb-0.minus.mr-3 -
          label(for="eight").destitle Q10：我可以分享完成訂購的作品嗎？
        .text-justify.indent.pl-3 A：請您登入後，點選「我的帳戶」>「您的訂單」，選擇欲分享的作品並點選「分享」即可透過各種平台分享給您的朋友。
      hr
      .d-flex.flex-column
        input(type="checkbox" id="nine").d-none
        .d-flex.labelContent
          label(for="nine").mb-0.plus.mr-3 +
          label(for="nine").mb-0.minus.mr-3 -
          label(for="nine").destitle Q11：上傳圖片過程中可否停止上傳或刪除圖片?
        .text-justify.indent.pl-3 A：圖片上傳中無法停止上傳，請您耐心等待圖片上傳完成後，再刪除即可。
        .text-justify.indent.pl-3 簡單編輯：在圖片區選擇不要的照片，再點選該照片左上角的箭頭，即出現「清除」選項。
        .imgBox.justify-content-center.ml-md-3
          img(src="../assets/img/serviceContent/簡單編輯.jpg").img-fluid.my-3
        .text-justify.indent.pl-3.my-4 高級編輯：可點開圖片管理器後選擇不要的照片，再點選右上方的垃圾桶刪除即可。
        .imgBox.justify-content-center.ml-md-3
          img(src="../assets/img/serviceContent/高級編輯01.jpg").img-fluid.mt-3
        .imgBox.justify-content-center.ml-md-3
          img(src="../assets/img/serviceContent/高級編輯02.jpg").img-fluid.mt-3
      hr
      .d-flex.flex-column
        input(type="checkbox" id="ten").d-none
        .d-flex.labelContent
          label(for="ten").mb-0.plus.mr-3 +
          label(for="ten").mb-0.minus.mr-3 -
          label(for="ten").destitle Q12：「色差」說明？
        .text-justify.indent.pl-3 A：圖片上傳中無法停止上傳，請您耐心等待圖片上傳完成後，再刪除即可。
        .text-justify.indent.pl-3 關於色彩差異部分，因每台螢幕設定的色彩明亮及品牌皆不同，不同螢幕看同一張照片或圖片，會呈現不同顏色，電腦顯示的色彩模式為RGB，印刷品的色彩模式為CMYK，顯示的色域有差異會有一定的色差，間接造成印刷成品與螢幕上有所差異。
        .text-justify.indent.pl-3 印刷品皆屬影像複製，影響色彩呈現的原因有油墨、紙張、色彩曲線、時間、機台等等，所以同一圖檔在不同次印刷時，色彩都會有些微差距，有色差皆屬正常。就如同沖印相片即使到同一個相館，不同天洗出來，色彩亦有差異一樣，即使大量同時印刷，前後時段印出的產品，也會略有差異，這是色彩複製一定會有的問題，詳情請參閱國際膠印印刷標準ISO12647-2。
      hr
    .mobileContent
      .title.mb-3 作品編排須知
      .px-0
        .d-flex.flex-column
          input(type="checkbox" id="workslayoutfirst").d-none
          .d-flex.labelContent
            //- label(for="workslayoutfirst").mb-0.plus.mr-3 +
            //- label(for="workslayoutfirst").mb-0.minus.mr-3 -
            label(for="workslayoutfirst").destitle.mb-0 Q1：編輯作品時需要注意什麼事情？
          ol.pl-0.ml-3.indent
            li 畫面中的灰色外框為該商品製作時可能會裁切或裝訂的出血(裁切)範圍，文字不可超出或接近黑色外框線，以免被裁切掉，請將重要圖文避開此區。
            li 相片書產品內頁編排勿靠近中線頁面內側(此為裝訂處)以免被裁切或不易閱讀。
            li 編輯時如需滿版或靠齊邊緣，照片必須超出黑色外框線並填滿灰色區域，成品才不會露出白邊。
          .imgBox.justify-content-center
            img(src="../assets/img/serviceContent/作品編排須知Q01.jpg").img-fluid.mt-3
        hr
        .d-flex.flex-column
          input(type="checkbox" id="highlowtwo").d-none
          .d-flex.labelContent
            //- label(for="workslayoutfirst").mb-0.plus.mr-3 +
            //- label(for="workslayoutfirst").mb-0.minus.mr-3 -
            label(for="highlowtwo").destitle.mb-0 Q2：「高級編輯」和「簡單編輯」的差異？
          .text-justify.indent.pl-0.ml-0 A：說明如下：
          .text-justify.indent.pl-0.ml-0 高級編輯：適用「電腦版」，編輯功能較豐富。
          .text-justify.indent.pl-0.ml-0 簡單編輯：適用「電腦版」和「手機版」。因手機裝置的螢幕寬度限制，若使用手機編排作品僅限使用簡單編輯。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="workslayouttwo").d-none
          .d-flex.labelContent
            //- label(for="workslayouttwo").mb-0.plus.mr-3 +
            //- label(for="workslayouttwo").mb-0.minus.mr-3 -
            label(for="workslayouttwo").destitle.mb-0 Q3：如何知道圖片解析度夠不夠？
          .text-justify.indent.pl-0.ml-0 A：請您將上傳的圖片拉進編輯區或圖片框內，若圖片框出現驚嘆號圖示就表示圖片解析度不足，會影響印刷成品，建議您更換圖片或縮小圖片至驚嘆號圖示消失，亦表示解析度足夠。
          .imgBox.justify-content-center
            img(src="../assets/img/serviceContent/作品編排須知Q02.jpg").img-fluid.mt-3
        hr
        .d-flex.flex-column
          input(type="checkbox" id="workslayoutthree").d-none
          .d-flex.labelContent
            //- label(for="workslayoutthree").mb-0.plus.mr-3 +
            //- label(for="workslayoutthree").mb-0.minus.mr-3 -
            label(for="workslayoutthree").destitle Q4圖片可以使用哪些檔案格式和色彩模式？
          .text-justify.indent.pl-0.ml-0 A：可以上傳JPG、JPEG、PNG、TIFF的影像檔案格式；RGB或CMYK的色彩模式皆可上傳。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="workslayoutfour").d-none
          .d-flex.labelContent
            //- label(for="workslayoutfour").mb-0.plus.mr-3 +
            //- label(for="workslayoutfour").mb-0.minus.mr-3 -
            label(for="workslayoutfour").destitle Q5：同一個作品可以不同的行動裝置上編輯嗎？
          .text-justify.indent.pl-0.ml-0 A：可以。只要有確定儲存作品就可以在不同的行動裝置(如手機、平板、電腦)登入繼續編輯。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="workslayoutfive").d-none
          .d-flex.labelContent
            //- label(for="workslayoutfive").mb-0.plus.mr-3 +
            //- label(for="workslayoutfive").mb-0.minus.mr-3 -
            label(for="workslayoutfive").destitle Q6：未編輯完成的作品，可以之後繼續編輯嗎？
          .text-justify.indent.pl-0.ml-0 A：未編輯完成的作品，請點選「保存」，若您尚未加入會員，請依步驟註冊，註冊完成作品將會儲存在「我的作品」內。若您已成為本站會員，請登入會員帳號，即可將作品儲存。若要繼續編輯作品時請登入後，可在「我的作品」內，點選作品下方的「編輯」按鈕。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="workslayoutSevenZero").d-none
          .d-flex.labelContent
            //- label(for="workslayoutsix").mb-0.plus.mr-3 +
            //- label(for="workslayoutsix").mb-0.minus.mr-3 -
            label(for="workslayoutSevenZero").destitle Q7：「我的作品」和「購買後的作品」保存期限有多長?
          .text-justify.indent.pl-0.ml-0 A：因系統空間有限，「我的作品」的編輯期限是由最新的編輯日起算，如果您超過60天未編輯作品，我們會假設您已經不需要這個作品，系統就會自動刪除作品。請大家隨時回來「我的作品」編輯您未完成的作品喔！
          .text-justify.indent.pl-0.ml-0 「購買後的作品」的保存期限是由訂購完成後起算，如果您超過365天未再「重新訂購」或「複製」作品，系統就會自動刪除作品，造成您的不便，敬請見諒。
          .text-justify.indent.pl-0.ml-0 ※ 當系統空間不足，逾期作品 ( 包含上傳照片 ) 將優先被刪除。當您每次登入繼續編輯，系統會重新計算編輯期限，所以只要您有持續的在編輯您的作品，就不用擔心作品會被刪除囉！
        hr
        .d-flex.flex-column
          input(type="checkbox" id="workslayoutsix").d-none
          .d-flex.labelContent
            //- label(for="workslayoutsix").mb-0.plus.mr-3 +
            //- label(for="workslayoutsix").mb-0.minus.mr-3 -
            label(for="workslayoutsix").destitle Q8：編輯時的操作反應很慢？
          .text-justify.indent.pl-0.ml-0 A：因本站使用的是即時線上編輯器，主要的原因與您當下的網路速度及網路環境有關。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="workslayoutseven").d-none
          .d-flex.labelContent
            //- label(for="workslayoutseven").mb-0.plus.mr-3 +
            //- label(for="workslayoutseven").mb-0.minus.mr-3 -
            label(for="workslayoutseven").destitle Q9：使用手機編輯作品時，為何不能調整相片框位置及大小或增加文字及插圖？
          .text-justify.indent.pl-0.ml-0 A：因手機版瀏覽裝置限制僅能支援「簡易編輯」，請您使用電腦或平板裝置編輯作品，即可使用「進階編輯」操作上列功能。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="workslayouteight").d-none
          .d-flex.labelContent
            //- label(for="workslayouteight").mb-0.plus.mr-3 +
            //- label(for="workslayouteight").mb-0.minus.mr-3 -
            label(for="workslayouteight").destitle Q10：我可以分享完成訂購的作品嗎？
          .text-justify.indent.pl-0.ml-0 A：請您登入後，點選「我的帳戶」>「您的訂單」，選擇欲分享的作品並點選「分享」即可透過各種平台分享給您的朋友。
        hr
        .d-flex.flex-column
          input(type="checkbox" id="workslayoutnine").d-none
          .d-flex.labelContent
            //- label(for="workslayoutnine").mb-0.plus.mr-3 +
            //- label(for="workslayoutnine").mb-0.minus.mr-3 -
            label(for="workslayoutnine").destitle Q11：上傳圖片過程中可否停止上傳或刪除圖片?
          .text-justify.indent.pl-0.ml-0 A：圖片上傳中無法停止上傳，請您耐心等待圖片上傳完成後，再刪除即可。
          .text-justify.indent.pl-0.ml-0  簡單編輯：在圖片區選擇不要的照片，再點選該照片左上角的箭頭，即出現「清除」選項。
          .imgBox.justify-content-center
            img(src="../assets/img/serviceContent/簡單編輯.jpg").img-fluid.mt-4
          .text-justify.indent.pl-0.ml-0 高級編輯：可點開圖片管理器後選擇不要的照片，再點選右上方的垃圾桶刪除即可。
          .imgBox.justify-content-center
            img(src="../assets/img/serviceContent/高級編輯01.jpg").img-fluid.mt-4
          .imgBox.justify-content-center
            img(src="../assets/img/serviceContent/高級編輯02.jpg").img-fluid.mt-4
        hr
        .d-flex.flex-column
          input(type="checkbox" id="workslayouten").d-none
          .d-flex.labelContent
            //- label(for="workslayouten").mb-0.plus.mr-3 +
            //- label(for="workslayouten").mb-0.minus.mr-3 -
            label(for="workslayouten").destitle Q12：「色差」說明？
          .text-justify.indent.pl-0.ml-0 A：圖片上傳中無法停止上傳，請您耐心等待圖片上傳完成後，再刪除即可。
          .text-justify.indent.pl-0.ml-0 關於色彩差異部分，因每台螢幕設定的色彩明亮及品牌皆不同，不同螢幕看同一張照片或圖片，會呈現不同顏色，電腦顯示的色彩模式為RGB，印刷品的色彩模式為CMYK，顯示的色域有差異會有一定的色差，間接造成印刷成品與螢幕上有所差異。
          .text-justify.indent.pl-0.ml-0 印刷品皆屬影像複製，影響色彩呈現的原因有油墨、紙張、色彩曲線、時間、機台等等，所以同一圖檔在不同次印刷時，色彩都會有些微差距，有色差皆屬正常。就如同沖印相片即使到同一個相館，不同天洗出來，色彩亦有差異一樣，即使大量同時印刷，前後時段印出的產品，也會略有差異，這是色彩複製一定會有的問題，詳情請參閱國際膠印印刷標準ISO12647-2。
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
  ol,ul{
    &.indent{
      text-indent:0;
    }
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
