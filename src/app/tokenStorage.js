import { getSessionTokenFromApi } from '@/app/triviaApi.js'

const KEY_SESSION_TOKEN = 'apiSessionToken'

export const getApiSessionTokenFromApiOrLocalStorage = async () => {
  let token = localStorage.getItem(KEY_SESSION_TOKEN)
  if (!token) {
    token = await getSessionTokenFromApi()
    localStorage.setItem(KEY_SESSION_TOKEN, token)
  }

  return token
}
