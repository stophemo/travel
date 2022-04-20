<template>
  <div>
    <hero-header class="header"></hero-header>
    <hero-search class="search" :heroes="data.heroes"></hero-search>
    <hero-list
      class="list"
      :heroes="data.heroes"
      :hot="data.hotHeroes"
      :letter="letter"
    ></hero-list>
    <hero-alphabet
      class="alphabet"
      :heroes="data.heroes"
      @change="handleLetterChange"
    ></hero-alphabet>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import HeroHeader from './components/Header.vue'
import HeroSearch from './components/Search.vue'
import HeroList from './components/List.vue'
import HeroAlphabet from './components/Alphabet.vue'

export default {
  name: 'Hero',
  components: {
    HeroHeader,
    HeroSearch,
    HeroList,
    HeroAlphabet
  },
  setup () {
    // 获取英雄列表数据
    const { data } = useDataLogic()
    // 组件传值：letter
    const { letter, handleLetterChange } = useLetterLogic()
    return { data, letter, handleLetterChange }
  }
}
function useDataLogic () {
  const data = reactive({
    heroes: {},
    hotHeroes: []
  })
  async function getHeroInfo () {
    let res = await axios.get('/api/fixedHeroList.json')
    res = res.data
    if (res.ret && res.data) {
      const result = res.data
      data.heroes = result.heroes
      data.hotHeroes = result.hotHeroes
    }
  }
  onMounted(() => { getHeroInfo() })
  return { data }
}

function useLetterLogic () {
  const letter = ref('')
  function handleLetterChange (selected) {
    letter.value = selected
  }
  return { letter, handleLetterChange }
}

</script>
