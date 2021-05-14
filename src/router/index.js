import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from "@/views/HomeView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
