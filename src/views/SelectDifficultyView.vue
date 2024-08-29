<script setup>
import CheckboxGroup from '@/components/CheckboxGroup/CheckboxGroup.vue'
import { DIFFICULTY_EASY, DIFFICULTY_HARD, DIFFICULTY_MEDIUM, useQuizStore } from '@/stores/quiz.js'
import AppButton from '@/components/AppButton.vue'

const quizStore = useQuizStore()

</script>
<template>
  <main>
    <p :class="[$style.intro]">
      Select your difficulty
    </p>

    <CheckboxGroup
      v-model="quizStore.difficulty"
      :options="[
        { value: DIFFICULTY_EASY, label: 'Easy 💁🏻‍♂️' },
        { value: DIFFICULTY_MEDIUM, label: 'Medium 😎' },
        { value: DIFFICULTY_HARD, label: 'Hard 😵' },
      ]"
    />

    <div :class="[$style.buttonContainer]">
      <AppButton @click="quizStore.startNewQuiz()">
        Start Quiz
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
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
