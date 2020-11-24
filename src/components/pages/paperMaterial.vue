<template lang="pug">
  .container
    .d-flex.justify-content-center
      p.title.my-5 全系列貼紙紙張比較
    .row.mb-4
      .col-lg-4.col-md-6
        .d-flex.flex-column
          swiper.gallery-top.w-100(:options='swiperOptionTop' ref='swiperTop')
            swiper-slide
              img.img-fluid(src="../../../static/papermaterial/material_1_1.jpg")
            //- swiper-slide
            //-   img.img-fluid(src="../../../static/papermaterial/material_1_2.jpg")
            .swiper-pagination(slot='pagination')
          div.my-3.text-center
            .subTitle 超黏貼紙(上亮膜)
          .table-responsive
            table.table
              tbody
                tr
                  td.firstCell 磅數
                  td.secondCell 80g
                tr
                  td.firstCell 黏性
                  td.secondCell 強
                tr
                  td.firstCell 顏色
                  td.secondCell 白
                tr
                  td.firstCell 材質
                  td.secondCell 銅板貼紙
                tr
                  td.firstCell 特性
                  td.secondCell 易撕
                tr
                  td.firstCell 防水
                  td.secondCell 表面防水
                tr
                  td.firstCell 用途
                  td.secondCell 常用於醫藥品 食品、化工品與設備的標示上。
                tr
                  td.firstCell.font-weight-bold 注意
                  td.secondCell
                    ul.pl-3
                      li 不適用於冷凍商品。
                      li 貼面是圓面時亮膜較易翹起。
                      li 因表面上亮膜，不適合蓋章、書寫、打號。
      .col-lg-4.col-md-6
        .d-flex.flex-column
          swiper.gallery-top.w-100(:options='swiperOptionTop' ref='swiperTop')
            swiper-slide
              img.img-fluid(src="../../../static/papermaterial/material_2_1.jpg")
            //- swiper-slide
            //-   img.img-fluid(src="../../../static/papermaterial/material_2_2.jpg")
            .swiper-pagination(slot='pagination')
          div.my-3.text-center
            .subTitle 合成(珠光)貼紙(上亮膜)
          .table-responsive
            table.table
              tbody
                tr
                  td.firstCell 磅數
                  td.secondCell 80g
                tr
                  td.firstCell 黏性
                  td.secondCell 中
                tr
                  td.firstCell 顏色
                  td.secondCell 白
                tr
                  td.firstCell 材質
                  td.secondCell 合成(珠光)紙
                tr
                  td.firstCell 特性
                  td.secondCell 撕不破、耐溫度為+60℃～-10℃
                tr
                  td.firstCell 防水
                  td.secondCell 防水性佳(可直接浸泡於水中)
                tr
                  td.firstCell 用途
                  td.secondCell 廣泛使用於食品、化工品與設備的標示上。
                tr
                  td.firstCell.font-weight-bold 注意
                  td.secondCell
                    ul.pl-3
                      li 適用冷凍商品，需冷凍前貼上。
                      li 貼面是圓面時亮膜較易翹起。
                      li 因表面上亮膜，不適合蓋章、書寫、打號。
      .col-lg-4.col-md-6
        .d-flex.flex-column
          swiper.gallery-top.w-100(:options='swiperOptionTop' ref='swiperTop')
            swiper-slide
              img.img-fluid(src="../../../static/papermaterial/material_3_1.jpg")
            //- swiper-slide
            //-   img.img-fluid(src="../../../static/papermaterial/material_3_2.jpg")
            .swiper-pagination(slot='pagination')
          div.my-3.text-center
            .subTitle 透明貼紙(上亮膜)
          .table-responsive
            table.table
              tbody
                tr
                  td.firstCell 磅數
                  td.secondCell 80g
                tr
                  td.firstCell 黏性
                  td.secondCell 中
                tr
                  td.firstCell 顏色
                  td.secondCell.font-weight-bold 透明無法印製白色
                tr
                  td.firstCell 材質
                  td.secondCell 塑膠
                tr
                  td.firstCell 特性
                  td.secondCell 透明撕不破
                tr
                  td.firstCell 防水
                  td.secondCell 可防水
                tr
                  td.firstCell 用途
                  td.secondCell 常用於需要維修保養的汽車或設備，用於包裝也很適合。
                tr
                  td.firstCell.font-weight-bold 注意
                  td.secondCell
                    ul.pl-3
                      li 適用冷凍商品，需冷凍前貼上。
                      li 貼面是圓面時亮膜較易翹起。
                      li 因表面上亮膜，不適合蓋章、書寫、打號。
    .row.mb-4
      .col-lg-4.col-md-6
        .d-flex.flex-column
          swiper.gallery-top.w-100(:options='swiperOptionTop' ref='swiperTop')
            swiper-slide
              img.img-fluid(src="../../../static/papermaterial/material_4_1.jpg")
            //- swiper-slide
            //-   img.img-fluid(src="../../../static/papermaterial/material_4_2.jpg")
            //- swiper-slide
            //-   img.img-fluid(src="../../../static/papermaterial/material_4_3.jpg")
            .swiper-pagination(slot='pagination')
          div.my-3.text-center
            .subTitle 模造貼紙(上亮膜/不上亮膜)
          .table-responsive
            table.table
              tbody
                tr
                  td.firstCell 磅數
                  td.secondCell 80g
                tr
                  td.firstCell 黏性
                  td.secondCell 中
                tr
                  td.firstCell 顏色
                  td.secondCell 白
                tr
                  td.firstCell 材質
                  td.secondCell 模造紙
                tr
                  td.firstCell 特性
                  td.secondCell 適合書寫蓋章
                tr
                  td.firstCell 防水
                  td.secondCell 不防水
                tr
                  td.firstCell 用途
                  td.secondCell 表面沒有做光滑處理，可以快速吸收油墨，且適合用於複印和書寫，常用做品管和各種標示使用。
                tr
                  td.firstCell.font-weight-bold 注意
                  td.secondCell
                    ul.pl-3
                      li 因配合蓋章或書寫不上亮膜，易沾黏髒點，且不適用於冷凍商品。
                      li 因表面上亮膜，不適合蓋章、書寫、打號。
      .col-lg-4.col-md-6
        .d-flex.flex-column
          swiper.gallery-top.w-100(:options='swiperOptionTop' ref='swiperTop')
            swiper-slide
              img.img-fluid(src="../../../static/papermaterial/material_5_1.jpg")
            //- swiper-slide
            //-   img.img-fluid(src="../../../static/papermaterial/material_5_2.jpg")
            .swiper-pagination(slot='pagination')
          div.my-3.text-center
            .subTitle 銅版R膠貼紙(上亮膜)
          .table-responsive
            table.table
              tbody
                tr
                  td.firstCell 磅數
                  td.secondCell 80g
                tr
                  td.firstCell 黏性
                  td.secondCell 弱
                tr
                  td.firstCell 顏色
                  td.secondCell 白
                tr
                  td.firstCell 材質
                  td.secondCell 銅板紙
                tr
                  td.firstCell 特性
                  td.secondCell 可重覆貼
                tr
                  td.firstCell 防水
                  td.secondCell 可重覆貼
                tr
                  td.firstCell 用途
                  td.secondCell 最常用的貼紙，屬於可撕破的紙質。最大的特色是價格便宜，常用於商標、及想被撕起的貼紙(限一次)，貼紙撕下無殘膠。
                tr
                  td.firstCell.font-weight-bold 注意
                  td.secondCell
                    ul.pl-3
                      li 不適用於冷凍商品。
                      li 貼面是圓面時亮膜較易翹起。
                      li 因表面上亮膜，不適合蓋章、書寫、打號。
      .col-lg-4.col-md-6
        .d-flex.flex-column
          img.img-fluid(src="../../../static/papermaterial/material_6_1.jpg")

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default{
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      picShow: 1,
      threePicShow: 1,
      swiperOptionTop: {
        notNextTick: true,
        loop: true,
        initialSlide: 0,
        clickable: true,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
        updateOnWindowResize: true
      }
    }
  }
}

</script>

<style lang="scss" scoped>
  .title{
    font-size: 24px;
    font-weight: bold;
  }
  .subTitle{
    font-size: 20px;
    font-weight: bold;
  }
  td{
    text-align:left;
    border-top:0;
    padding-bottom:0;
    padding-right:0;
  }
  .firstCell{
    width: 20%;
  }
  .secondCell{
    width:80%;
  }
  @media(max-width:641px){
    td{
      font-size: 14px;
    }
    .subTitle{
      font-size: 16px;
      font-weight: bold;
    }
  }
</style>
