import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
    path: '/flavors', 
    name: 'Flavors',
    component: () => import('../views/Flavors.vue')
  },
  {
    path: '/details',
    name: 'Details',
    component : () => import('@/views/Details.vue')
  },
  {
    path: '/consumption',
    name: 'Consumption',
    component : () => import('@/views/Consumption.vue')
  },
  {
    path: '/alternateLiquids',
    name: 'AlternateLiquids',
    component : () => import('@/views/AlternateLiquids.vue')
  },
  {
    path: '/nonCerealActivities',
    name: 'NonCerealActivities',
    component : () => import('@/views/AlternateActivities.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
