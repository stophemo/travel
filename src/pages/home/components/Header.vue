<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市经典游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  // @import '../../../assets/styles/varibles.styl'
  @import '~styles/varibles.styl'
  .header
    display: flex;
    // flex-flow: row nowrap;
    // justify-content: space-between;
    height: .86rem;
    background: $bgColor;
    color: #fff;
    line-height: 0.86rem;
    .header-left
      text-align: center;
      width: .64rem;
      // float: left;
      .back-icon
        // text-align: center;
        font-size: .4rem;
    .header-input
      flex: 1;
      // flex: auto;
      height: .64rem;
      margin: .12rem 0 .12rem .1rem;
      padding-left: .2rem;
      line-height: .64rem;
      background: #fff;
      border-radius: .1rem;
      color: #CCC;
    .header-right
      width: 1.24rem;
      // float: right;
      text-align: center;
      .arrow-icon
        font-size: .2rem;
</style>
