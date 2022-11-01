import React from 'react'
import logoDark from '../../images/logoDark.png'
import { LogoWhite, LogoDark } from './styles'
import { useLocation } from 'react-router-dom'
import logoWhite from '../../images/logoWhite.png'

function Logo() {
  const { pathname } = useLocation()
  return pathname === '/signin' || pathname === '/signup' ? (
    <LogoDark src={logoDark} alt="Логотип" />
  ) : (
    <LogoWhite src={logoWhite} alt="Логотип" />
  )
}

export default Logo
