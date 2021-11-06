import Vue from 'vue'
import VueRouter from 'vue-router'
import LogInForm from "@/components/log-in-form.vue"
import Register from "@/components/register.vue"
import Home from "@/views/Home.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/log-in',
    name: 'log-in-form',
    component: LogInForm
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import(/* webpackChunkName: "about" */ '../views/messages.vue')
  },
  {
    path: '/offers',
    name: 'offers',
    component: () => import(/* webpackChunkName: "about" */ '../views/offers.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/profile.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register.vue')
  },
  {
    path: '/projects',
    name: 'project',
    component: () => import(/* webpackChunkName: "about" */ '../views/projectInProgressContractor.vue')
  },
  {
    path: '/controlMenuContractor',
    name: 'controlMenuContractor',
    component: () => import(/* webpackChunkName: "about" */ '../views/controlMenuContractor')
  },
  {
    path: '/budget',
    name: 'budget',
    component: () => import(/* webpackChunkName: "about" */ '../views/budget')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
