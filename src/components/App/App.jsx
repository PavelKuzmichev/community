import { React, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { StyledApp } from './styles'
import { AppRoutes } from '../../routes'
import { ThemeContext, themes } from '../../contexts/CurrentThemeContext.js'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
a{
  textDecoration: none;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
 
}
`

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark)

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light)
      return
    }

    setCurrentTheme(themes.dark)
  }
  const [isLoading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 5000)
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <StyledApp $IsTheme={currentTheme}>
        <GlobalStyle/>
        <AppRoutes isLoading={isLoading}/>
      </StyledApp>
    </ThemeContext.Provider>
  )
}

export default App
