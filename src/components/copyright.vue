<template lang="pug">
  .copyright.bg-dark
    .container.h-100.d-flex.justify-content-between.align-items-center(:class="{'flex-column':viewportWidth <= 640}")
      p.text-white(:class="{'mb-0':viewportWidth > 640}") 永豐雲端印刷網，給你的 質感印刷提案
      p.text-white(:class="{'mb-0':viewportWidth > 640}") ©{{fullyear}} 永豐雲端印刷網 Copyright{{version}}
</template>

<script>
export default {
  props: ['viewportWidth'],
  data () {
    return {
      fullyear: '',
      version: window.version
    }
  },
  created () {
    let d = new Date()
    this.fullyear = d.getFullYear()
  }
}

</script>
<style lang="scss" scoped>
.copyright{
  font-size: 13px;
  padding: 20px 0;
}
p:nth-child(2){
  margin-bottom: 0;
}
@media (min-width: 1200px){
  .container, .container-sm, .container-md, .container-lg, .container-xl {
    max-width: 1395px;
  }
}
</style>
