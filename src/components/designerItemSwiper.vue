<template lang="pug">
  .container.my-4
      swiper.swiper(:options='swiperOption')
        swiper-slide(v-for="itm in recommendedDesigner" :key="itm.Id").d-flex.justify-content-center
          router-link(:to="'/designerItem/'+ itm.Id").card.rounded-0.text-decoration-none
            .imgBox
                img.card-img-top.rounded-0(:src='itm.imgcover')
            .card-body
              h5.card-title.text-secondary.text-center {{itm.productName}}
              h6.card-title.text-secondary.text-center.mb-0 {{itm.templatename}}
        //- .swiper-pagination(slot='pagination')
        .swiper-button-prev(slot='button-prev')
        .swiper-button-next(slot='button-next')

</template>

<script>
import {mapState} from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default{
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    productItem: state => state.designerItemModules.productItem,
    ...mapState({
      recommendedDesigner: state => state.designerItemModules.recommendedDesigner
    })
  },
  async created () {
    // const vm = this
    // let {designerItemId} = vm.$route.params
    // await this.$store.dispatch('getDesignerItem', {designerItemId})
    // console.log(vm.recommendedDesigner)
  }
}
</script>

<style lang="scss" scoped>
.card{
  max-height: 424px;
  max-width: 360px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover{
    .imgBox,.card-body{
      opacity: .5;
    }
  }
}
.card-body{
  height: 64px;
  box-sizing: border-box;
  h5{
    margin-bottom: 0;
  }
}
@media(max-width: 640px){
  .card-body{
    // height: 40px;
    padding:10px 0;
    // font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h5{
      display: flex;
      align-items:center;
      justify-content: center;
      // height: 100%;
      font-size: .8em;
    }
    h6{
      font-size: .4em;
    }
  }
}
.imgBox{
  max-height: 258px;
  max-width: 360px;
  overflow: hidden;
  img{
    max-width: 258px;
    // max-height: 360px;
    transform:scale(1,1);
    // transition: all .5s ease-out;
    // &:hover{
    //   opacity: .5;
    // }
  }
}
</style>
