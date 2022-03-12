<template>
  <div>
    <div class="title">英雄推荐</div>
    <ul>
      <li class="item">
        <div class="item-img-wrapper">
          <img class="item-img" src="https://game.gtimg.cn/images/lol/universe/v1/assets/images/champion/splash/Vayne_0.jpg" alt="img">
        </div>
        <div class="item-info">
          <p class="item-title"></p>
          <p class="item-desc"></p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommond'
}
</script>

<style lang="stylus" scoped>
.title
  margin-top 0.2rem
  line-height 0.8rem
  background #eee
  text-indent 0.2rem
.item
  display flex
  height 2.2rem
  .item-img-wrapper
    overflow hidden
    width 1.6rem
    height 2rem
    padding 0.1rem
    .item-img
      height 150%
      object-position 50% 0%
      object-fit cover
</style>
