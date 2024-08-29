<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useQuizStore } from '@/stores/quiz.js'

const quizStore = useQuizStore()

const dots = ref('')

// Simply cycle through the dots to create a loading spinner effect.
let interval = null
onMounted(() => {
  interval = setInterval(() => {
    dots.value += '.'
    if (dots.value.length > 3) {
      dots.value = ''
    }
  }, 250)
})
onUnmounted(() => {
  clearInterval(interval)
})
</script>
<template>
  <div v-if="quizStore.isLoading" :class="[$style.loadingOverlay]">
    Loading{{ dots }}
  </div>
</template>
<style module>
.loadingOverlay {
  transition: all var(--transition);
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgba(0,0,0,0.1);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text);
}
</style>
