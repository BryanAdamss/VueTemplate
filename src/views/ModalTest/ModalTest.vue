<template>
  <div class="c-ModalTest">
    <BaseModal ref="modal"></BaseModal>
    <button @click="onButtonClick">展示modal</button>
  </div>
</template>

<script>
/**
 * * ModalTest
 */

import BaseModal from '@/base/BaseModal'

export default {
  name: 'ModalTest',
  components: {
    BaseModal
  },
  methods: {
    onButtonClick() {
      this.$refs.modal.isCanVisible = !this.$refs.modal.isCanVisible
    }
  }
}
</script>

 