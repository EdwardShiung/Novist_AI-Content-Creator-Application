import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardLayout from '../views/DashboardLayout'
import Dashboard from '../views/Dashboard'
import NotFound from '../views/404'
import LoginAndRegister from '../views/LoginAndRegister'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'login',
    component: LoginAndRegister,
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children:[
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
      },
    ],
  },
  {
    path:'*',
    name:'404',
    component: NotFound,
  },
]

const router = new VueRouter({
  routes
})

export default router
