<template>
  <div class="swiper-slide">
    <slot>
      Slide content
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'SwiperSlide'
  }
</script>

<style scoped lang="scss">
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 10rem;
    z-index: auto;
  }
</style>
