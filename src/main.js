// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

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
