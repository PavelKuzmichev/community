import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { Fragment } from 'react'
import * as S from './styles'
import { useLoginMutation, useRegisterMutation} from '../../services/login';

const AuthForm = () => {
 const [login] = useLoginMutation();
 const [register, { isLoading } ] = useRegisterMutation()
  const [value, setValue] = useState("");
  const [valuePassword, setValuePassword] = useState("");
const onInputChange = (evt) => {

    setValue(evt.target.value);
  };
  const onInputChangePassword = (evt) => {
 
      setValuePassword(evt.target.value);
    };
  const onSubmit = () => {
    event.preventDefault()
   
  }
  const handleLogin = () => {
    login({
      "password": valuePassword,
      "email": value
  });
    setValue("");
    setValuePassword("");
  };
  const handleRegister = () => {
    register({
      "username": "PavelK",
      "first_name": "PavelK",
      "last_name": "PavelK",
      "email": value,
      "password": valuePassword
  });
    setValue("");
    setValuePassword("");
  };
  const { pathname } = useLocation()

  return (
    <S.PopupArea>
      <S.AuthForm onSubmit={onSubmit}>
        <Logo color={'black'}/>
        <S.FormInput type="text" name="login" placeholder="Логин"  value={value} onChange={onInputChange} required/>
        <S.FormSpan id="login-error"/>
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
        <S.FormSpan id="password-error"/>
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
            <S.FormSpan id="password-error"/>
          </Fragment>
        )}

        <S.FormButton disabled={isLoading} onClick={handleLogin} >Войти</S.FormButton>
        {pathname === '/signin' && (
          <Fragment>
            <Link to="/signup" title="Перейти к регистрации.">
              <S.FormButtonRegister disabled={isLoading} onClick={handleRegister}>Зарегистрироваться</S.FormButtonRegister>
            </Link>
          </Fragment>
        )}
      </S.AuthForm>
    </S.PopupArea>
  )
}

export default AuthForm
