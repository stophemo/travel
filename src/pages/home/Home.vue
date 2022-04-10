<template>
  <div>
    <!-- 头部 -->
    <home-header :hero='hero'></home-header>
    <!-- 轮播图 -->
    <home-swiper :list='swiperList'></home-swiper>
    <!-- icon -->
    <home-icons :list='iconList'></home-icons>
    <!-- Recommond -->
    <home-recommond :list='recommendList'></home-recommond>
    <!-- weekend -->
    <home-weekend :list='weekendList'></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommond from './components/Recommond.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommond,
    HomeWeekend
  },
  data () {
    return {
      hero: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hero = data.hero
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>
</style>
