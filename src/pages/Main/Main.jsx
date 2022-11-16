import React from 'react'
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu'
import Header from '../../components/Header/Header'
import Player from '../../components/Player/Player'
import CenterBlock from '../../components/CenterBlock/CenterBlock'
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu'
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
