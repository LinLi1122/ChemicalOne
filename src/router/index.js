import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    path: '/ContactUs',
    component: () => import(/* webpackChunkName: "layout-default" */ '@/layouts/DefaultLayout.vue'),
    children: [{
      path: '',
      name: 'contactus-page',
      component: () => import(/* webpackChunkName: "starter-page" */ '@/pages/ContactUsPage.vue')
    }]
  },
  {
  path: '/product',
  component: () => import(/* webpackChunkName: "layout-default" */ '@/layouts/DefaultLayout.vue'),
  children: [{
    path: '',
    name: 'Product-page',
    component: () => import(/* webpackChunkName: "starter-page" */ '@/pages/Product.vue')
  }]
},
  
  {
  path: '/',
  component: () => import(/* webpackChunkName: "layout-default" */ '@/layouts/DefaultLayout.vue'),
  children: [{
    path: '',
    name: 'Home-page',
    component: () => import(/* webpackChunkName: "starter-page" */ '@/pages/HomePage.vue')
  }]
}, {
  path: '*',
  component: () => import(/* webpackChunkName: "layout-error" */ '@/layouts/ErrorLayout.vue'),
  children: [{
    path: '',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '@/pages/error/NotFoundPage.vue')
  }]
}
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

/**
 * Before each route update
 */
router.beforeEach((to, from, next) => {
  return next()
})

/**
 * After each route update
 */
router.afterEach((to, from) => {
})

export default router
