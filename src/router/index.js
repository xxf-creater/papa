import Vue from 'vue'
import VueRouter from 'vue-router'
// import PageB from '../views/PageB.vue'
// import PageA from '../views/PageA.vue'
// import PageC from '../views/PageC.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/page-b',
    name: 'PageB',
    component: () => import(/* webpackChunkName: "about" */ '../views/PageB.vue')
  },
  {
    path: '/page-a',
    name: 'PageA',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageA.vue')
  },
  {
    path: '/page-c',
    name: 'PageC',
    component: () => import(/* webpackChunkName: "about" */ '../views/PageC.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
