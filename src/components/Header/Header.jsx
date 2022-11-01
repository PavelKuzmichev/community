import Logo from '../Logo/Logo'
import { StyledHeader } from './styles'
import SearchInput from '../SearchInput/SearchInput'
import UserAccount from '../UserAccount/UserAccount'
import React from 'react'
//import { Route, Switch} from 'react-router-dom'

const Header = () => {
  return (
    <StyledHeader>
      <Logo color={'white'} />
      <SearchInput />
      <UserAccount />
    </StyledHeader>
  )
}

export default Header
