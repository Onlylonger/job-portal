import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/AboutView.vue'
import AboutView from '../views/ProductView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      component: AboutView
    },
    {
      path: '/service',
      name: 'service',
      component: ProductView
    },
    {
      path: '/company',
      name: 'company',
      component: () => import('../views/CompanyView.vue'),
      children: [
        {
          path: '',
          name: 'company-first',
          component: () => import('../views/CompanyFirstView.vue')
        },
        {
          path: 'login',
          name: 'company-login',
          component: () => import('../views/CompanyLoginView.vue')
        },
        {
          path: 'index',
          name: 'company-index',
          component: () => import('../views/CompanyIndexView.vue')
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
          name: 'hr-first',
          component: () => import('../views/HRFirstView.vue')
        },
        {
          path: 'login',
          name: 'hr-login',
          component: () => import('../views/HRLoginView.vue')
        },
        {
          path: 'index',
          name: 'hr-index',
          component: () => import('../views/HRIndexView.vue')
        }
      ]
    }
  ]
})

export default router
