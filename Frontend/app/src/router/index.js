import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
import NotFound from '../views/404'
import LoginAndRegister from '../views/LoginAndRegister'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'*',
    name:'/404',
    component: NotFound,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginAndRegister,
  },
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: Index,
    children:[
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
