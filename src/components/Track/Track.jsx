
import { React, useState} from 'react'
//import { Route, Switch} from 'react-router-dom'
import { store } from '../../store/store'
import { useDispatch } from "react-redux"
import * as S from './styles'
import { setCurrentTrack } from '../../store/actions/creators/track'
import { useThemeContext } from '../../contexts/CurrentThemeContext.js'
import { useAddLikeMutation } from '../../services/tracks'

const Track = ({ isLoading, track}) => {
  const [addLike] = useAddLikeMutation();
  const [activeLike, setActiveLike] = useState(false)
  const dispatch = useDispatch();
  const token = store.getState().token.access
  const id = track.id
  const { theme } = useThemeContext()
  const toggleLike =()=>{
     setActiveLike(!activeLike)
      addLike( {id, token} )
  }
  return (
    <S.Track onClick={()=>{dispatch(setCurrentTrack(track))}} $IsLoading={isLoading}>
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
        <S.TrackTimeSvg onClick={toggleLike} $IsLike={activeLike} alt="time" $IsTheme={theme}></S.TrackTimeSvg >
        <S.TrackTimeText $IsLoading={isLoading}>{track.duration_in_seconds}</S.TrackTimeText>
      </S.TrackTime>
    </S.Track>
  )
}

export default Track
