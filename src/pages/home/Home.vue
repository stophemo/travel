<template>
  <div>
    <home-header :research="research"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommond :list="recommendList"></home-recommond>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommond from './components/Recommond.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import { useStore } from 'vuex'
import { ref, onMounted, onActivated, computed } from 'vue'

export default {
  name: 'Home',
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommond, HomeWeekend },
  setup () {
    // 请求首页数据
    const { research, swiperList, iconList, recommendList, weekendList } = useAxiosLogic()
    // 是否需要重新请求
    const { lastHero } = useLastHeroLogic()
    return { lastHero, research, swiperList, iconList, recommendList, weekendList }
  }
}
// 是否需要重新请求数据
function useLastHeroLogic () {
  const lastHero = ref('')
  const store = useStore()
  const hero = computed(() => { return store.state.hero })
  async function getHomeInfo () {
    let res = await axios.get('/api/index.json?hero=' + hero)
    res = res.data
    if (res.ret && res.data) {
      const result = res.data
      research.value = result.research
      swiperList.value = result.swiperList
      iconList.value = result.iconList
      recommendList.value = result.recommendList
      weekendList.value = result.weekendList
    }
  }
  onMounted(() => {
    lastHero.value = hero
  })
  onActivated(() => {
    if (lastHero.value !== hero) {
      lastHero.value = hero
      getHomeInfo()
    }
  })
  return { lastHero }
}
// 请求首页数据
function useAxiosLogic () {
  const research = ref('')
  const swiperList = ref([])
  const iconList = ref([])
  const recommendList = ref([])
  const weekendList = ref([])
  const store = useStore()
  const hero = computed(() => { return store.state.hero })
  async function getHomeInfo () {
    let res = await axios.get('/api/index.json?hero=' + hero)
    res = res.data
    if (res.ret && res.data) {
      const result = res.data
      research.value = result.research
      swiperList.value = result.swiperList
      iconList.value = result.iconList
      recommendList.value = result.recommendList
      weekendList.value = result.weekendList
    }
  }
  onMounted(() => { getHomeInfo() })
  return { research, swiperList, iconList, recommendList, weekendList }
}


</script>

<style>
</style>
