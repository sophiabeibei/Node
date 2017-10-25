<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides" :key="slide">
      <img :src="slide" class="img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props: {
        swiperSlides: {type: Array,default: []}
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          autoplay: 3500,
          autoplayDisableOnInteraction: false,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          observeParents:true,
        }
      }
    }
  }
</script>
<style scoped lang="less">
  img{
    width: 100%;
  }
</style>
