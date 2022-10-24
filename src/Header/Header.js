import Logo from "../Logo/Logo";
import SearchInput from "../SearchInput/SearchInput"
import UserAccount from "../UserAccount/UserAccount"
import React from 'react'
//import { Route, Switch} from 'react-router-dom'
import "./Header.scss";

const Header = ()  => {
  
  
  return (
    <div className="header">
      <Logo />
      <SearchInput />
      <UserAccount />
    </div>
  );
};

export default Header;