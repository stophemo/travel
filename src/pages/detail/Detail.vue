<template>
  <div>
    <detail-banner
      :heroName="heroName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  setup () {
    const { heroName, bannerImg, gallaryImgs, list } = useAxiosLogic()
    return { heroName, bannerImg, gallaryImgs, list }
  }
}

function useAxiosLogic () {
  const heroName = ref('')
  const bannerImg = ref('')
  const gallaryImgs = ref([])
  const list = ref([])
  const route = useRoute()
  async function getDetailInfo () {
    // axios.get('api/detail.json?id=' + this.$route.params.id)
    let res = await axios.get('api/detail.json', {
      params: { id: route.params.id }
    })
    res = res.data
    if (res.ret && res.data) {
      const result = res.data
      heroName.value = result.heroName
      bannerImg.value = result.bannerImg
      gallaryImgs.value = result.gallaryImgs
      list.value = result.areaList
    }
  }
  onMounted(() => { getDetailInfo() })
  return { heroName, bannerImg, gallaryImgs, list }
}
</script>

<style lang='stylus' scoped>
.content
  height 50rem
</style>
