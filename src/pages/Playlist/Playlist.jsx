import React from 'react'
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu'
import Header from '../../components/Header/Header'
import Player from '../../components/Player/Player'
import CenterBlock from '../../components/CenterBlock/CenterBlock'

import { StyledPlaylist } from './styles'
import { bool } from 'prop-types'
function Playlist({ isLoading }) {
  Playlist.propTypes = {
    isLoading: bool,
  }
  const isPlayList = true
  return (
    <div>
      <Header isPlayList={isPlayList} />
      <StyledPlaylist>
        <BurgerMenu />
        <CenterBlock isPlayList={isPlayList} isLoading={isLoading} />
      </StyledPlaylist>
      <Player />
    </div>
  )
}

export default Playlist
