import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Main from './pages/Main/Main'
import NotFound from './pages/404/NotFound'
import Playlist from './pages/Playlist/Playlist'

export const AppRoutes = ({ isLoading }) => {
  return (
    <Routes>
      <Route path="/" element={<Main isLoading={isLoading} />} />
      <Route path="/signup" element={<Register />}></Route>
      <Route path="/signin" element={<Login />}></Route>
      <Route path="/playlist" element={<Playlist />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
