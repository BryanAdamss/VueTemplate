/**
 * * 注册模块入口页
 */

import Store from 'Store'

import moduleA from './module-a'
import moduleB from './module-b'

const MODULE_NAME = 'VuexTest'

const MODULE_NAME_ARR = MODULE_NAME.split('/').filter(item => !!item)

export function install() {
  Store.registerModule(MODULE_NAME_ARR, {
    namespaced: true,
    modules: {
      moduleA,
      moduleB
    }
  })
}

export function uninstall() {
  Store.unregisterModule(MODULE_NAME)
}

export default {
  install,
  uninstall
}
