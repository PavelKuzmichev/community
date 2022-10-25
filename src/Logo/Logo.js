import React from 'react'
import logoDark from '../images/logoDark.png'
import { useLocation } from 'react-router-dom'
import logoWhite from '../images/logoWhite.png'

import './Logo.scss'
function Logo() {
  const { pathname } = useLocation()
  return pathname === '/signin' || pathname === '/signup' ? (
    <img className="logoDark" src={logoDark} alt="Логотип" />
  ) : (
    <img className="logo" src={logoWhite} alt="Логотип" />
  )
}

export default Logo
