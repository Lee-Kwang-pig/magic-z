import Vue from 'vue'
import Router from 'vue-router'

// 避免路由重复加载而导致报错
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const NotToFind = () => import('@/components/common/NotToFind404.vue')
// Home 区路由组件
const Home = () => import('@/views/home/Home.vue')

const JavaScript = () => import('@/views/home/JavaScript.vue')
const Animate = () => import('@/views/home/javascript/Animate.vue')
const Carousel = () => import('@/views/home/javascript/Carousel.vue')

const MyVue = () => import('@/views/home/Vue.vue')
const NavMenu = () => import('@/views/home/vue/NavMenu.vue')
const DropDown = () => import('@/views/home/vue/DropDown.vue')
const ElCarousel = () => import('@/views/home/vue/Carousel.vue')

// Code 区路由组件
const Code = () => import('@/views/code/Code.vue')
const Chome = () => import('@/views/code/Chome.vue')
const Cabout = () => import('@/views/code/Cabout.vue')
const MgDetail = () => import('@/views/code/MgDetail.vue')

Vue.use(Router)

const routes = [
  {
    // 一级路由 /home
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    redirect: '/home/js',
    children: [
      // 二级路由 /home/js
      {
        path: 'js',
        component: JavaScript,
        redirect: '/home/js/animate',
        meta: {
          title: 'JavaScript高阶内容'
        },
        children: [
          {
            path: 'animate',
            name: 'Animate',
            component: Animate,
            meta: {
              title: '动画'
            }
          },
          {
            path: 'carousel',
            name: 'Carousel',
            component: Carousel,
            meta: {
              title: '轮播图'
            }
          }
        ]
      },
      // 二级路由 /home/vue
      {
        path: 'vue',
        component: MyVue,
        redirect: '/home/vue/nav',
        children: [
          {
            path: 'nav',
            component: NavMenu
          },
          {
            path: 'dropdown',
            component: DropDown
          },
          {
            path: 'carousel',
            component: ElCarousel
          }
        ]
      }
    ]
  },
  {
    path: '/code',
    component: Code,
    children: [
      {
        path: 'chome',
        component: Chome,
        children: [
          {
            path: 'message/:id/:title',
            name: 'mg',
            component: MgDetail,
            // props 对象模式传值，该对象中的 key-value 会以props的形式传给组件 MgDtail
            // props: { age: 18, sex: 'male' }
            // props 对布尔模式传值，若为true，则会把params参数以props的形式传给组件 MgDtail
            // props: true,
            props: route => {
              const now = Date()
              return {
                time: now,
                id: route.params.id,
                title: route.params.title
              }
            }
          }
        ]
      },
      {
        path: 'cabout',
        component: Cabout
      }
    ]
  },
  {
    path: '*',
    component: NotToFind
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
