<template>
  <div class="swiperComponent">
    <div class="desktop">
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop" v-if="pcBanner.length>0">
    <!-- slides -->
        <swiper-slide class="bigImg" v-for="item in pcBanner" :key="item.displayseq" >
          <img :src="item.img" alt="" class="img-fluid" v-if="item.href !== null" @click="openUrl(item.href)">
          <img :src="item.img" alt="" class="img-fluid" v-else>
        </swiper-slide>
        <!-- <swiper-slide class="bigImg" ><img src="../assets/img/home/banner.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide class="bigImg" ><img src="../assets/img/home/banner02.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide class="bigImg" ><img src="../assets/img/home/banner03.jpg" alt="" class="img-fluid"></swiper-slide> -->
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="mobile">
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop" v-if="mobileBanner.length>0">
    <!-- slides -->
        <swiper-slide class="bigImg" v-for="item in mobileBanner" :key="item.displayseq">
          <img :src="item.img" alt="" class="img-fluid" v-if="item.href !== null" @click="openUrl(item.href)">
          <img :src="item.img" alt="" class="img-fluid" v-else>
        </swiper-slide>
        <!-- <swiper-slide class="bigImg" ><img src="../assets/img/home/banner_mobile08.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide class="bigImg" ><img src="../assets/img/home/banner_mobile01.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide class="bigImg" ><img src="../assets/img/home/banner_mobile02.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide class="bigImg" ><img src="../assets/img/home/banner_mobile03.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide class="bigImg" ><img src="../assets/img/home/banner_mobile04.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide class="bigImg" ><img src="../assets/img/home/banner_mobile05.jpg" alt="" class="img-fluid"></swiper-slide>
        <swiper-slide class="bigImg" ><img src="../assets/img/home/banner_mobile06.jpg" alt="" class="img-fluid"></swiper-slide> -->
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>

  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import axios from 'axios'
import {mapActions, mapState} from 'vuex'

export default {
  props: ['viewportWidth'],
  name: 'carrousel',
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    openUrl (url) {
      window.open(url)
    },
    ...mapActions('homeSwiperModules', ['getBanner'])
  },
  computed: {
    ...mapState('homeSwiperModules', ['pcBanner', 'mobileBanner'])
  },
  data () {
    return {
      // pcBanner: [],
      // mobildBanner: [],
      time: null,
      swiperOptionTop: {
        notNextTick: true,
        loop: true,
        initialSlide: 0,
        // spaceBetween: 10,
        // slidesPerView: 1,
        // loopedSlides: 1, // looped slides should be the same
        effect: 'fade',
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
    // swiperOption: {
    //                 notNextTick: true,
    //                 loop: true,
    //                 initialSlide: 0,
    //                 autoplay: {
    //                     delay: 1500,
    //                     disableOnInteraction: true
    //                 },
    //                 speed: 800,
    //                 grabCursor: true,
    //                 pagination: {
    //                     el: ".swiper-pagination",
    //                     clickable: true,
    //                     type: "bullets"
    //                 }
    //             }
  },
  async created () {
    await this.getBanner()
    console.log(this.pcBanner)
  }
}
</script>

<style lang="scss" scoped>
  .mobile{
    display:none;
  }
  .desktop{
    display:initial;
  }
  @media(max-width:640px){
     .mobile{
       display:initial;
     }
     .desktop{
       display:none;
     }
  }

</style>
