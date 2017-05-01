<template>
  <div id="app" class="container center">
    <navs></navs>
    <router-view></router-view>
  </div>
</template>

<script>
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
