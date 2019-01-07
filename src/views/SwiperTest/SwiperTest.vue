<template>
  <BaswSwiper :slides="items">
    <div slot-scope="slotProps">{{ slotProps.text }}</div>
  </BaswSwiper>
</template>

<script>
/**
 * * SwiperTest
 */

import BaswSwiper from 'Base/BaseSwiper/BaseSwiper'

export default {
  name: 'SwiperTest',
  components: {
    BaswSwiper
  },
  data() {
    return {
      items: [
        { id: 1, text: 'test1' },
        { id: 2, text: 'test2' },
        { id: 3, text: 'test3' },
        { id: 4, text: 'test4' },
        { id: 5, text: 'test5' },
        { id: 6, text: 'test6' },
        { id: 7, text: 'test1' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.c-SwiperTest {
}
</style>
