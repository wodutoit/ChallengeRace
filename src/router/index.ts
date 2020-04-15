import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Race from '../views/Race.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Race',
    component: Race
  }
]

const router = new VueRouter({
  routes
})

export default router
