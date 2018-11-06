/**
 * * mutations.js用来定义全局的mutations
 */

import * as types from './mutation-types'

const mutations = {
  [types.SET_TEST_OBJ](states, testObj) {
    states.testObj = testObj
  }
}

export default mutations
