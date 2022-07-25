import UserLogin from '../views/UserLogin.vue'
import userinfo from '../views/userinfo.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: UserLogin
  },
  {
    path: '/users',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Findall.vue'),
    meta: { requiresAuth: true },
    children:[{
      path: '/',
      component: userinfo
    },
    {
      path: '/upload',
      component:() => import('../views/upload.vue')
    }
  ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
