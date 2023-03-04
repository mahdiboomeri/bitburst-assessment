import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./index.vue') },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
