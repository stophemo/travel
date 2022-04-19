<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :pagination="{ type: 'fraction' }" :modules="modules">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" alt="img" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  name: 'CommonGallary',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup (props, context) {
    function handleGallaryClick () {
      context.emit('close')
    }
    return { handleGallaryClick, modules: [Pagination] }
  }
}
</script>

<style lang='stylus' scoped>
.container
  z-index 99
  display flex
  flex-direction column
  justify-content center
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background #000
  .wrapper
    width 100%
    height 0
    padding-bottom 58.93%
    background #ccc
    .swiper
      overflow inherit
    & >>> .swiper-pagination
      bottom -1rem
      color #fff
    .gallary-img
      width 100%
</style>
