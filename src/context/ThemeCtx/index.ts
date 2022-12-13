import React from 'react'

export const ThemeCtx = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
})
