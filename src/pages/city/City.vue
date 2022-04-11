<template>
  <div>
    <city-header class="header"></city-header>
    <city-search class="search" :cities="cities"></city-search>
    <city-list
      class="list"
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet
      class="alphabet"
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'

export default {
  name: 'City',
  data () {
    return {
      lastCity: '',
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getCityInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getCityInfo()
    }
  }
}
</script>

<style>
</style>
