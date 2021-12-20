<template>
  <!-- 轮播图组件 -->
  <div class="wrapper">
    <!-- vue awesome swiper 轮播图 -->
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <img class="img" :src="item.url" alt="img" />
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
        pagination: '.swiper-pagination', // 轮播标页圆圈
        loop: true // 是否循环轮播
      },
      swiperList: [ // 轮播内容
        {
          id: '1',
          url: require('@/assets/images/True Damage.jpg')
        },
        {
          id: '2',
          url: require('@/assets/images/真实伤害Ekko.jpg')
        },
        {
          id: '3',
          url: require('@/assets/images/真实伤害Akali.jpg')
        },
        {
          id: '4',
          url: require('@/assets/images/真实伤害Qiyana.jpg')
        },
        {
          id: '5',
          url: require('@/assets/images/真实伤害Yasso.jpg')
        },
        {
          id: '6',
          url: require('@/assets/images/真实伤害Senna.jpg')
        }
      ]
    }
  }
}
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
  .img
    display inline-block
    width 100%
    height auto
    position absolute
    top 70%
    transform translateY(-50%)
</style>
