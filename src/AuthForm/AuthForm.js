import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './AuthForm.scss'
import Logo from '../Logo/Logo'
import { Fragment } from 'react'

const AuthForm = () => {
  const onSubmit = () => {
    console.log('click')
  }
  const { pathname } = useLocation()

  return (
    <div className="popup-area">
      <div className="authForm">
        <Logo color={'black'} />
        <form className="form" onSubmit={onSubmit}>
          <input
            className="form__input"
            type="text"
            name="login"
            placeholder="Логин"
            required
          />
          <span className="form__span" id="login-error"></span>
          <input
            className="form__input"
            type="password"
            name="password"
            id="password"
            placeholder="Пароль"
            minLength="8"
            required
          />
          <span className="form__span" id="password-error"></span>
          {pathname !== '/signin' && (
            <Fragment>
              <input
                className="form__input"
                type="password"
                name="password"
                placeholder="Повторите пароль"
                minLength="8"
                required
              />
              <span className="form__span" id="password-error"></span>
            </Fragment>
          )}

          <button className="form__button">Войти</button>
          {pathname === '/signin' && (
            <Fragment>
              {' '}
              <Link to="/signup" title="Перейти к регистрации.">
                <button className="form__button form__button_register">
                  Зарегистрироваться
                </button>
              </Link>
            </Fragment>
          )}
        </form>
      </div>
    </div>
  )
}

export default AuthForm
