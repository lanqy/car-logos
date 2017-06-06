<template>
  <div class="detail">
      <div class="detail__top_nav">
        <router-link :to="'/car/' + cate">
          返回
        </router-link>
      </div>
      <div class="detail__content">
        <div class="container">
          <h1>{{item.title}}</h1>
          <div class="content" v-html='item.detail'></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: {
    cate: {
      type: String,
      default: 'guochan'
    },
    id: String
  },
  data () {
    return {
      item: {},
      itemList: {}
    }
  },
  watch: {
    item (cate) {
      this.itemList = this.$parent.cars[this.cate]
    }
  },
  methods: {
    getItem (id) {
      var arr = this.itemList.items
      var item = {}
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].info.id === id) {
          item = arr[i]
        }
      }
      this.item = item
    }
  },
  created: function () {
    this.itemList = this.$parent.cars[this.cate]
    this.getItem(this.id)
  }
}
</script>

<style lang="css">
.container .content{line-height: 28px;}
.detail__content{padding-top: 54px;}
.detail__top_nav{height: 54px;line-height: 54px;background: #fff;z-index: 101;border-bottom: 3px solid #ddd;position: fixed;left: 0;top:0;width: 100%;}
.detail__top_nav a{margin-left: 1rem;}
.detail{width: 100%;height:100%;z-index: 100;position: absolute;background: #fff;}
</style>
