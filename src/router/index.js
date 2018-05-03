import Vue from 'vue'
import Router from 'vue-router'
// import Home from 'components/home/home'
// import TestA from 'components/test-a/test-a.vue'
// import TestB from 'components/test-b/test-b.vue'

// 使用动态载入
const Home = (resolve) => {
  import ('components/home/home').then((module) => {
    resolve(module)
  })
};
const TestA = (resolve) => {
  import ('components/test-a/test-a').then((module) => {
    resolve(module)
  })
};
const TestB = (resolve) => {
  import ('components/test-b/test-b').then((module) => {
    resolve(module)
  })
};

Vue.use(Router)

const router = new Router({
  routes: [{
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
      component: Home,
      // 利用meta保存一些元信息，用来设置跳转后的title
      meta: {
        title: '首页'
      }
    }, {
      path: '/testa',
      name: 'TestA',
      component: TestA,
      meta: {
        title: 'testa'
      }
    }, {
      path: '/testb',
      name: 'TestB',
      component: TestB,
      meta: {
        title: 'testb'
      }
    }
  ]
});

// 注册全局守卫，路由到达前修改title
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
