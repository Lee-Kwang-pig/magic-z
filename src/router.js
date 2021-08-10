import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: ''
    // redirect: '/home/javascript/mc'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/Home.vue'),
    children: [
      {
        path: 'javascript',
        name: 'js',
        component: () => import('@/views/home/subjects/JavaScript.vue'),
        meta: {
          title: 'JavaScript高阶内容'
        },
        children: [
          {
            path: 'javascript/mc',
            name: 'mc',
            component: () => import('@/views/home/contents/javascript/MouseCoordinate.vue'),
            meta: {
              title: '计算鼠标的坐标'
            }
          },
          {
            path: 'javascript/mb',
            name: 'mb',
            component: () => import('@/views/home/contents/javascript/MoveBox.vue'),
            meta: {
              title: '拖动模态框'
            }
          }
        ]
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  // routes: [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  // }
// ]
})
