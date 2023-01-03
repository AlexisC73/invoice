import { useEffect, useState } from 'react'
import { ThemeCtx } from './context/ThemeCtx'
import { UserCtx } from './context/UserCtx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Invoice from './pages/invoice'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'

function App() {
  const [theme, setTheme] = useState('light')
  const [user, setUser] = useState({})
  const [storageLoaded, setStorageLoaded] = useState(false)

  const handleStorageChange = (e: StorageEvent) => {
    if (localStorage.getItem('theme') !== null) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === null) {
      setTheme('light')
    } else {
      setTheme(theme)
      document.documentElement.classList.add(theme)
    }
    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  useEffect(() => {
    if (!storageLoaded) {
      const user = localStorage.getItem('user')
      if (user !== null) {
        setUser(JSON.parse(user))
      } else {
        setUser({})
      }
      setStorageLoaded(true)
    }
  }, [storageLoaded])

  const switchTheme = () => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      localStorage.removeItem('theme')
      window.dispatchEvent(new Event('storage'))
    } else {
      localStorage.setItem('theme', 'dark')
      window.dispatchEvent(new Event('storage'))
    }
  }

  const defaultThemeCtx = {
    theme,
    toggleTheme: switchTheme,
  }

  if (storageLoaded === false) return <div>Loading...</div>

  return (
    <ThemeCtx.Provider value={defaultThemeCtx}>
      <UserCtx.Provider value={{ user, setUser }}>
        <div className='App bg-light-background dark:bg-dark-background'>
          <Router>
            <Routes>
              <Route
                path='/'
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path='invoice/:id'
                element={
                  <ProtectedRoute>
                    <Invoice />
                  </ProtectedRoute>
                }
              />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Router>
        </div>
      </UserCtx.Provider>
    </ThemeCtx.Provider>
  )
}

export default App
