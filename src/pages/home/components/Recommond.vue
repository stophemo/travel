<template>
  <div>
    <div class="title">英雄故事推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of recommendList" :key="index">
        <img class="item-img" :src="item.imgUrl" alt="img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommond',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: require('@/assets/images/暗夜猎手.png'),
        title: '暗夜猎手 ~ 薇恩',
        desc: '“杀死你，并不是因为我心怀正义，而是我觉得，杀死你让我倍感愉快。”'
      }, {
        id: '0002',
        imgUrl: require('@/assets/images/暗黑元首.png'),
        title: '暗黑元首 ~ 辛德拉',
        desc: '“我的潜能无穷无尽。休想压住我。”'
      }, {
        id: '0003',
        imgUrl: require('@/assets/images/暗裔剑魔.png'),
        title: '暗裔剑魔 ~ 亚托克斯',
        desc: '“我必须连同希望一起毁坏……”'
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
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
    object-fit fill
  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
    .item-button
      line-height .44rem
      margin-top .16rem
      background $buttonColor
      padding 0 .2rem
      border-radius .06rem
      color #eee
</style>
