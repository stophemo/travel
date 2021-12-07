<template>
<div class="wrapper">
    <swiper :options="swiperOptions">
    <swiper-slide v-for="(item,index) in swiperList" :key="index">
      <img class="img" :src="item.url" alt="img">
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '1',
          url: require('@/assets/images/2.jpg')
        },
        {
          id: '2',
          url: require('@/assets/images/4K真实伤害Ekko.jpg')
        },
        {
          id: '3',
          url: require('@/assets/images/未来战士Ekko.jpg')
        },
        {
          id: '4',
          url: require('@/assets/images/真实伤害.jpg')
        },
        {
          id: '5',
          url: require('@/assets/images/真实伤害Ekko_.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #ffffff
.wrapper >>> .swiper-slide
  overflow hidden
  width 100%
  height 0
  padding-bottom 30%
  align-items flex-end!important
  position relative
.wrapper
  .img
    display inline-block
    width 100%
    height auto
    position absolute
    top 50%
    transform translateY(-50%)
    // object-fit cover
    // object-position center
</style>
