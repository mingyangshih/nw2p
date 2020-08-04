<template lang="pug">
  .disigner
    .container-fluid
      .row.px-0
        .col-sm-12.px-0
          img.w-100.firstBanner.img-fluid(:src="designerMaster[0].designerBannerImg")
    .container.mt-3
      .row
        .col-3.h-100
          .d-flex.justify-content-center.h-100.align-items-center
            img(:src="designerMaster[0].designerIcon").img-fluid
        .col-9.h-100.d-flex.flex-column.justify-content-center
          p.designerName {{designerMaster[0].designerName}}
          p.designerDesc(v-html="designerMaster[0].designerDesc")
      hr
</template>

<script>
import {mapState} from 'vuex'
export default {
  async created () {
    const vm = this
    let licensorId = vm.$route.params.licensorId
    let designerId = vm.$route.params.designerId
    await vm.$store.dispatch('getDesignerDetail', {licensorId, designerId})
  },
  computed: {
    ...mapState({
      designerMaster: state => state.designerModules.designerMaster,
      designerProductItem: state => state.designerModules.designerProductItem,
      designerProducts: state => state.designerModules.designerProducts
    })
  },
  watch: {
    async '$route' (to, from) {
      const vm = this
      let licensorId = vm.$route.params.licensorId
      let designerId = vm.$route.params.designerId
      if (to.params.licensorId !== from.params.licensorId || to.params.designerId !== from.params.designerId) {
        await vm.$store.dispatch('getDesignerDetail', {licensorId, designerId})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $s20: 20px;
  $serif: 'Noto Serif TC', serif;
  .designerName{
    font-size: 24px;
    font-family: $serif;
    font-weight: bold;
  }
  hr{
    border-color: black;
  }
  .designerDesc{
    line-height: 26px;
  }
  // first banner
  .firstBanner{
    width: 100%;
    max-height: 700px;
    height: auto;
    position: relative;
    z-index: 0;
  }
  @media(max-width: 640px){
    .firstBanner{
      height: auto;
    }
  }
</style>
