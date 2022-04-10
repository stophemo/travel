<template>
    <div>
      <city-header class="header"></city-header>
      <city-search class="search"></city-search>
    </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style>
</style>
