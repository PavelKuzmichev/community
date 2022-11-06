import React from 'react'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import Header from '../Header/Header'
import Player from '../Player/Player'
import CenterBlock from '../CenterBlock/CenterBlock'
import NavigationMenu from '../NavigationMenu/NavigationMenu'
import { StyledMain } from './styles'
import { bool } from 'prop-types'
function Main({ isLoading }) {
  Main.propTypes = {
    isLoading: bool,
  }

  return (
    <div>
      <Header />
      <StyledMain>
        <BurgerMenu />
        <CenterBlock isLoading={isLoading} />
        <NavigationMenu isLoading={isLoading} />
      </StyledMain>
      <Player />
    </div>
  )
}

export default Main
