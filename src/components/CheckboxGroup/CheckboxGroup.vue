<script setup>
import IconCheck from '@/components/Icons/IconCheck.vue'
import Checkbox from '@/components/CheckboxGroup/Checkbox.vue'

defineProps({
  modelValue: {
    type: String,
    default: null
  },
  options: {
    type: Array,
    default: () => ([])
  }
})

defineEmits(['update:modelValue'])
</script>
<template>
  <div>
    <div
      v-for="option of options"
      :key="option.value"
      :class="[$style.item]"
      :data-test-selected="modelValue === option.value ? 'selected' : 'not-selected'"

      :data-test-value="option.value"
      @click="$emit('update:modelValue', option.value)"
    >
      <Checkbox :checked="modelValue === option.value" />
      {{ option.label }}
    </div>
  </div>
</template>
<style module>
.item {
  width: 100%;
  padding: 40px 32px;
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: var(--color-gray-200);
  border: 1px solid var(--color-gray-400);
  border-radius: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  transition: all var(--transition);
}
.item:hover {
  cursor: pointer;
  transform: translateY(-3px);
  box-shadow: 0 2px 10px var(--color-box-shadow);
  border: 1px solid var(--color-gray-400);

}
</style>
