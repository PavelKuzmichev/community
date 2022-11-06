import styled from 'styled-components'

export const AuthForm = styled.form`
  width: 366px;
  height: 439px;
  background-color: #ffffff;
  border-radius: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 43px 47px 47px 40px;
  box-sizing: border-box;
`
export const FormButton = styled.button`
  width: 278px;
  height: 52px;
  background-color: #580ea2;
  border-radius: 6px;
  margin-left: 4px;
  border: none;
  margin-top: 30px;
  box-sizing: border-box;
  color: #ffffff;
`
export const FormButtonRegister = styled(FormButton)`
  color: black;
  background-color: transparent;
  border: 1px solid #d0cece;
`
export const PopupArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const FormInput = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  margin-right: 3px;
  margin-bottom: 30px;
`
export const FormSpan = styled.span``
