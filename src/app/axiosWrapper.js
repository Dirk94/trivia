import axios from 'axios'
import { useQuizStore } from '@/stores/quiz.js'

// Wrap the Axios "get" function with some boilerplate for:
// - a loading state
// - a generic error catcher
export const doGetRequest = async (url, params = {}, quizStore = useQuizStore()) => {
  try {
    quizStore.isLoading = true
    const response = await axios.get(url, { params })
    return response?.data
  } catch (ex) {
    alert(`Something went wrong: ${ex.message}`)
  } finally {
    quizStore.isLoading = false
  }
}
