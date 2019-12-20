<template>
  <div id="app">
    <div class="w-full flex justify-center my-4">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>

    <div class="swiper">
      <swiper>
        <swiper-slide v-for="(i, index) in 10" :key="`slide-${index}`">{{`Slide ${i}`}}</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .swiper{
    @apply bg-gray-200
  }
</style>
