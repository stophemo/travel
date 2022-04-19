<template>
  <ul class="alphabet">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="(elem) => (elems[item] = elem)"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
import { computed, ref, onUpdated } from 'vue'


export default {
  name: 'HeroAlphabet',
  props: {
    heroes: Object
  },
  setup (props, context) {
    let timer = null
    let startY = 0
    let touchStatus = false
    const elems = ref([])
    const letters = computed(() => {
      const letters = []
      for (let i in props.heroes) {
        letters.push(i)
      }
      return letters
    })
    onUpdated(() => { startY = elems.value['A'].offsetTop })
    function handleLetterClick (e) {
      context.emit('change', e.target.innerText)
    }
    function handleTouchStart () { touchStatus = true }
    function handleTouchMove (e) {
      if (touchStatus) {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - startY) / 20)
          if (index >= 0 && index <= letters.value.length) {
            context.emit('change', letters.value[index])
          }
        }, 8)
      }
    }
    function handleTouchEnd (e) { touchStatus = false }
    return { letters, elems, handleLetterClick, handleTouchStart, handleTouchMove, handleTouchEnd }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.alphabet
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width 0.4rem
  .item
    line-height 0.4rem
    text-align center
    color $bgcolor
</style>
