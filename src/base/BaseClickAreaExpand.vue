<template>
  <div class="c-BaseClickAreaExpand">
    <slot></slot>
  </div>
</template>

<script>
/**
 * * BaseClickAreaExpand
 */
export default {
  name: 'BaseClickAreaExpand',
  render() {}
}
</script>

<style lang="scss" scoped>
.c-BaseClickAreaExpand {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: -1em;
    right: -1em;
    bottom: -1em;
    left: -1em;
  }
}
</style>