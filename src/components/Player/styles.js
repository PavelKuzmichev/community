import styled from 'styled-components'
import like from '../../images/icon/like.svg'
import dislike from '../../images/icon/dislike.svg'
import likeLight from '../../images/icon/likeLight.svg'
import dislikeLight from '../../images/icon/dislikeLight.svg'
import likeHover from '../../images/icon/like-hover.svg'
import dislikeHover from '../../images/icon/dislike-hover.svg'
import prev from '../../images/icon/prev.svg'
import prevLight from '../../images/icon/prevLight.svg'
import next from '../../images/icon/next.svg'
import nextLight from '../../images/icon/nextLight.svg'
import play from '../../images/icon/play.svg'
import playLight from '../../images/icon/playLight.svg'
import repeat from '../../images/icon/repeat.svg'
import repeatLight from '../../images/icon/repeatLight.svg'
import shuffle from '../../images/icon/shuffle.svg'
import shuffleLight from '../../images/icon/shuffleLight.svg'
import repeatHover from '../../images/icon/repeat-hover.svg'
import shuffleHover from '../../images/icon/shuffle-hover.svg'
import volume from '../../images/icon/volume.svg'
import volumeLight from '../../images/icon/volumeLight.svg'
import stop from '../../images/icon/stop.svg'
import stopHover from '../../images/icon/stop-hover.svg'
import playHover from '../../images/icon/play-hover.svg'

export const Player = styled.div`
  position: fixed;
  bottom: 0vh;
  width: 100%;
  margin-bottom: 10px;
`
export const PlayerProgress = styled.div`
  cursor: pointer;
  width: 100%;
  height: 5px;
  margin-bottom: 12px;
  background: linear-gradient(
    to right,
    #ad61ff ${(props) => props.$trackProgress}%,
    ${(props) => (props.$IsTheme.dark ? '#2e2e2e' : '#D9D9D9')} 0%
  );
`
export const PlayerBlock = styled.div`
  padding: 0 36px;
  display: flex;
  align-items: center;
`
export const PlayerBlockButtons = styled.div`
  padding-right: 27px;
  display: flex;
  gap: 33px;
  align-items: center;
`

export const PlayerBlockSongImage = styled.div`
  margin-right: 12px;
  width: 51px;
  height: 51px;
  background-color: #313131;
`
export const PlayerBlockSongContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding-right: 27px;
`
export const PlayerBlockButton = styled.button`
  border: none;
  width: 22px;
  height: 20px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    cursor: pointer;
  }
`
export const PlayerBlockButtonPrev = styled(PlayerBlockButton)`
  background-image: url(${(props) => (props.$IsTheme.dark ? prev : prevLight)});
`

export const PlayerBlockButtonPlay = styled(PlayerBlockButton)`
  background-image: url(${(props) =>
    props.$IsPlaying ? stop : props.$IsTheme.dark ? play : playLight});
  &:hover {
    background-image: url(${(props) =>
      props.$IsPlaying ? stopHover : playHover});
  }
`
export const PlayerBlockButtonStop = styled(PlayerBlockButton)`
  background-image: url(${stop});
`
export const PlayerBlockButtonNext = styled(PlayerBlockButton)`
  background-image: url(${(props) => (props.$IsTheme.dark ? next : nextLight)});
`

export const PlayerBlockButtonRepeat = styled(PlayerBlockButton)`
  background-image: url(${(props) =>
    props.$IsTheme.dark ? repeat : repeatLight});
  &:hover {
    background-image: url(${repeatHover});
  }
`

export const PlayerBlockButtonShuffle = styled(PlayerBlockButton)`
  background-image: url(${(props) =>
    props.$IsTheme.dark ? shuffle : shuffleLight});
  &:hover {
    background-image: url(${shuffleHover});
  }
`
export const PlayerBlockSong = styled.div`
  display: flex;
  margin-left: 32px;
`

export const PlayerBlockSongAuthor = styled.div``
export const PlayerBlockSongTitle = styled.div``
export const PlayerVolumeProgress = styled.input``

export const PlayerBlockLikeBtns = styled.div`
  display: flex;
  gap: 38px;
  margin-right: auto;
`

export const PlayerBlockLikeBtn = styled.button`
  cursor: pointer;
  border: none;
  width: 14px;
  height: 13px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  background-image: url(${(props) =>
    props.$IsDisLike
      ? props.$IsTheme.dark
        ? dislike
        : dislikeLight
      : props.$IsTheme.dark
      ? like
      : likeLight});
  &:hover {
    background-image: url(${(props) =>
      props.$IsDisLike ? dislikeHover : likeHover});
  }
`

export const PlayerVolume = styled.div`
  cursor: pointer;
  display: flex;
  gap: 26px;
`
export const PlayerVolumeImg = styled.div`
  border: none;
  width: 13px;
  height: 18px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  background-image: url(${(props) =>
    props.$IsTheme.dark ? volume : volumeLight});
`
export const Audio = styled.audio`
  display: none;
`
