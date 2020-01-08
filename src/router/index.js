import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/fixtures',
    name: 'fixtures',
    component: () => import('../views/Fixtures.vue')
  },
  {
    path: '/league_table',
    name: 'league_table',
    component: () => import('../views/LeagueTable.vue')
  },
  {
    path: '/teams',
    name: 'teams',
    component: () => import('../views/Teams.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
