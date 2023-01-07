import React, { useState } from 'react'
import { useDispatch } from "react-redux"

import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Logo from '../Logo/Logo'
import { Fragment } from 'react'
import * as S from './styles'
//import { store } from '../../store/store'
import { getUser } from '../../store/actions/creators/user'
import { getToken } from '../../store/actions/creators/token'
import { useLoginMutation, useRegisterMutation, useTokenMutation } from '../../services/login';
import { useEffect } from 'react'
//import { store } from '../../store/store';

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState(null)
  const [login, {data: loginData}] = useLoginMutation();
  const [register, {isLoading}] = useRegisterMutation()
  const [token, {data: tokenData}] = useTokenMutation()
  //const [refresh] = useRefreshMutation()
  const [valueName, setValueName] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  /*const update = () => {
    if (store.getState().user) {
      console.log(store.getState().user)
      navigate("/")
    }
    return
  };*/
  
  const onInputChange = (evt) => {

    setValueName(evt.target.value);
  };
  const onInputChangePassword = (evt) => {

    setValuePassword(evt.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault()

  }
  const handleLogin = (event) => {
    event.preventDefault()
    login({
      "password": valuePassword,
      "email": valueName
    });
    token({
      "password": valuePassword,
      "email": valueName
    });
   dispatch(getUser(loginData))
   dispatch(getToken(tokenData))
   localStorage.setItem('login', tokenData);
    setCurrentUser(loginData)
    setValueName("");
    setValuePassword("");
  };
  const handleRegister = () => {
    register({
      "username": valueName,
      "first_name": "PavelK",
      "last_name": "PavelK",
      "email": valueName,
      "password": valuePassword
    });
    setValueName("");
    setValuePassword("");
    navigate("/signin")
  };
  const { pathname } = useLocation()
  useEffect(() => {
   
    if(!currentUser) {
    
      return}
    navigate("/")
 }, [currentUser]) 
  return (
    <S.PopupArea>
      <S.AuthForm onSubmit={onSubmit}>
        <Logo color={'black'} />
        <S.FormInput type="text" name="login" placeholder="Логин" value={valueName} onChange={onInputChange} required />
        <S.FormSpan id="login-error" />
        <S.FormInput
          type="password"
          name="password"
          id="password"
          value={valuePassword}
          onChange={onInputChangePassword}
          placeholder="Пароль"
          minLength="8"
          required
        />
        <S.FormSpan id="password-error" />
        {pathname !== '/signin' && (
          <Fragment>
            <S.FormInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
              minLength="8"
              value={valuePassword}
              onChange={onInputChangePassword}
              required
            />
            <S.FormSpan id="password-error" />
          </Fragment>
        )}
{pathname === '/signin' && <S.FormButton disabled={isLoading} onClick={  handleLogin} >Войти</S.FormButton>}
 {pathname=== '/signup' && <S.FormButton disabled={isLoading} onClick={  handleRegister }>Зарегистрироваться</S.FormButton>}
        {pathname === '/signin' && (
          <Fragment>
            <Link to="/signup" title="Перейти к регистрации.">
              <S.FormButtonRegister disabled={isLoading} onClick={()=>navigate("/signin")}>Зарегистрироваться</S.FormButtonRegister>
            </Link>
          </Fragment>
        )}
      </S.AuthForm>
    </S.PopupArea>
  )
}

export default AuthForm
