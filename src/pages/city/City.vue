<template>
  <div>
    <city-header class="header"></city-header>
    <city-search class="search"></city-search>
    <city-list class="list"></city-list>
    <city-alphabet class='alphabet'></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
}
</script>

<style>
</style>
