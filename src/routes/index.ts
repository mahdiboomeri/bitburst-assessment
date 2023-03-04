import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: { path: '/todo' } },
  { path: '/todo', component: () => import('./todo.vue') },
  { path: '/backlog', component: () => import('./backlog.vue') },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
