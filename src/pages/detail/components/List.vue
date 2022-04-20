<template>
  <div class="list">
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="iconfont item-title-icon">&#xe607;</span>
        {{ item.title }}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: { list: Array }
}
</script>

<style lang='stylus' scoped>
.item-title
  line-height 0.8rem
  font-size 0.32rem
  padding 0.2rem
  .item-title-icon
    display inline-block
    width 0.36rem
    height 0.36rem
    margin-right 0.05rem
.item-children
  padding 0 0.2rem
</style>
