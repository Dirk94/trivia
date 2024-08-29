import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const DIFFICULTY_EASY = 'easy'
export const DIFFICULTY_MEDIUM = 'medium'
export const DIFFICULTY_HARD = 'hard'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    difficulty: DIFFICULTY_EASY,
  })
})
