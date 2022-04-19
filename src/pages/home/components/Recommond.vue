<template>
  <div class="recommend">
    <div class="title">英雄故事推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="(item, index) of list"
        :key="index"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="img" />
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommond',
  props: {
    list: Array
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
    padding 0.1rem
    object-fit fill
  .item-info
    flex 1
    padding 0.1rem
    min-width 0
    .item-title
      line-height 0.54rem
      font-size 0.32rem
      color #000
      ellipsis()
    .item-desc
      line-height 0.4rem
      color #ccc
      ellipsis()
    .item-button
      line-height 0.44rem
      margin-top 0.16rem
      background $buttonColor
      padding 0 0.2rem
      border-radius 0.06rem
      color #eee
</style>
