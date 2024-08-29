import { doGetRequest } from '@/app/axiosWrapper.js'

const TRIVIA_API_BASE_ENDPOINT = 'https://opentdb.com'

export const getQuestionsFromApi = async (difficulty, apiSessionToken, numberOfQuestionsToGet = 10) => {
  const data = await doGetRequest(`${TRIVIA_API_BASE_ENDPOINT}/api.php`, {
    difficulty,
    token: apiSessionToken,
    amount: numberOfQuestionsToGet
  })
  return data?.results
}

export const getSessionTokenFromApi = async () => {
  const data = await doGetRequest(`${TRIVIA_API_BASE_ENDPOINT}/api_token.php`, { command: 'request' })
  return data?.token
}
