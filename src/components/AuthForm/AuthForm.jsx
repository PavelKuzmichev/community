import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { Fragment } from 'react'
import * as S from './styles'
const AuthForm = () => {
  const onSubmit = () => {
    console.log('click')
  }
  const { pathname } = useLocation()

  return (
    <S.PopupArea>
      <S.AuthForm onSubmit={onSubmit}>
        <Logo color={'black'} />

        <S.FormInput type="text" name="login" placeholder="Логин" required />
        <S.FormSpan id="login-error"></S.FormSpan>
        <S.FormInput
          type="password"
          name="password"
          id="password"
          placeholder="Пароль"
          minLength="8"
          required
        />
        <S.FormSpan id="password-error"></S.FormSpan>
        {pathname !== '/signin' && (
          <Fragment>
            <S.FormInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
              minLength="8"
              required
            />
            <S.FormSpan id="password-error"></S.FormSpan>
          </Fragment>
        )}

        <S.FormButton>Войти</S.FormButton>
        {pathname === '/signin' && (
          <Fragment>
            <Link to="/signup" title="Перейти к регистрации.">
              <S.FormButtonRegister>Зарегистрироваться</S.FormButtonRegister>
            </Link>
          </Fragment>
        )}
      </S.AuthForm>
    </S.PopupArea>
  )
}

export default AuthForm
