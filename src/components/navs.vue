<template>
  <div class="header-container">
    <div class="header-nav">
      <ul class="nav-list">
        <li class="nav-item" v-for="nav in navs">
          <router-link :to="'/car/' + nav.nav">{{nav.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      navs: [
        {
          name: '中国',
          nav: 'gouchan'
        },
        {
          name: '日本',
          nav: 'riben'
        },
        {
          name: '德国',
          nav: 'deguo'
        },
        {
          name: '法国',
          nav: 'faguo'
        },
        {
          name: '意大利',
          nav: 'yidali'
        },
        {
          name: '英国',
          nav: 'yingguo'
        },
        {
          name: '美国',
          nav: 'meiguo'
        },
        {
          name: '韩国',
          nav: 'hanguo'
        },
        {
          name: '其它',
          nav: 'qita'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style>
.header {
   margin-bottom: 20px;
   height: 40px;
   border-bottom: 1px solid rgba(0,0,0,.07);
   &:empty {
     display: none;
   }
   &.is-fixed {
     position: fixed;
     top: 0;
     left: 280px;
     right: 0;
     background-color: white;
     z-index: 9999;
   }
   .header-container {
     display: flex;
     justify-content: space-between;
     align-items: center;
     max-width: 1000px;
     height: 100%;
     margin: 0 auto;
     padding: 0 30px;
   }
 }

 .no-sidebar .header {
   left: 0;
   margin: 0 auto;
   max-width: 1000px;
   border-left: 1px solid rgba(0,0,0,.07);
   border-right: 1px solid rgba(0,0,0,.07);
 }

 .header-right {
   display: flex;
   align-items: center;
 }

 .header-nav {
    display: flex;
    align-items: center;
    &.is-mobile {
      .nav-list {
        height: auto;
        line-height: auto;
        .nav-item {
          float: none;
          >a, >div {
            border-bottom: none;
            height: auto;
            line-height: 30px;
            &.router-link-active {
              color: #42b983;
            }
          }
        }
        .dropdown-list {
          background-color: transparent;
        }
        .nav-item-dropdown {
          .dropdown-list {
            position: initial;
            display: block;
            transform: none;
            border: none;
            padding: 0;
          }
        }
      }
    }
  }
  .nav-list {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    width: 100%;
    line-height: 40px;
    height: 40px;
    .sep {
      height: 1px;
      background-color: #f0f0f0;
      display: block;
      margin: 8px 0;
    }
    .label {
      display: block;
      margin-top: 5px;
      font-weight: bold;
      font-size: 14px;
    }
    .nav-item {
      flex:1;
      text-align: center;
      margin-right: 20px;
      >a, >div {
        color: #666;
        height: 40px;
        border-bottom: 3px solid transparent;
        display: block;
        &.router-link-active {
          border-bottom-color: #42b983;
          color: #333;
        }
        &:hover {
          color: #333;
          &:not(.router-link-active) {
            border-bottom-color: #e2e2e2;
          }
        }
      }
      .arrow {
        display: inline-block;
        vertical-align: middle;
        margin-top: -1px;
        margin-left: 6px;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 5px solid #ccc;
      }
    }
    .nav-item-dropdown {
      position: relative;
      .dropdown-list {
        position: absolute;
        z-index: 9999;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        display: none;
        background-color: white;
        margin: 0;
        list-style-type: none;
        border: 1px solid #e2e2e2;
        border-radius: 3px;
        white-space: nowrap;
        padding: 10px 0;
        .dropdown-item {
          font-size: 13px;
          line-height: 28px;
          .router-link:hover, .router-link-active {
            color: #42b983;
          }
        }
      }
      &:hover {
        .dropdown-list {
          display: block;
        }
      }
    }
  }
</style>
