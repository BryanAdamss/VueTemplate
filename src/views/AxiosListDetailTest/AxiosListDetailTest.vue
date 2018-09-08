<template>
  <div class="c-AxiosListDetailTest">
    从AxiosTest传递过来的id为{{id}}
  </div>
</template>

<script>
/**
 * * AxiosListDetailTest
 */
export default {
  name: 'AxiosListDetailTest',
  props: {
    // * 这个id将会在AxiosTest通过动态参数($route.params)带过来
    id: {
      type: [Number, String],
      default: '--'
    }
  }
}
</script>

 