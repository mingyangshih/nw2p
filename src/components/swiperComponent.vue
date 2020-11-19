<template>
  <div class="swiperComponent" :class="{'mt-3' : viewportWidth <= 640}">
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop"  v-if="productAlbum.length>0">
    <!-- slides -->
      <swiper-slide class="bigImg" v-for="item in productAlbum" :key="item.albumId"><img :src="$store.state.imgPath+item.productAlbum" alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs mt-3" ref="swiperThumbs" v-if="viewportWidth > 640 && productAlbum.length>0">
      <swiper-slide class="slide-1 smallImg" v-for="item in productAlbum" :key="item.albumId" ><img :src="$store.state.imgPath+item.productAlbum" alt=""></swiper-slide>
    </swiper>
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs mt-3" ref="swiperThumbs" v-if="viewportWidth < 640 && productAlbum.length>0">
      <swiper-slide class="slide-1 smallImg" v-for="item in productAlbum" :key="item.albumId" ><img :src="$store.state.imgPath+item.productAlbum" alt=""></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
        loopedSlides: null, // looped slides should be the same
        effect: 'fade',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
        updateOnWindowResize: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        touchRatio: 0.2,
        slidesPerView: 'auto',
        loopedSlides: null, // looped slides should be the same
        slideToClickedSlide: true,
        centeredSlides: true,
        loop: true
      },
      // 放左邊相片資訊
      productAlbum: []
    }
  },
  // 處理v-for swiper 跟資料不同步問題
  async created () {
    const id = this.$route.params.id
    let API_PATH = process.env.API
    await this.$http.get(`${API_PATH}product/getdetail/${id}`).then(response => {
      if (response.data.data.productAlbum.length === 0) {
        let productAlbum = {productAlbum: 'https://fakeimg.pl/599/?text=fake image'}
        this.productAlbum.push(productAlbum)
      } else {
        this.productAlbum = response.data.data.productAlbum
      }
      this.swiperOptionTop.loopedSlides = this.productAlbum.length
      this.swiperOptionThumbs.loopedSlides = this.productAlbum.length
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    })
  },
  watch: {
    async '$route' (to, from) {
      if (to.params.id !== from.params.id) {
        const id = to.params.id
        let API_PATH = process.env.API
        this.productAlbum = []
        await this.$http.get(`${API_PATH}product/getdetail/${id}`).then(response => {
          if (response.data.data.productAlbum.length === 0) {
            let productAlbum = {productAlbum: 'https://fakeimg.pl/599/?text=fake image'}
            this.productAlbum.push(productAlbum)
          } else {
            this.productAlbum = response.data.data.productAlbum
          }
          this.swiperOptionTop.loopedSlides = this.productAlbum.length
          this.swiperOptionThumbs.loopedSlides = this.productAlbum.length
          this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.swiper
            const swiperThumbs = this.$refs.swiperThumbs.swiper
            swiperTop.controller.control = swiperThumbs
            swiperThumbs.controller.control = swiperTop
          })
        })
      }
    }
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
