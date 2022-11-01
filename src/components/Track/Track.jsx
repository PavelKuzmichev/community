import React from 'react'
//import { Route, Switch} from 'react-router-dom'

import * as S from './styles'

const Track = ({ isLoading }) => {
  return (
    <S.Track $IsLoading={isLoading}>
      <S.TrackTitle $IsLoading={isLoading}>
        <S.TrackTitleImage $IsLoading={isLoading}>
          <S.TrackTitleSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </S.TrackTitleSvg>
        </S.TrackTitleImage>
        <S.TrackTitleText $IsLoading={isLoading}>
          <S.TrackTitleLink $IsLoading={isLoading} href="http://">
            Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
          </S.TrackTitleLink>
        </S.TrackTitleText>
      </S.TrackTitle>
      <S.TrackAuthor $IsLoading={isLoading}>
        <S.TrackAuthorLink $IsLoading={isLoading} href="http://">
          Nero
        </S.TrackAuthorLink>
      </S.TrackAuthor>
      <S.TrackAlbum $IsLoading={isLoading}>
        <S.TrackAlbumLink $IsLoading={isLoading} href="http://">
          Welcome Reality
        </S.TrackAlbumLink>
      </S.TrackAlbum>
      <S.TrackTime>
        <S.TrackTimeSvg alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
        </S.TrackTimeSvg>
        <S.TrackTimeText $IsLoading={isLoading}>4:44</S.TrackTimeText>
      </S.TrackTime>
    </S.Track>
  )
}

export default Track
