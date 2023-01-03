import { api } from './var'

export const getMyInfo = async () => {
  return new Promise((resolve, reject) => {
    fetch(api + '/user/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else throw new Error('Problem with connection')
      })
      .then((data) => {
        resolve(data)
      })
      .catch((error) => reject(error))
  })
}

export const verifyLocalStorage = async () => {
  try {
    return await getMyInfo()
  } catch (error) {
    throw error
  }
}
