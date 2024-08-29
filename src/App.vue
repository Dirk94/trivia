<script setup>
import { RouterView } from 'vue-router'
import AppLogo from '@/components/Logo.vue'
</script>
<template>
  <div :class="[$style.container]">
    <AppLogo />
    <RouterView />
  </div>
</template>
<style module>
.container {
  width: 750px;
  max-width: 100%;
  padding: 40px 20px;
  margin-right: auto;
  margin-left: auto;
  display: block;

  @media screen and (min-width: 1024px) {
    padding: 120px 0;
  }
}
</style>
