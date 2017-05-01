import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/car/:country',
      name: 'List',
      component: List,
      props: true
    }
  ],
  mode: 'history'
})
