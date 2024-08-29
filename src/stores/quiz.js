import { defineStore } from 'pinia'
import { getQuestionsFromApi } from '@/app/triviaApi.js'

export const DIFFICULTY_EASY = 'easy'
export const DIFFICULTY_MEDIUM = 'medium'
export const DIFFICULTY_HARD = 'hard'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    isLoading: false,
    difficulty: DIFFICULTY_EASY,
    questions: [{ type: 'multiple', difficulty: 'medium', category: 'Entertainment: Video Games', question: 'Which game is NOT part of the Science Adventure series by 5pb. and Nitroplus?', correct_answer: 'Occultic; Nine', incorrect_answers: ['Steins; Gate', 'Robotics; Notes', 'Chaos; Child'] }, { type: 'multiple', difficulty: 'medium', category: 'Entertainment: Music', question: 'What was David Bowie&#039;s real surname?', correct_answer: 'Jones', incorrect_answers: ['Johnson', 'Edwards', 'Carter'] }, { type: 'multiple', difficulty: 'medium', category: 'Entertainment: Video Games', question: 'Which town was Seamus &quot;Sledge&quot; Cowden from &quot;Tom Clancy&#039;s Rainbow Six Siege&quot; born in?', correct_answer: 'John O&#039;Groats', incorrect_answers: ['Brawl', 'Kearvaig', 'Talmine'] }, { type: 'multiple', difficulty: 'medium', category: 'Entertainment: Comics', question: 'Which &quot;Green Arrow&quot; sidekick commonly wears a baseball cap?', correct_answer: 'Roy Harper', incorrect_answers: ['Black Canary', 'Emiko Queen', 'Dick Grayson'] }, { type: 'boolean', difficulty: 'medium', category: 'History', question: 'The two atomic bombs dropped on Japan by the United States in August 1945 were named &#039;Little Man&#039; and &#039;Fat Boy&#039;.', correct_answer: 'False', incorrect_answers: ['True'] }, { type: 'multiple', difficulty: 'medium', category: 'Entertainment: Music', question: 'What French artist/band is known for playing on the midi instrument &quot;Launchpad&quot;?', correct_answer: 'Madeon', incorrect_answers: ['Daft Punk ', 'Disclosure', 'David Guetta'] }, { type: 'boolean', difficulty: 'medium', category: 'Entertainment: Video Games', question: 'In Portal, the Companion Cube&#039;s ARE sentient.', correct_answer: 'True', incorrect_answers: ['False'] }, { type: 'multiple', difficulty: 'medium', category: 'Entertainment: Video Games', question: 'Which puzzle game was designed by a Russian programmer, featuring Russian buildings and music?', correct_answer: 'Tetris', incorrect_answers: ['Jenga', 'Boulder Dash', 'Puzzled'] }, { type: 'multiple', difficulty: 'medium', category: 'Entertainment: Japanese Anime &amp; Manga', question: 'In the ADV (English) Dub of the anime &quot;Ghost Stories&quot;, which character is portrayed as a Pentacostal Christian?', correct_answer: 'Momoko Koigakubo', incorrect_answers: ['Hajime Aoyama', 'Satsuki Miyanoshita', 'Mio Itai'] }, { type: 'multiple', difficulty: 'medium', category: 'History', question: 'Which king was killed at the Battle of Bosworth Field in 1485? ', correct_answer: 'Richard III', incorrect_answers: ['Edward V', 'Henry VII', 'James I'] }],
    currentQuestionIndex: 0
  }),
  actions: {
    async loadQuestionsForNewQuiz () {
      this.questions = await getQuestionsFromApi(this.difficulty)
      this.currentQuestionindex = 0
    }
  },
  getters: {
    currentQuestion (state) { return state.questions[state.currentQuestionIndex] ?? null },
    currentTitle (state) { return this.currentQuestion?.question },
    currentAnswers (state) {
      if (!this.currentQuestion) { return [] }

      // Because of this implementation the right answer is always the first item in the array.
      return [
        this.currentQuestion.correct_answer,
        ...this.currentQuestion.incorrect_answers
      ]
    },
    currentCorrectAnswer (state) {
      return this.currentQuestion?.correct_answer
    }
  }
})
