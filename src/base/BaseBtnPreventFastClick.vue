<script>
/**
 * * BaseBtnPreventFastClick
 */
export default {
  name: 'BaseBtnPreventFastClick',

  render(h) {
    return h(
      this.$attrs.tag,
      {
        on: {
          click: this.clickHandler
        }
      },
      this.$slots.default
    )
  },
  methods: {
    clickHandler(e) {
      if (!this.$_debouncedClickHandler) {
        this.$_debouncedClickHandler = this.$debounce(
          this.$listeners.click,
          300,
          true // 首次点击需要黑泽晃执行
        )
      }
      this.$_debouncedClickHandler(e)
    }
  }
}
</script>