<template>
  <div class="c-BaseModal"
       :class="{'is-visible':isCanVisible}"
       @click="isCanVisible=false">
    <slot>
      <div class="c-BaseModal-main">aaa</div>
    </slot>
  </div>
</template>

<script>
/**
 * * BaseModal
 */
export default {
  name: 'BaseModal',
  data() {
    return {
      isCanVisible: false
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
  pointer-events: none;
  opacity: 0;

  transform: scale(1.15);
  transition: transform 0.1s cubic-bezier(0.465, 0.183, 0.153, 0.946),
    opacity 0.1s cubic-bezier(0.465, 0.183, 0.153, 0.946);
  will-change: transform, opacity;
  &.is-visible {
    pointer-events: auto;
    opacity: 1;

    transform: scale(1);
    transition: transform 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946),
      opacity 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946);
  }
  &-main {
    width: 200px;
    height: 200px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>