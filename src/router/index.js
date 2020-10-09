import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Boot',
    component: () => import(/* webpackChunkName: "boot" */ '../views/Boot.vue')
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/Index.vue'),
    children: [
      {
        path: 'calculator',
        component: () => import(/* webpackChunkName: "calculator" */ '../views/Home/Calculator.vue'),
      },
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue'),
      },
      {
        path: 'register',
        component: () => import(/* webpackChunkName: "register" */ '../views/Home/Register.vue'),
      },
      {
        path: 'scandisk',
        component: () => import(/* webpackChunkName: "scandisk" */ '../views/Home/Scandisk.vue'),
      },
      {
        path: 'turbovision',
        component: () => import(/* webpackChunkName: "turbovision" */ '../views/Home/Turbovision.vue'),
      },
    ]
  },
  {
    path: '/bios',
    name: 'Bios',
    component: () => import(/* webpackChunkName: "bios" */ '../views/Bios.vue')
  },
  {
    path: '/%F0%9F%98%83',
    name: '%F0%9F%98%83',
    component: () => import(/* webpackChunkName: "%F0%9F%98%83" */ '../views/%F0%9F%98%83.vue')
  },
]

const router = createRouter({
  mode: 'hash',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
