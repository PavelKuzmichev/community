import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Main from './pages/Main/Main'
import NotFound from './pages/404/NotFound'
import Playlist from './pages/Playlist/Playlist'
import { ProtectedRoute } from './components/protected-route/protected-route'

export const AppRoutes = ({ isLoading }) => {
  const [user, setUser] = React.useState(true)
  const toggleUser = () => {
    setUser(!user)
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute isAllowed={user}>
            <Main isLoading={isLoading} />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/playlist"
        element={
          <ProtectedRoute isAllowed={user}>
            <Playlist />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="/signup" element={<Register />}></Route>
      <Route path="/signin" element={<Login toggleUser={toggleUser} />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
