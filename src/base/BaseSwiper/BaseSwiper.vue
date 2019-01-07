<template>
  <div
    v-show="isReady"
    class="c-BaseSwiper"
  >
    <div
      ref="wp"
      class="c-BaseSwiper-wp"
      @touchstart.capture="$_onTouchstartHandler"
    >

      <BaseSwiperSlide
        v-for="slide in activeSlides"
        :key="slide.id"
        :style="{width:`${elW}px`}"
      >
        <slot :slide="slide" />
      </BaseSwiperSlide>

    </div>
  </div>
</template>

<script>
/**
 * * Swiper
 * * @author ghchu
 * * @description 通用swiper组件
 */

import BaseSwiperSlide from './BaseSwiperSlide'

export default {
  name: 'Swiper',
  components: {
    BaseSwiperSlide
  },
  props: {
    slides: {
      type: Array,
      required: true
    },
    prerenderSlideNum: {
      type: Number,
      default: 2
    },
    width: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      cur: 0,
      elW: 0,
      isReady: false
    }
  },
  computed: {
    activeSlides() {
      const start = Math.max(this.cur - this.prerenderSlideNum, 0)
      const end = Math.min(
        this.cur + this.prerenderSlideNum + 1,
        this.slides.length
      )
      return this.slides.slice(start, end)
    }
  },
  beforeCreate() {
    this.$once('hook:mounted', () => {
      this.$nextTick(() => {
        this.isReady = true
        this.elW = this.width ? this.width : this.$el.parentNode.offsetWidth
        this.$refs.wp.style.width = `${this.elW * this.slides.length}px`
      })
    })

    this.transformPosX = 0
    this.lastTransformPosX = 0

    this.threshold = 40
  },
  methods: {
    $_onTouchstartHandler(e) {
      const that = this
      const touch = e.changedTouches[0]
      const { pageX: firstPageX, pageY: firstPageY } = touch
      const target = e.currentTarget

      let direction = -1 // 方向 1横向 0竖向 -1为默认值

      function onTouchmoveHandler(e) {
        const touch = e.changedTouches[0]
        const { pageX: movePageX, pageY: movePageY } = touch

        if (direction === -1) {
          direction =
            Math.abs(movePageX - firstPageX) > Math.abs(movePageY - firstPageY)
              ? 1
              : 0
        }
        // eslint-disable-next-line
        if (direction === 0) return // 忽略竖向

        const offset = movePageX - firstPageX
        // that.lastTransformPosX = that.transformPosX

        that.transformPosX = that.lastTransformPosX + offset

        window.requestAnimationFrame(step)

        console.log('------', movePageX)
      }

      function removeAllHandler() {
        target.removeEventListener('touchmove', onTouchmoveHandler)
        target.removeEventListener('touchend', onTouchendHandler)
        target.removeEventListener('touchcancel', onTouchcancelHandler)
      }

      function onTouchendHandler(e) {
        const touch = e.changedTouches[0]
        const { pageX: lastPageX } = touch
        const offset = lastPageX - firstPageX

        removeAllHandler()
      }

      function onTouchcancelHandler(e) {
        removeAllHandler()
      }

      function step() {
        target.style.transform = `translateX(${that.transformPosX}px)`
      }

      function moveAnimation(moveStart, moveEnd) {
        const moveDirect = moveStart - moveEnd > 0 ? -1 : 1
        window.requestAnimationFrame(stepAnim)
        function stepAnim() {
          if (moveDirect > 0) {
            // * start +++ -> end
            moveStart = moveStart + moveStart / 8
            if (moveStart < moveEnd) {
              window.requestAnimationFrame(stepAnim)
            }
          } else {
            moveStart = moveStart - moveStart / 8
            // * start --- -> end
            if (moveStart > moveEnd) {
              window.requestAnimationFrame(stepAnim)
            }
          }

          target.style.transform = `translateX(${moveStart}px)`

          if (moveStart !== moveEnd) {
            window.requestAnimationFrame(stepAnim)
          }
        }
      }

      target.addEventListener('touchmove', onTouchmoveHandler)
      target.addEventListener('touchend', onTouchendHandler)
      target.addEventListener('touchcancel', onTouchcancelHandler)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-BaseSwiper {
  position: relative;
  overflow: hidden;
  &-wp {
    overflow: hidden;
    height: 100%;
    @include clearfix();
    will-change: transform;
  }
}
</style>
