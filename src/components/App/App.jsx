import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { StyledApp } from './styles'
import { AppRoutes } from '../../routes'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

}
`
function App() {
  const [isLoading, setLoading] = React.useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 5000)
  return (
    <StyledApp>
      <GlobalStyle />
      <AppRoutes isLoading={isLoading} />
    </StyledApp>
  )
}

export default App
