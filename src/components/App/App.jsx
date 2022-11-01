import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { StyledApp } from './styles'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Main from '../Main/Main'

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
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Main isLoading={isLoading} />}
          ></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/signin" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </StyledApp>
  )
}

export default App
