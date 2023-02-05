import { useLocation } from 'react-router-dom'
import { GoogleSigninIcon } from '../../components/icons'
import { api } from '../../utils/var'
import { useEffect, useContext, useCallback } from 'react'
import { getMyInfo } from '../../utils'
import { UserCtx } from '../../context/UserCtx'
import { Helmet } from 'react-helmet-async'

export default function Login() {
  const location = useLocation()
  const connect = new URLSearchParams(location.search)?.get('connected')
  const { user, setUser } = useContext(UserCtx)

  const saveInfoToLocalStorage = useCallback(async () => {
    try {
      const data = await getMyInfo()
      setUser(data)
      window.location.href = '/'
    } catch (e) {
      console.log(e)
    }
  }, [setUser])

  useEffect(() => {
    if (connect === 'true') {
      saveInfoToLocalStorage()
    }
  }, [connect, saveInfoToLocalStorage])

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      window.location.href = '/'
    }
  }, [user])

  return (
    <div className='flex flex-col h-screen items-center justify-center'>
      <Helmet>
        <title>Login</title>
      </Helmet>
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
