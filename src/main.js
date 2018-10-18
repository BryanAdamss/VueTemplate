// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import App from './App'
import store from './store'
import router from './router'

import BaseToast from '@/base/BaseToast/BaseToast'

import axios from '@/common/js/axios'
import { debounce, throttle } from '@/common/js/utils'

Vue.use({
  install: Vue => {
    // * 绑定去抖及节流函数到Vue原型上，方便直接调用
    Vue.prototype.$debounce = debounce
    Vue.prototype.$throttle = throttle
    // * 绑定axios到Vue原型上，方便使用this.$http来调用接口
    Vue.prototype.$http = axios
    // * 绑定toast到Vue原型上，方便使用this.$toast来调用
    Vue.prototype.$toast = BaseToast
    // * 绑定bus到Vue原型上，方便使用this.$bus来调用
    Vue.prototype.$bus = new Vue()
  }
})

// * 开发环境启用vconsole
if (process.env.NODE_ENV === 'development') {
  /* eslint-disable no-unused-vars */
  var VConsole = require('vconsole')
  // 使用vconsole来调试
  var vConsole = new VConsole()
}

Vue.config.productionTip = false

// 在body上绑定fastclick
fastclick.attach(document.body)

// 注册lazyload并配置默认图
Vue.use(VueLazyload, {
  loading: require('common/img/loading.gif')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
