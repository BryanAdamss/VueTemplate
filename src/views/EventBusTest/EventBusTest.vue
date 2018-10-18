<template>
  <div class="c-EventBusTest">
    parent
    <div class="c-Parent">
      <EventBusSon1 class="c-Son"></EventBusSon1>
      <EventBusSon2 class="c-Son"></EventBusSon2>
    </div>
  </div>
</template>

<script>
/**
 * * EventBusTest
 */

import EventBusSon1 from './EventBusSon1'
import EventBusSon2 from './EventBusSon2'

export default {
  name: 'EventBusTest',
  components: {
    EventBusSon1,
    EventBusSon2
  }
}
</script>

<style lang="scss" scoped>
.c-EventBusTest {
  background-color: #ddd;
  padding: 10px;
}
.c-Parent {
  display: flex;
  justify-content: space-between;
}

.c-Son {
  flex: 1 1 auto;
  border: 1px solid #333;
  padding: 10px;
  & + & {
    margin-left: 10px;
  }
}
</style>