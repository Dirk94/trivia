import { createRouter, createWebHistory } from 'vue-router'
import SelectDifficultyView from '@/views/SelectDifficultyView.vue'
import PlayQuizView from '@/views/PlayQuizView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'selectDifficulty',
      component: SelectDifficultyView
    },
    {
      path: '/play',
      name: 'playQuiz',
      component: PlayQuizView
    }
  ]
})

export default router
