import Vue from 'vue'
import Router from 'vue-router'

import defaultLayout from '@/layouts/defaultLayout'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Err404 from '@/pages/Err404'
import Err500 from '@/pages/Err500'

Vue.use(Router)

export const constantRouter = [
  {
    path: '/',
    component: defaultLayout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: Home,
        name: 'home'
      },
      {
        path: 'about',
        component: About,
        name: 'about'
      }
    ]
  },
  {
    path: '*',
    component: defaultLayout,
    redirect: 'err404',
    children: [
      {
        path: 'err404',
        component: Err404,
        name: 'err404'
      },
      {
        path: 'err500',
        component: Err500,
        name: 'err500'
      }
    ]
  }
]

const router = new Router({
  routes: constantRouter
})

export default router
