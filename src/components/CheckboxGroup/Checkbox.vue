<script setup>
import IconCheck from '@/components/Icons/IconCheck.vue'

defineProps({
  checked: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div
    :class="[
      $style.checkbox,
      checked && $style.checkboxChecked
    ]"
  >
    <IconCheck
      v-if="checked"
      :class="[$style.iconCheck]"
    />
  </div>
</template>
<style module>
.checkbox {
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-text);
  background: var(--color-white);
  margin-right: 16px;
  display: flex; justify-content: center;
  align-items: center;
}

.checkboxChecked {
  background: var(--color-input-active);
  border-color: var(--color-input-active);
}

.iconCheck {
  color: white;
  width: 100%;
  height: 100%;
}
</style>
