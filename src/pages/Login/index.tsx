import { useLocation } from 'react-router-dom'
import { GoogleSigninIcon } from '../../components/icons'
import { api } from '../../utils/var'
import { useEffect } from 'react'

export default function Login() {
  const location = useLocation()
  const connect = new URLSearchParams(location.search)?.get('connected')

  const getUser = () => {
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
        localStorage.setItem('user', JSON.stringify(data))
        window.location.href = '/'
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    if (localStorage.getItem('user') !== null) {
      window.location.href = '/'
    }
    if (connect === 'true') {
      getUser()
    }
  }, [connect])

  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <a
        href={api + '/user/auth/google'}
        target={'_parent'}
        className='flex items-center justify-center dark:bg[#4285F4] bg-white font-roboto font-bold border pr-3 pl-1 rounded-lg'
      >
        <GoogleSigninIcon />
        Signin with Google
      </a>
    </div>
  )
}
