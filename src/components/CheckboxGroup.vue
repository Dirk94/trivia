<script setup>
import IconCheck from "@/components/icons/IconCheck.vue";

defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  options: {
    type: Array,
    default: () => ([])
  }
})
</script>
<template>
  <div>
    <div
      v-for="option of options"
      :key="option.value"
      :class="[$style.item]"
      @click="$emit('update:modelValue', option.value)"

      :data-test-selected="modelValue === option.value ? 'selected' : 'not-selected'"
      :data-test-value="option.value"
    >
      <div
          :class="[
              $style.checkbox,
              modelValue === option.value && $style.checkboxChecked
          ]"
      >
        <IconCheck :class="[$style.iconCheck]" v-if="modelValue === option.value" />
      </div>
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
