<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  href: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <component
    :is="href ? RouterLink : 'button'"
    :to="href"
    :class="$style.button"
  >
    <slot />
  </component>
</template>
<style module>
.button {
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: 30px;
  padding: 16px 25px 15px;
  font-size: 18px;
  transition: all var(--transition);
  border: none;
  text-decoration: none;
  display: inline-block;
}

.button:hover {
  cursor: pointer;
  background-color: var(--color-primary-dark);
  transform: rotate(-2deg);
}
</style>
