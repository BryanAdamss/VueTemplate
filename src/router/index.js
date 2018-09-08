import Vue from 'vue'
import Router from 'vue-router'

import { STATUS_OK } from '@/api/config'

// * 同步导入（可优化成下面的动态导入）
// import Home from 'views/home/home'
// import UserCenter from 'views/UserCenter/UserCenter'

// * 使用动态载入
const Home = resolve => {
  import('views/home/home').then(module => {
    resolve(module)
  })
}

const HomeChild1 = resolve => {
  import('views/Home/HomeChild1').then(module => {
    resolve(module)
  })
}

const HomeChild2 = resolve => {
  import('views/Home/HomeChild2').then(module => {
    resolve(module)
  })
}

const UserCenter = resolve => {
  import('views/UserCenter/UserCenter').then(module => {
    resolve(module)
  })
}

const Login = resolve => {
  import('views/Login/Login').then(module => {
    resolve(module)
  })
}

const VuexTest = resolve => {
  import('views/VuexTest/VuexTest').then(module => {
    resolve(module)
  })
}

const ClickOutSideTest = resolve => {
  import('views/ClickOutSideTest/ClickOutSideTest').then(module => {
    resolve(module)
  })
}

const ImgLazyLoadTest = resolve => {
  import('views/ImgLazyLoadTest/ImgLazyLoadTest').then(module => {
    resolve(module)
  })
}

Vue.use(Router)

const router = new Router({
  routes: [
    {
      // * 所有未匹配到的路由，重定向到Index路由上
      path: '*',
      redirect: {
        name: 'Index'
      }
    },
    {
      path: '/',
      // * 每个路由需要取名，采用帕斯卡风格
      name: 'Index',
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // * 利用meta保存一些元信息，用来设置跳转后的title
      meta: {
        title: '首页'
      },
      children: [
        {
          path: 'child1',
          name: 'HomeChild1',
          component: HomeChild1,
          meta: {
            title: '首页-child1'
          }
        },
        {
          path: 'child2',
          name: 'HomeChild2',
          component: HomeChild2,
          meta: {
            title: '首页-child2'
          }
        }
      ]
    },
    {
      path: '/user-center',
      name: 'UserCenter',
      component: UserCenter,
      meta: {
        title: '个人中心',
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登陆'
      }
    },
    {
      path: '/vuex-test',
      name: 'VuexTest',
      component: VuexTest,
      meta: {
        title: '测试Vuex'
      }
    },
    {
      path: '/click-outside-test',
      name: 'ClickOutSideTest',
      component: ClickOutSideTest,
      meta: {
        title: '测试自定义指令clickOutside'
      }
    },
    {
      path: '/img-lazy-load-test',
      name: 'ImgLazyLoadTest',
      component: ImgLazyLoadTest,
      meta: {
        title: '测试ImgLazyLoadTest'
      }
    }
  ]
})

// * 注册全局守卫
router.beforeEach((to, from, next) => {
  // * 路由到达前修改title
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }

  if (to.matched.some(record => record.meta.requiresAuth)) {
    const LOGGED = sessionStorage.getItem('__auth__logged')
    if (!LOGGED || parseInt(LOGGED) !== STATUS_OK) {
      next({
        name: 'Login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
