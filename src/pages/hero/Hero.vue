<template>
  <div>
    <hero-header class="header"></hero-header>
    <hero-search class="search" :heroes="heroes"></hero-search>
    <hero-list
      class="list"
      :heroes="heroes"
      :hot="hotHeroes"
      :letter="letter"
    ></hero-list>
    <hero-alphabet
      class="alphabet"
      :heroes="heroes"
      @change="handleLetterChange"
    ></hero-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import HeroHeader from './components/Header.vue'
import HeroSearch from './components/Search.vue'
import HeroList from './components/List.vue'
import HeroAlphabet from './components/Alphabet.vue'

export default {
  name: 'Hero',
  data () {
    return {
      lastHero: '',
      heroes: {},
      hotHeroes: [],
      letter: ''
    }
  },
  computed: {
    ...mapState(['hero'])
  },
  components: {
    HeroHeader,
    HeroSearch,
    HeroList,
    HeroAlphabet
  },
  methods: {
    getHeroInfo () {
      axios.get('/api/hero.json').then(this.handleGetHeroInfoSucc)
    },
    handleGetHeroInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.heroes = data.heroes
        this.hotHeroes = data.hotHeroes
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.lastHero = this.hero
    this.getHeroInfo()
  },
  activated () {
    if (this.lastHero !== this.hero) {
      this.lastHero = this.hero
      this.getHeroInfo()
    }
  }
}
</script>

<style>
</style>
