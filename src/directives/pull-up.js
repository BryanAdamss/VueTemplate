import { eventListenerPassiveSupported, throttle } from 'Common/js/utils'

import Vue from 'vue'
import BaseLoadingSpinner from 'Base/BaseLoadingSpinner'

const ExtendLoading = Vue.extend({
  template:
    '<div style="text-align:center;font-size:20px;"><BaseLoadingSpinner/></div>',
  components: {
    BaseLoadingSpinner
  }
})
const MyLoading = new ExtendLoading().$mount()

export default {
  bind(el, binding, vnode, oldVnode) {
    const OFFSET = 50
    let lastScrollTop = 0
    let isInPullup = false

    const pullupEnd = ({ noMoreData } = { noMoreData: false }) => {
      isInPullup = false
      console.log('noMoreData', noMoreData)
      if (noMoreData) {
        MyLoading.$el.innerHTML = '暂无更多数据!'
      } else {
        MyLoading.$el.style.display = 'none'
      }
    }

    const pullUpScrollHandler = e => {
      const scrollTop = el.scrollTop
      const scrollH = el.scrollHeight
      const clientH = el.clientHeight

      if (isInPullup || scrollTop < lastScrollTop) {
        console.log('isInPullup or small')
        return
      }

      if (scrollTop + clientH >= scrollH - OFFSET) {
        isInPullup = true
        lastScrollTop = scrollTop

        if (el.contains(MyLoading.$el)) {
          el.insertBefore(MyLoading.$el, el.lastChild)
          MyLoading.$el.style.display = 'block'
        } else {
          el.appendChild(MyLoading.$el)
        }
        binding.value(pullupEnd)

        console.log('bottom')
      }
    }

    el.__pull_up_scroll_handler__ = throttle(pullUpScrollHandler, 300)

    el.addEventListener(
      'scroll',
      el.__pull_up_scroll_handler__,
      eventListenerPassiveSupported ? { passive: true } : false
    )
  },
  inserted(el, binding) {},
  update() {},
  componentUpdated() {},
  unbind(el) {
    el.removeEventListener('scroll', el.__pull_up_scroll_handler__)
  }
}
