<template>
  <div class="swiperComponent" :class="{'mt-3' : viewportWidth <= 640}">
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop"  >
    <!-- slides -->
      <swiper-slide class="bigImg" v-for="item in productItem" :key="item.Id"><img :src="item.imgcover" alt=""></swiper-slide>
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      <!-- swiper2 Thumbs -->
    </swiper>
    <!-- <swiper :options="swiperOptionThumbs" class="gallery-thumbs mt-3" ref="swiperThumbs" >
      <swiper-slide class="slide-1 smallImg" v-for="item in productPattern" :key="item.Id" ><img :src="item.imgcover" alt=""></swiper-slide>
    </swiper> -->
    <!-- <swiper :options="swiperOptionThumbs" class="gallery-thumbs mt-3" ref="swiperThumbs" v-if="viewportWidth < 640">
      <swiper-slide class="slide-1 smallImg" v-for="item in productPattern" :key="item.Id" ><img :src="item.imgcover" alt=""></swiper-slide>
    </swiper> -->
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {mapState} from 'vuex'
export default {
  props: ['viewportWidth'],
  name: 'carrousel',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        slidesPerView: 1,
        loopedSlides: 1, // looped slides should be the same
        effect: 'fade',
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
        updateOnWindowResize: true
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        touchRatio: 0.2,
        slidesPerView: 'auto',
        loopedSlides: 1, // looped slides should be the same
        slideToClickedSlide: true,
        centeredSlides: true,
        loop: true
      }
      // productPattern: []
    }
  },
  // 處理v-for swiper 跟資料不同步問題
  async created () {
    // let vm = this
    // let {designerItemId} = vm.$route.params
    // let API_PATH = process.env.API
    // await this.$http.get(`${API_PATH}design/getdetail/${designerItemId}`).then(response => {
    //   let {productPattern, productItem} = response.data.data
    //   if (productPattern.length === 0) {
    //     this.swiperOptionTop.loopedSlides = 1
    //     this.swiperOptionThumbs.loopedSlides = 1
    //     vm.productPattern = productItem
    //   } else {
    //     this.productPattern = productPattern
    //     this.swiperOptionTop.loopedSlides = productPattern.length
    //     this.swiperOptionThumbs.loopedSlides = productPattern.length
    //   }
    // })
    console.log(this.productPattern)
  },
  mounted () {
    this.$nextTick(() => {
      // const swiperTop = this.$refs.swiperTop.swiper
      // const swiperThumbs = this.$refs.swiperThumbs.swiper
      // swiperTop.controller.control = swiperThumbs
      // swiperThumbs.controller.control = swiperTop
    })
  },
  computed: {
    ...mapState({
      productItem: state => state.designerItemModules.productItem
    })
  }
}
</script>

<style lang="scss" scoped>
  .swiper-container {
    background-color: rgba(92,135,166,.2);
  }
  .swiper-container{
    height: auto;
    max-width: 600px;
    &.gallery-thumbs{
      max-width: 600px;
    }
  }
  .swiper-slide{
    max-width: 600px;
    height: auto;
    img{
      width:100%;
      height: auto;
    }
  }
  .smallImg{
    max-width: 73px;
    height: auto;
  }
  @media(max-width: 640px){
    .gallery-thumbs{
      height: 0;
    }
  }
  .gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
    // 輪到的時候標明顯一點
    &.swiper-slide-active{
      opacity: 1;
    }
  }
</style>
