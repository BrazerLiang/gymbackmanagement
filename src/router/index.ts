import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Layout from '@/layout/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import ('@/layout/Index.vue')
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: () => import ('@/components/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router