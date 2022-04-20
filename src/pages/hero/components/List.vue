<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前英雄</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ currentHero }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门英雄</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.heroId"
            @click="handleHeroClick(item.title)"
          >
            <div class="button">{{ item.title }}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of heroes"
        :key="key"
        :ref="
          (elem) => {
            elems[key] = elem
          }
        "
      >
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.heroId"
            @click="handleHeroClick(innerItem.title)"
          >
            {{ innerItem.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onUpdated, onActivated, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Bscroll from 'better-scroll'
export default {
  name: 'HeroList',
  props: {
    heroes: Object,
    hot: Array,
    letter: String
  },
  setup (props) {
    const { currentHero, handleHeroClick } = useClickLogic()
    const { wrapper, elems } = useScrollLogic(props)
    return { elems, wrapper, currentHero, handleHeroClick }
  }
}

function useClickLogic () {
  const router = useRouter()
  const store = useStore()
  const currentHero = computed(() => { return store.state.hero })
  function handleHeroClick (hero) {
    store.commit('changeHero', hero)
    router.push('/')
  }
  return { currentHero, handleHeroClick }
}

function useScrollLogic (props) {
  const wrapper = ref(null)
  const elems = ref([])
  let scroll = null
  onMounted(() => { scroll = new Bscroll(wrapper.value, { click: true }) })
  onUpdated(() => { scroll.refresh() })
  onActivated(() => {scroll.scrollToElement(wrapper.value)})
  watch(() => props.letter, (letter, prevLetter) => {
    if (letter && scroll) {
      const element = elems.value[letter]
      scroll.scrollToElement(element)
    }
  })
  return { wrapper, elems }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.list
  overflow hidden
  position absolute
  top 1.58rem
  right 0
  bottom 0
  left 0
  .title
    line-height 0.54rem
    background #eee
    padding-left 0.2rem
    color #666
    font-size 0.26rem
  .button-list
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    overflow hidden
    .button-wrapper
      float left
      width 33.33%
      .button
        margin 0.1rem
        padding 0.1rem 0
        text-align center
        border 0.02rem solid #ccc
        border-radius 0.06rem
  .item-list
    .item
      line-height 0.76rem
      padding-left 0.2rem
</style>
