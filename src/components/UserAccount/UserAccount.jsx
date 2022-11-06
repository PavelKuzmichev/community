import React from 'react'
//import { Route, Switch} from 'react-router-dom'
import * as S from './styles'
import logo from '../../images/logoDark.png'
const UserAccount = () => {
  return (
    <S.SideBar>
      <S.SideBarName>Pavel Kuzmichev</S.SideBarName>
      <S.SideBarAvatar src={logo} alt="аватар"></S.SideBarAvatar>
    </S.SideBar>
  )
}

export default UserAccount
