import AuthForm from '../AuthForm/AuthForm'
import React from 'react'
import { StyledRegister } from './styles'
//import { Route, Switch} from 'react-router-dom'

const Register = () => {
  return (
    <StyledRegister>
      <AuthForm></AuthForm>
    </StyledRegister>
  )
}

export default Register
