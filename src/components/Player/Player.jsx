import React from 'react'

import * as S from './styles'

function Player() {
  return (
    <S.Player>
      <S.PlayerProgress> </S.PlayerProgress>
      <S.PlayerBlock>
        <S.PlayerBlockButtons>
          <S.PlayerBlockButtonPrev></S.PlayerBlockButtonPrev>
          <S.PlayerBlockButtonPlay></S.PlayerBlockButtonPlay>
          <S.PlayerBlockButtonNext></S.PlayerBlockButtonNext>
          <S.PlayerBlockButtonRepeat></S.PlayerBlockButtonRepeat>
          <S.PlayerBlockButtonShuffle></S.PlayerBlockButtonShuffle>
        </S.PlayerBlockButtons>
        <S.PlayerBlockSong>
          <S.PlayerBlockSongImage></S.PlayerBlockSongImage>
          <S.PlayerBlockSongContent>
            <S.PlayerBlockSongAuthor>Баста</S.PlayerBlockSongAuthor>
            <S.PlayerBlockSongTitle>Ты та...</S.PlayerBlockSongTitle>
          </S.PlayerBlockSongContent>
        </S.PlayerBlockSong>
        <S.PlayerBlockLikeBtns>
          <S.PlayerBlockLikeBtn></S.PlayerBlockLikeBtn>
          <S.PlayerBlockLikeBtn $IsDisLike={true}></S.PlayerBlockLikeBtn>
        </S.PlayerBlockLikeBtns>
        <S.PlayerVolume>
          <S.PlayerVolumeImg></S.PlayerVolumeImg>
          <S.PlayerVolumeProgress
            type="range"
            name="range"
          ></S.PlayerVolumeProgress>
        </S.PlayerVolume>
      </S.PlayerBlock>
    </S.Player>
  )
}

export default Player
