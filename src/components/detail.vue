<template>
  <div class="detail">
      <div class="detail__top_nav">
        <router-link :to="'/car/' + cate">
          返回
        </router-link>
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
    id: {
      type: Number
    }
  },
  data () {
    return {
      cate: this.cate,
      id: this.id
    }
  },
  methods: {
    linkTo () {}
  }
}
</script>

<style lang="css">
.detail__top_nav{height: 54px;line-height: 54px; border-bottom: 3px solid #ddd;}
.detail__top_nav a{margin-left: 1rem;}
.detail{width: 100%;height:100%;z-index: 100;position: absolute;background: #fff;}
</style>
