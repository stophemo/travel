<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入英雄名或拼写"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleHeroClick(item.title)"
        >
          {{ item.title }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'
import Bscroll from 'better-scroll'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'HeroSearch',
  props: {
    heroes: Object
  },
  setup (props) {
    const keyword = ref('')
    const list = ref([])
    let timer = null
    const search = ref(null)
    const store = useStore()
    const router = useRouter()

    const hasNoData = computed(() => {
      !list.value.length
    })

    watch(keyword, (keyword, prevKeyword) => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      if (!keyword) {
        list.value = []
        return
      }
      timer = setTimeout(() => {
        const result = []
        for (let i in props.heroes) {
          props.heroes[i].forEach((value) => {
            if (value.alias.indexOf(keyword) > -1 || value.title.indexOf(keyword) > -1) {
              result.push(value)
            }
          })
        }
        list.value = result
      }, 100)
    })
    function handleHeroClick (hero) {
      store.commit('changeHero', hero)
      keyword.value = ''
      router.push('/')
    }

    onMounted(() => {
      new Bscroll(search.value, { click: true })
    })

    return { keyword, list, search, hasNoData, handleHeroClick }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.search
  padding 0 0.1rem
  height 0.72rem
  background $bgColor
  .search-input
    box-sizing border-box
    width 100%
    height 0.62rem
    padding 0 0.1rem
    line-height 0.62rem
    text-align center
    border-radius 0.06rem
    color #666
.search-content
  z-index 1
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eee
  .search-item
    line-height 0.62rem
    padding-left 0.2rem
    color #666
    background-color #fff
</style>
