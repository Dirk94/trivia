<template>
  <button :class="$style.button">
    <slot />
  </button>
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
