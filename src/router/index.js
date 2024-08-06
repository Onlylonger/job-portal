import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'text-cyan-600',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('../views/CompanyView.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/CompanyFirstView.vue')
        },
        {
          path: 'login',
          name: 'company-login',
          component: () => import('../views/CompanyLoginView.vue')
        }
      ]
    },
    {
      path: '/hr',
      name: 'hr',
      component: () => import('../views/HRView.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/HRFirstView.vue')
        },
        {
          path: 'login',
          name: 'hr-login',
          component: () => import('../views/HRLoginView.vue')
        }
      ]
    }
  ]
})

export default router
