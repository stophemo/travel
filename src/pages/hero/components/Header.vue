<template>
  <div class="header">
    英雄选择
    <router-link to="/">
      <span class="iconfont header-back">&#xe624;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HeroHeader'
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.header
  position relative
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background $bgColor
  font-size 0.32rem
  .header-back
    position absolute
    top 0
    left 0
    width 0.64rem
    text-align center
    font-size 0.4rem
    color #fff
</style>
