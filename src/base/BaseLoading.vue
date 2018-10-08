<template>
  <div class="c-Loading"
       :class="{'is-center':fixedAtCenter,'has-bg':hasBg}">
    <BaseLoadingSpinner :size="spinnerSize"></BaseLoadingSpinner>
    <slot>
      <div class="c-Loading-text"
           v-text="text">
      </div>
    </slot>
  </div>
</template>
<script>
import BaseLoadingSpinner from '@/base/BaseLoadingSpinner'

/**
 * @description 基础Loading
 */
export default {
  name: 'BaseLoading',
  props: {
    text: {
      type: String,
      default: '加载中...'
    },
    spinnerSize: {
      type: String,
      default: '26px'
    },
    fixedAtCenter: {
      type: Boolean,
      default: true
    },
    hasBg: {
      type: Boolean,
      default: true
    }
  },
  components: {
    BaseLoadingSpinner
  }
}
</script>
<style lang="scss" scoped>
.c-Loading {
  text-align: center;
  &.is-center {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  &.has-bg {
    @include bgAlpha(rgba(0, 0, 0, 0.8));
    border-radius: 0.2em;
    padding: 0.5em;
  }
}
.c-Loading-text {
  font-size: 0.8em;
  color: #fff;
  @extend %textWrap;
}
</style>

