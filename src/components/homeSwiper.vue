<template>
  <div class="swiperComponent">
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop" v-if="viewportWidth > 640">
    <!-- slides -->
      <swiper-slide class="bigImg" ><img src="../assets/img/home/banner.jpg" alt="" class="img-fluid"></swiper-slide>
      <swiper-slide class="bigImg" ><img src="../assets/img/home/banner02.jpg" alt="" class="img-fluid"></swiper-slide>
      <swiper-slide class="bigImg" ><img src="../assets/img/home/banner03.jpg" alt="" class="img-fluid"></swiper-slide>
      <swiper-slide class="bigImg" ><img src="../assets/img/home/banner04.jpg" alt="" class="img-fluid"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop" v-if="viewportWidth < 640">
    <!-- slides -->
      <swiper-slide class="bigImg" ><img src="../assets/img/home/banner_mobile01.jpg" alt="" class="img-fluid"></swiper-slide>
      <swiper-slide class="bigImg" ><img src="../assets/img/home/banner_mobile02.jpg" alt="" class="img-fluid"></swiper-slide>
      <swiper-slide class="bigImg" ><img src="../assets/img/home/banner_mobile03.jpg" alt="" class="img-fluid"></swiper-slide>
      <swiper-slide class="bigImg" ><img src="../assets/img/home/banner_mobile04.jpg" alt="" class="img-fluid"></swiper-slide>
      <swiper-slide class="bigImg" ><img src="../assets/img/home/banner_mobile05.jpg" alt="" class="img-fluid"></swiper-slide>
      <swiper-slide class="bigImg" ><img src="../assets/img/home/banner_mobile06.jpg" alt="" class="img-fluid"></swiper-slide>
      <swiper-slide class="bigImg" ><img src="../assets/img/home/banner_mobile07.jpg" alt="" class="img-fluid"></swiper-slide>
      <swiper-slide class="bigImg" ><img src="../assets/img/home/banner_mobile08.jpg" alt="" class="img-fluid"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
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
        loopedSlides: 1, // looped slides should be the same
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
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
