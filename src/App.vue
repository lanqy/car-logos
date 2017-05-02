<template>
  <div id="app">
    <navs @click="navHandlerClick"></navs>
    <router-view :item="item"></router-view>
  </div>
</template>

<script>
import guochan from './assets/guochan.json'
import deguo from './assets/deguo.json'
import riben from './assets/riben.json'
import meiguo from './assets/meiguo.json'
import faguo from './assets/faguo.json'
import hanguo from './assets/hanguo.json'
import yidali from './assets/yidali.json'
import yingguo from './assets/yingguo.json'
import qita from './assets/qita.json'
import './assets/index.css'
import navs from './components/navs'
export default {
  name: 'app',
  data () {
    return {
      item: {},
      cars: {
        guochan,
        deguo,
        riben,
        meiguo,
        faguo,
        hanguo,
        yidali,
        yingguo,
        qita
      }
    }
  },
  methods: {
    navHandlerClick (nav) {
      this.item = this.cars[nav]
    }
  },
  components: {
    navs
  }
}
</script>

<style>
</style>
