<template>
  <div>
    <!-- 头部 -->
    <home-header></home-header>
    <!-- 轮播图 -->
    <home-swiper></home-swiper>
    <!-- icon -->
    <home-icons></home-icons>
    <!-- Recommond -->
    <home-recommond></home-recommond>
    <!-- weekend -->
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommond from './components/Recommond.vue'
import HomeWeekend from './components/Weekend.vue'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommond,
    HomeWeekend
  }
}
</script>

<style>
</style>
