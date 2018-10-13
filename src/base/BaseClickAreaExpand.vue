<script>
/**
 * * BaseClickAreaExpand
 */
export default {
  name: 'BaseClickAreaExpand',
  render(h) {
    return h(
      this.$attrs.tag,
      {
        class: 'c-BaseClickAreaExpand'
      },
      [this.$slots.default]
    )
  }
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