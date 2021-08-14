import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 按需引入 element-ui 组件
import {
  Button, Carousel, CarouselItem,
  Dropdown, DropdownMenu, DropdownItem,
  Menu, Submenu, MenuItem, MenuItemGroup
} from 'element-ui'

// 应用 Element UI
// Vue.component('z-button', Button)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

// 关闭 Vue 的生产提示
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
