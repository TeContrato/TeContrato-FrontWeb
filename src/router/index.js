import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path:'/searchcontractor',
    name:'searchcontractor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Project/SearchContractor')
  },
  {
    path:'/profilecontractor',
    name:'profilecontractor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Project/ProfileContractor')
  },
  {
  path:'/projectprogress',
      name:'projectprogress',
    component: () => import(/* webpackChunkName: "about" */ '../views/Project/ProjectInProgress')
  },
  {
  path:'/controlmenu',
      name:'controlmenu',
    component: () => import(/* webpackChunkName: "about" */ '../views/Project/ControlMenu')
  },
  {
  path:'/finalproject',
      name:'finalproject',
    component: () => import(/* webpackChunkName: "about" */ '../views/Project/FinalProject')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
