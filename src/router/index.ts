import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { computed } from 'vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/components/HomeView.vue')
  },
  {
    path: '/world',
    name: 'World',
    component: () => import('@/components/HelloWorld.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router