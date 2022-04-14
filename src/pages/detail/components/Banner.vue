<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="https://game.gtimg.cn/images/lol/universe/v1/assets/images/champion/splash/Vayne_0.jpg"
        alt="img"
      />
      <div class="banner-info">
        <div class="banner-title">暗夜猎手 ~ 薇恩</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe8ba;</span>3
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['https://game.gtimg.cn/images/lol/universe/v1/assets/images/champion/splash/Vayne_0.jpg', 'https://game.gtimg.cn/images/lol/universe/v1/assets/images/champion/splash/Vayne_0.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang='stylus' scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size 0.32rem
      padding 0 0.2rem
    .banner-number
      height 0.32rem
      line-height 0.32rem
      margin-top 0.14rem
      padding 0 0.4rem
      border-radius 0.2rem
      background rgba(0, 0, 0, 0.8)
      font-size 0.24rem
      .banner-icon
        margin-right 0.1rem
        font-size 0.24rem
</style>
