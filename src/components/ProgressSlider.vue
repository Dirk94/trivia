<script setup>
defineProps({
  progress: {
    type: Number,
    default: 50
  }
})
</script>
<template>
  <div :class="[$style.slider]">
    <div :class="[$style.progress]" :style="`width: ${Math.max(2, progress)}%`" />
  </div>
</template>
<style module>
.slider {
  width: 100%;
  background-color: var(--color-gray-200);
  border-radius: 20px;
  height: 8px;
}

.progress {
  height: 8px;
  background-color: var(--color-primary);
  border-radius: 20px;
  transition: all var(--transition);
}
</style>
