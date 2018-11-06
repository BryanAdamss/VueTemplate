/**
 * * 模块b（包含模块b独享的一些state、getter、mutation、action）
 */

export default {
  namespaced: true,
  state: {
    testName: '我是moduleB'
  },
  getters: {
    getTestName(state) {
      return state.testName
    }
  },
  mutations: {
    SET_TEST_NAME(state, payload) {
      state.testName = payload.testName
    }
  },
  actions: {
    getNameFromAsync(
      { state, rootState, getters, rootGetters, commit, dispatch },
      payload
    ) {
      setTimeout(() => {
        commit(mutations.SET_TEST_NAME)
      }, 1000)
    }
  }
}
