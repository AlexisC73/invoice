import { useEffect, useState } from 'react'
import { ThemeCtx } from './context/ThemeCtx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [theme, setTheme] = useState('light')
  const handleStorageChange = () => {
    if (localStorage.getItem('theme') !== null) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }
  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      setTheme('light')
    }
    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

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

  return (
    <ThemeCtx.Provider value={defaultThemeCtx}>
      <div className='App bg-light-background dark:bg-dark-background'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ThemeCtx.Provider>
  )
}

export default App
