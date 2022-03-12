<template>
  <div class="icons">
    <!-- vue awesome swiper 轮播图 -->
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, pageIndex) in pages" :key="pageIndex">
        <div class="icon" v-for="(item, itemIndex) in page" :key="itemIndex">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="img">
          </div>
          <p class="icon-desc">{{item.description}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOptions: {
        loop: true // 是否循环轮播
      },
      iconList: [{
        imgUrl: 'https://yz.lol.qq.com/zh_CN/map/images/ionia.png',
        description: '艾欧尼亚'
      }, {
        imgUrl: 'https://yz.lol.qq.com/zh_CN/map/images/noxus.png',
        description: '诺克萨斯'
      }, {
        imgUrl: 'https://yz.lol.qq.com/zh_CN/map/images/freljord.png',
        description: '弗雷尔卓德'
      }, {
        imgUrl: 'https://yz.lol.qq.com/zh_CN/map/images/demacia.png',
        description: '德玛西亚'
      }, {
        imgUrl: 'https://yz.lol.qq.com/zh_CN/map/images/piltover.png',
        description: '皮尔特沃夫'
      }, {
        imgUrl: 'https://yz.lol.qq.com/zh_CN/map/images/zaun.png',
        description: '祖安'
      }, {
        imgUrl: 'https://yz.lol.qq.com/zh_CN/map/images/bilgewater.png',
        description: '比尔吉沃特'
      }, {
        imgUrl: 'https://yz.lol.qq.com/zh_CN/map/images/shadow-isles.png',
        description: '暗影岛'
      }, {
        imgUrl: 'https://yz.lol.qq.com/zh_CN/map/images/ixtal.png',
        description: '以绪塔尔'
      }, {
        imgUrl: 'https://yz.lol.qq.com/zh_CN/map/images/shurima.png',
        description: '暗影岛'
      }, {
        imgUrl: 'https://yz.lol.qq.com/zh_CN/map/images/shadow-isles.png',
        description: '恕瑞玛'
      }, {
        imgUrl: 'https://yz.lol.qq.com/zh_CN/map/images/targon.png',
        description: '巨神峰'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'

.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icons
  margin-top 0.1rem
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.44rem
      padding 0.1rem
      .icon-img-content
        display block
        height 100%
        margin 0 auto
    .icon-desc
      position absolute
      bottom 0
      left 0
      right 0
      height 0.44rem
      line-height 0.44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>
