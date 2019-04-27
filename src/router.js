import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Summary from './views/summary.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/summary',
      name: 'summary',
      component: Summary
    },
    {
      path: '/accordion',
      name: 'accordion',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
