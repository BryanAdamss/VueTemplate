import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import TestA from 'components/test-a/test-a.vue'
import TestB from 'components/test-b/test-b.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 所有未匹配到的路由，重定向到Index路由上
      path: '*',
      redirect: {
        name: 'Index'
      }
    },
    {
      path: '/',
      // 每个路由需要取名，采用帕斯卡风格
      name: 'Index',
      redirect: {
        name: 'Home'
      }
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/testa',
      name: 'TestA',
      component: TestA
    }, {
      path: '/testb',
      name: 'TestB',
      component: TestB
    }
  ]
})
