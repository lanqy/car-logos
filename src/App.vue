<template>
  <div id="app">
    <navs></navs>
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/index.css'
import navs from './components/navs'
export default {
  name: 'app',
  components: {
    navs
  }
}
</script>

<style>
</style>
