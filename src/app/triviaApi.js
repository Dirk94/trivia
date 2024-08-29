import { doGetRequest } from '@/app/axiosWrapper.js'

const TRIVIA_API_BASE_ENDPOINT = 'https://opentdb.com/api.php'

export const getQuestionsFromApi = async (difficulty, numberOfQuestionsToGet = 10) => {
  const data = await doGetRequest(TRIVIA_API_BASE_ENDPOINT, { difficulty, amount: numberOfQuestionsToGet })
  return data?.results
}
