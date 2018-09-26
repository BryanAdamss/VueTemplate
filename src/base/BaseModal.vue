<template>
  <div class="c-BaseModal"
       :class="{'is-visible':isCanVisible}"
       @click.stop="onShadowClick"
       ref="modal">
    <div class="c-BaseModal-main">
      <slot>
        BaseModal
      </slot>
    </div>
  </div>
</template>

<script>
/**
 * * BaseModal
 */

export default {
  name: 'BaseModal',
  props: {
    emitShadowClickEvent: {
      type: Boolean,
      default: false
    },
    emitVisibleChangeEvent: {
      type: Boolean,
      default: false
    },
    shadowClickClose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isCanVisible: false
    }
  },
  created() {
    if (this.emitVisibleChangeEvent) {
      // * 手动添加观测
      let unwatch = this.$watch('isCanVisible', (newVal, oldVal) => {
        this.$emit('onVisibleChange', newVal, oldVal)
      })
      // * 销毁时，取消观测
      this.$once('hook:beforeDestroy', () => {
        unwatch()
      })
    }
  },
  methods: {
    open() {
      this.isCanVisible = true
    },
    close() {
      this.isCanVisible = false
    },
    onShadowClick(e) {
      const modal = this.$refs.modal
      const target = e.target
      if (modal !== target || !this.emitShadowClickEvent) {
        return
      }

      if (this.shadowClickClose) {
        this.close()
      }

      this.$emit('onShadowClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.c-BaseModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @include bgAlpha();
  // * 屏蔽事件
  pointer-events: none;
  opacity: 0;
  transform: scale(1.15);
  // * 设置关闭时的过渡(根据google的用户体验原则，关闭要迅速，要快于开启)
  transition: transform 0.1s cubic-bezier(0.465, 0.183, 0.153, 0.946),
    opacity 0.1s cubic-bezier(0.465, 0.183, 0.153, 0.946);
  // * 开启加速
  will-change: transform, opacity;
  &.is-visible {
    pointer-events: auto;
    opacity: 1;

    transform: scale(1);
    transition: transform 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946),
      opacity 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946);
  }
  &-main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>