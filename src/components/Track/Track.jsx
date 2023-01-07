
import React from 'react'
//import { Route, Switch} from 'react-router-dom'

import * as S from './styles'

const Track = ({ isLoading, track, setCurrentTrack }) => {
  
  
  return (
    <S.Track onClick={()=>{setCurrentTrack(track)}} $IsLoading={isLoading}>
      <S.TrackTitle $IsLoading={isLoading}>
        <S.TrackTitleImage   $IsLoading={isLoading}>
          <S.TrackTitleSvg>
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </S.TrackTitleSvg>
        </S.TrackTitleImage>
        <S.TrackTitleText $IsLoading={isLoading}>
          <S.TrackTitleLink $IsLoading={isLoading}>
            {track.name}<S.TrackTitleSpan/>
          </S.TrackTitleLink>
        </S.TrackTitleText>
      </S.TrackTitle>
      <S.TrackAuthor $IsLoading={isLoading}>
        <S.TrackAuthorLink $IsLoading={isLoading} >
          {track.author}
        </S.TrackAuthorLink>
      </S.TrackAuthor>
      <S.TrackAlbum $IsLoading={isLoading}>
        <S.TrackAlbumLink $IsLoading={isLoading} >
         {track.album}
        </S.TrackAlbumLink>
      </S.TrackAlbum>
      <S.TrackTime>
        <S.TrackTimeSvg  alt="time"></S.TrackTimeSvg >
        <S.TrackTimeText $IsLoading={isLoading}>{track.duration_in_seconds}</S.TrackTimeText>
      </S.TrackTime>
    </S.Track>
  )
}

export default Track
