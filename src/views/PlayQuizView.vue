<script setup>
import { onMounted, ref } from 'vue'
import { STATE_ANSWERING_QUESTION, STATE_WRONG_ANSWER, useQuizStore } from '@/stores/quiz.js'
import CheckboxGroup from '@/components/CheckboxGroup/CheckboxGroup.vue'
import AppButton from '@/components/AppButton.vue'
import ProgressSlider from '@/components/ProgressSlider.vue'
import router from '@/router/index.js'

const quizStore = useQuizStore()

const answer = ref('')

onMounted(() => {
  // If something went wrong with loading the questions, redirect the user back to the start screen
  if (quizStore.questions?.length <= 0) {
    router.push('/')
  }
})
</script>
<template>
  <main>
    <div :class="[$style.progress]">
      <p>Question {{ quizStore.currentQuestionIndex + 1 }} of {{ quizStore.questions?.length }}</p>
      <ProgressSlider :progress="quizStore.progress" />
    </div>

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
      <AppButton v-if="quizStore.quizState === STATE_ANSWERING_QUESTION" @click="quizStore.submitAnswer(answer)">
        Submit Answer
      </AppButton>
      <div v-else>
        <div v-if="quizStore.quizState === STATE_WRONG_ANSWER" :class="[$style.wrongAnswer]">
          Wrong answer!🙅🏻‍♂️
        </div>
        <div v-else :class="[$style.rightAnswer]">
          Right answer!🤩
        </div>

        <div :class="[$style.buttonContainer]">
          <AppButton @click="quizStore.gotoNextQuestion()">
            Continue
          </AppButton>
        </div>
      </div>
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

.progress {
  margin-top: 32px;
  margin-bottom: 40px;
}
.progress p {
  font-size: 14px;
  margin-bottom: 4px;
  text-align: center;
  opacity: 0.8;
}

.wrongAnswer {
  color: var(--color-danger);
  font-size: 20px;
  font-weight: bold;
}
.rightAnswer {
  color: var(--color-success);
  font-size: 20px;
  font-weight: bold;
}
</style>
