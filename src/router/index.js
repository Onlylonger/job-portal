import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/AboutView.vue'
import AboutView from '../views/ProductView.vue'
import { COMPANY_DASHBOARD, COMPANY_OFFICERS, COMPANY_SETTLE } from '@/constants'

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
          path: 'dashboard',
          name: COMPANY_DASHBOARD,
          component: () => import('../views/CompanyDashboardView.vue')
        },
        {
          path: 'settle',
          name: COMPANY_SETTLE,
          component: () => import('../views/CompanySettleView.vue')
        },
        {
          path: 'officers',
          name: COMPANY_OFFICERS,
          component: () => import('../views/CompanyOfficersView.vue')
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
          path: 'dashboard',
          name: 'hr-dashboard',
          component: () => import('../views/HRDashboardView.vue')
        }
      ]
    }
  ]
})

export default router
