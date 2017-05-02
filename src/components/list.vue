<template>
  <div class="car-list">
    <h1>{{list.title}}</h1>
    <div class="container center">
      <ul class="row">
        <li v-for="item in list.items" class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div class="car">
            <router-link :to="'/car/'+ item.info.cate + '/' + item.info.id">
              <img :src="item.logo" alt="">
              <h2>{{item.title}}</h2>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
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
    country: {
      type: String,
      default: 'guochan'
    }
  },
  data () {
    return {
      list: [],
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
  watch: {
    country (value) {
      this.carList(value)
    }
  },
  methods: {
    carList (country) {
      this.list = this.cars[country]
    }
  },
  created: function () {
    this.carList(this.country)
  }
}
</script>

<style lang="css">
*{margin:0;padding:0;}
.car-list{padding-top: 54px;}
.car-list h1{text-align: center;margin-bottom: 25px;}
.car-list li{text-align: center;list-style: none;
}
.car-list li div.car{
    padding: 4px;
    line-height: 1.4;
    border-radius: 0;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    display: inline-block;
    width: 100%;
    height: 168px;
    margin-bottom: 24px;
    background-color: #fff;
    border: 1px solid #ddd;
  }
.car-list li div.car a{display: block;height: 168px;}
</style>
