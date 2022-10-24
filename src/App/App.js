import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Main from '../Main/Main'
import './App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/signin" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
