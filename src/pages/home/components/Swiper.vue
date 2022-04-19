<template>
  <!-- 轮播图组件 -->
  <div class="wrapper">
    <!-- vue awesome swiper 轮播图 -->
    <swiper :loop="true" v-if="showSwiper">
      <swiper-slide v-for="(item, index) in list" :key="index">
        <img class="img" :src="item.url" alt="img" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default defineComponent({
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    list: Array
  },
  setup (props) {
    const showSwiper = computed(() => props.list.length)
    return { showSwiper }
  }
})
</script>

<style lang="stylus" scoped>
// 深度选择 当前播放图片标页小圆圈
.wrapper >>> .swiper-pagination-bullet-active
  background #ffffff
// 深度选择 img标签的直系父级 用padding实现固定宽高比
.wrapper >>> .swiper-slide
  overflow hidden
  width 100%
  height 0
  padding-bottom 40%
  position relative
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 40%
  position relative
  background #eee
  .img
    display inline-block
    width 100%
    height auto
    position absolute
    top 70%
    transform translateY(-50%)
</style>
