<template>
  <div class="weekend">
    <div class="title">探索宇宙</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of list" :key="index">
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
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.title
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
