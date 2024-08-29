import { defineStore } from 'pinia'
import { getQuestionsFromApi } from '@/app/triviaApi.js'
import router from '@/router/index.js'
import { spawnFullPageConfetti } from '@/app/confetti.js'
import { getApiSessionTokenFromApiOrLocalStorage } from '@/app/tokenStorage.js'

export const DIFFICULTY_EASY = 'easy'
export const DIFFICULTY_MEDIUM = 'medium'
export const DIFFICULTY_HARD = 'hard'

export const STATE_ANSWERING_QUESTION = 'answering-question'
export const STATE_CORRECT_ANSWER = 'correct-answer'
export const STATE_WRONG_ANSWER = 'wrong-answer'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    isLoading: false,
    difficulty: DIFFICULTY_EASY,
    questions: [],
    currentQuestionIndex: 0,
    quizState: STATE_ANSWERING_QUESTION
  }),

  actions: {
    async startNewQuiz () {
      const sessionToken = await getApiSessionTokenFromApiOrLocalStorage()
      this.questions = await getQuestionsFromApi(this.difficulty, sessionToken)
      this.currentQuestionIndex = 0
      await router.push('/play')
    },

    submitAnswer (answer) {
      const isCorrectAnswer = answer === this.currentCorrectAnswer
      if (isCorrectAnswer) {
        spawnFullPageConfetti()
      }

      this.quizState = isCorrectAnswer ? STATE_CORRECT_ANSWER : STATE_WRONG_ANSWER
    },

    async gotoNextQuestion () {
      this.quizState = STATE_ANSWERING_QUESTION

      this.currentQuestionIndex++

      if (this.currentQuestionIndex >= this.questions.length) {
        alert('You finished the quiz!')
        await router.push('/')
      }
    }
  },

  getters: {
    currentQuestion (state) { return state.questions[state.currentQuestionIndex] ?? null },
    currentTitle (state) { return this.currentQuestion?.question },
    currentAnswers (state) {
      if (!this.currentQuestion) { return [] }
      return [
        this.currentQuestion.correct_answer,
        ...this.currentQuestion.incorrect_answers
      ]
    },
    currentCorrectAnswer (state) {
      return this.currentQuestion?.correct_answer
    },
    progress (state) {
      return state.currentQuestionIndex / state.questions?.length * 100
    }
  }
})
