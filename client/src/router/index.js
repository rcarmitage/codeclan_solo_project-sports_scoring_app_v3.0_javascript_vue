import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Teams from '../views/Teams.vue'
import Fixtures from '../views/Fixtures.vue'
import LeagueTable from '../views/LeagueTable.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/teams',
    name: 'teams',
    component: () => import('../views/Teams.vue')
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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
