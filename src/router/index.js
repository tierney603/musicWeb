import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // 发现
    path: '/',
    name: 'Find',
    component: () => import('../views/Find.vue'),
    alias: '/find'
  }, {
    // 播客
    path: '/podcast',
    name: 'Podcast',
    component: () => import('../views/Podcast.vue'),
  },

  {
    // 我的
    path: '/mind',
    name: 'Mind',
    component: () => import('../views/Mind.vue'),
  },
  {
    // 关注
    path: '/attention',
    name: 'Attention',
    component: () => import('../views/Attention.vue'),
  },
  {
    // 云村
    path: '/coludVillaged',
    name: 'ColudVillage',
    component: () => import('../views/ColudVillage.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
