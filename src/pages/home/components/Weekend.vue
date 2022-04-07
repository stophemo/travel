<template>
  <div>
    <div class="title">探索宇宙</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of recommendList" :key="index">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-author">{{item.author}}</p>
          <p class="item-content">{{item.content}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://game.gtimg.cn/images/lol/universe/v1/assets/images/bard-color-splash.jpg',
        title: '民谣歌者的真言',
        author: 'MARCUS TERRELL SMITH',
        content: '嘿，你！对，就是你！你这个德玛西亚人看着很体面，懂得倾听——你应该愿意驻足片刻，听听一个老人的惊奇见闻和善意警告吧。你要知道，我正在履行一项使命，是星界游神赋予我的，而你可以帮我'
      }, {
        id: '0002',
        imgUrl: 'https://game.gtimg.cn/images/lol/universe/v1/assets/images/the-dissonant-verses-splash.jpg',
        title: '以律乱真',
        author: 'IAN ST. MARTIN',
        content: '“愚人们！”一声怒吼如同鞭子一般抽进了美乐蒂的耳朵。声音从神庙墙外传来，打破了她习以为常的沉静冥思。'

      }, {
        id: '0003',
        imgUrl: 'https://game.gtimg.cn/images/lol/universe/v1/assets/images/copperwood-glade-splash.jpg',
        title: '铜树坪坝上的灵怪',
        author: 'JARED ROSEN',
        content: '在如今这个黑暗的时期，人们谈起永恒之森的时候往往都带着几分敬畏，因为无论男女老少都知道那个地方危险至极，世上最后一群荒野之子在那里布满了机关和陷阱。'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.title
  margin-top 0.2rem
  line-height 0.8rem
  background #eee
  text-indent 0.2rem
.item-img-wrapper
  position relative
  overflow hidden
  height 0
  padding-bottom 56.26%
  .item-img
    position absolute
    width 100%
    top 0
    left 0
    bottom 0
    right 0
    margin auto
.item-info
  padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-author
    line-height .4rem
    color #ccc
    ellipsis()
  .item-content
    line-height .4rem
    font-size .1rem
    ellipsis()
</style>
