<template>
  <div class="container center">

  </div>
</template>

<script>
import guochan from '../assets/guochan.json'
import deguo from '../assets/deguo.json'
import riben from '../assets/riben.json'
import meiguo from '../assets/meiguo.json'
import faguo from '../assets/faguo.json'
import hanguo from '../assets/hanguo.json'
import yidali from '../assets/yidali.json'
import yingguo from '../assets/yingguo.json'
import qita from '../assets/qita.json'
export default {
  name: 'list',
  props: {
    country: String
  },
  data () {
    return {
      list: window[this.country],
      countryArr: [
        guochan,
        deguo,
        riben,
        meiguo,
        faguo,
        hanguo,
        yidali,
        yingguo,
        qita
      ]
    }
  },
  watch: {
    country (value) {
      console.log(value)
    }
  },
  methods: {
    list: function (country) {}
  },
  created: function () {
    console.log(this.countryArr)
    console.log(this.country)
  }
}
</script>

<style lang="css">
</style>
