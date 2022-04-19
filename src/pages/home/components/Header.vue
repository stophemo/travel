<template>
  <!-- 头部搜索框组件 -->
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      {{ research }}
    </div>
    <router-link to="/hero">
      <div class="header-right">
        {{ hero }}
        <span class="iconfont arrow-icon">&#xe62d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore, mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  props: {
    research: String
  },
  setup () {
    const store = useStore()
    const hero = computed(() => {
      return store.state.hero
    })
    return { hero }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display flex
  line-height $headerHeight
  background $bgColor
  color #fff
  .header-left
    width 0.64rem
    float left
    text-align center
    .back-icon
      font-size 0.4rem
  .header-input
    flex 1
    height 0.64rem
    line-height 0.64rem
    margin-top 0.12rem
    margin-left 0.2rem
    padding-left 0.2rem
    background #fff
    border-radius 0.1rem
    color #ccc
  .header-right
    min-width 1.04rem
    padding 0 0.1rem
    float right
    text-align center
    color #fff
    .arrow-icon
      margin-left -0.04rem
      font-size 0.24rem
</style>
