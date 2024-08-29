import { createRouter, createWebHistory } from 'vue-router'
import SelectDifficultyView from "@/views/SelectDifficultyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'selectDifficulty',
      component: SelectDifficultyView
    },
  ]
})

export default router
