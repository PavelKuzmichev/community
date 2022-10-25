
import React from 'react'
//import { Route, Switch} from 'react-router-dom'
import "./UserAccount.scss";
import logo from "../images/logoDark.png";
const UserAccount = ()  => {
  
  
  return (
    <div className='sideBar'>
      <h2 className='sidebar__personal-name'>Pavel Kuzmichev</h2>
      <img className='sidebar__avatar' src={logo}></img>
    </div>
  );
};

export default UserAccount;