<template lang="pug">
  .aboutYFP
    .container.px-0
      .pageTitle.text-center.mt-30.mb-5.font-weight-bold.px-2 關於我們
      .text-center
        img.img-fluid.aboutYFPImg(src="../../../static/aboutYFP.jpg")
    .container
      .pageTitle.text-center.mt-30.mb-5.font-weight-bold.px-2 我們的使命，是為了讓您的生活更有價值
      .row.justify-content-center
        .col-12.px-0
          p.aboutYFPImgDes.mt-4.text-justify.px-2 以前，想要一本家中孩子的成長相片集，往往只能交給沖印館，或是自己編輯後送廠印刷，一方面擔心沖印館的排版不是自己想要的，另一方面，想自己編輯卻不熟悉軟體，甚至需要反覆校稿，一來一往間，想要一本相片書的願望就被現實擱置了。
          p.aboutYFPImgDes.aboutYFPImgDesSecond.text-justify.px-2 現在，我們想提供最便捷的步驟、最直覺的操作、最完整的服務，讓編輯作品變成一件簡單、流暢的事，幾個步驟就能完成，您節省下的時間，值得拿去創造更多回憶。
      .pageTitle.text-center.mt-4.font-weight-bold.mb-5 我們致力於提供完美的印刷體驗
    .container-fluid.printExperienceBox
      .row.align-items-center.flex-column.mx-0
        .border.border-dark.px-3.py-2.pageTitle.mb-5.mt-4 關於永豐
        p.printExperienceFirstDes.aboutYFPImgDes.text-justify.mb-5.px-2 數十餘年的印刷經驗，透過雲端印刷網把傳統的企業印刷服務，拓展到各種情境，不管是您只是為了家中孩子印一本成長相片書，還是一次下單十份明信片的文創微型創業，在雲端印刷網，您的作品能有不同想像。
        .row.printExperienceFirstDes.mx-0.justify-content-center
          .col-md-3.col-6.mb-4.mx-md-3.px-1
            img.img-fluid(src="../../../static/001.png")
          .col-md-3.col-6.mb-4.mx-md-3.px-1
            img.img-fluid(src="../../../static/002.png")
          .col-md-3.col-6.mb-4.mx-md-3.px-1
            img.img-fluid(src="../../../static/003.png")
          .col-md-3.col-6.mb-4.mx-md-3.px-1
            img.img-fluid(src="../../../static/004.png")
    .container-fluid.px-0
      .row.mx-0
        .col-md-6.px-0.col-12
          img.img-fluid(src="../../../static/wontregret.jpg")
        .col-md-6.wontRegretBlueBg.col-12
          .d-flex.flex-column.w-100.h-100.justify-content-center.align-items-center
            p.pageTitle.text-white.wontRegretTitle 您不會後悔的選擇。
            p.aboutYFPImgDes.text-white.mb-4.wontRegretSecondTitle Your best choice.
            router-link(to="/standard/14").btn.btnInPage.py-0.pr-0.text-primary <span class="font-weight-bold">立即體驗</span> <i class="fas fa-chevron-right fa-xs"></i>
    .container-fluid.px-0
      .row.mx-0.reverse
        .col-md-6.col-12.wontRegretDarkBg
          .d-flex.flex-column.w-100.h-100.justify-content-center.align-items-center
            p.pageTitle.text-white.wontRegretTitle 我們永遠在這為您服務。
            p.aboutYFPImgDes.text-white.mb-4.wontRegretSecondTitle We are always waiting for you.
            router-link(to="/serviceContent/contactus").btn.btnInPage.py-0.pr-0.text-primary <span class="font-weight-bold">聯絡我們</span> <i class="fas fa-chevron-right fa-xs"></i>
        .col-md-6.col-12.px-0
          img.img-fluid(src="../../../static/chair.jpg")
    .container.px-0.mt-8.mb-5
      .row.justify-content-center.w-100.mx-auto.px-0
        h2.pageTitle.text-center.font-weight-bold.w-100 全新的線上編輯器
        p.text-center.w-100.aboutYFPImgDes.px-2.mb-0 從電腦到手機，讓你隨時隨地編輯都便利
        .bgSetting
          img.newEditor(src="../../assets/img/home/3c.jpg")
</template>

<script>
export default {
  created () {
    this.$store.commit('sideBarShowEvent', false)
  }
}
</script>

<style lang="scss" scoped>
$nototc: "Noto Serif TC",serif;
.pageTitle{
  font-size: 24px;
  font-family:$nototc;
  font-weight: bold;
}
.aboutYFPImg{
  max-height: 760px;
  min-width: 100%;
}
.aboutYFPImgDes{
  font-size: 20px;
  // font-family: $nototc;
  // font-weight: bold;
}
.aboutYFPImgDesSecond{
  margin-bottom: 50px;
}
.printExperienceBox{
  background: #c1bfc1;
  padding: 20px 0;
  box-sizing: border-box;
}
.printExperienceFirstDes{
  max-width: 1300px;
  .col-md-3{
    max-width:226px;
    padding: 0;
  }
  img{
    max-width: 226px;
  }
}
@media(max-width: 640px){
  .aboutYFPImgDes{
    padding: 0 16px;
  }
  .printExperienceFirstDes{
    max-width: 1300px;
    padding: 0 12px;
    img{
      max-width: 100%;
    }
  }
}
.wontRegretBlueBg{
  background: #577f99;
  box-sizing: border-box;
}
.wontRegretDarkBg{
  background: #44505e;
  // padding: 50px 0;
  box-sizing: border-box;
}
@media(max-width: 640px){
  .wontRegretBlueBg{
    padding: 50px 0;
  }
  .wontRegretDarkBg{
    padding: 50px 0;
  }
  .wontRegretTitle{
    font-size: 24px;
  }
  .wontRegretSecondTitle{
    font-size: 18px;
  }
}
// 按鈕
.btnInPage{
  border-radius: 5px;
  width: 203px;
  height: 39px;
  font-size: 21px;
  padding-left: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  .fa-chevron-right{
    margin-left: 37px;
  }
}
// reverse 排版
@media(max-width: 640px){
  .reverse{
    flex-direction: column-reverse;
  }
}
// new editor 圖片
.bgSetting{
  max-width:800px;
  height:auto;
  box-sizing: border-box;
  display: flex;
  align-items:center;
  justify-content: center;
  img.newEditor{
    width: 90%;
    height: auto;
  }
}
@media(max-width:640px){
  img.newEditor{
    max-width: 90%;
    height: auto;
  }
}
</style>
