<script setup>
import { computed, ref } from 'vue'
import { useQuizStore } from '@/stores/quiz.js'
import CheckboxGroup from '@/components/CheckboxGroup/CheckboxGroup.vue'
import AppButton from '@/components/AppButton.vue'

const quizStore = useQuizStore()

const answer = ref('')

const onSubmitAnswer = () => {
  if (answer.value === quizStore.currentCorrectAnswer) {
    alert('Yes!')
  } else {
    alert('No!')
  }

  quizStore.currentQuestionIndex++
}
</script>
<template>
  <main>
    <!--
      v-html, an XSS vulnerability.
      We could also install a library to safely decode html encoded strings so that we don't need to use v-html.
      For now that's too much trouble and we are going to trust the Trivia API data.
    -->
    <p :class="[$style.intro]" v-html="quizStore.currentTitle" />

    <CheckboxGroup
      v-model="answer"
      :options="quizStore.currentAnswers
        .map(item => ({ value: item, label: item}))
        .sort((a, b) => a.label.localeCompare(b.label))"
    />

    <div :class="[$style.buttonContainer]">
      <AppButton @click="onSubmitAnswer">
        Submit Answer
      </AppButton>
    </div>
  </main>
</template>
<style module>
main {
  margin-top: 20px;
}

.intro {
  text-align: center;
  margin-bottom: 20px;
}

.buttonContainer {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
