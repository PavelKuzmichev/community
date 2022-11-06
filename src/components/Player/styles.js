import styled from 'styled-components'
import like from '../../images/icon/like.svg'
import dislike from '../../images/icon/dislike.svg'
import prev from '../../images/icon/prev.svg'
import next from '../../images/icon/next.svg'
import play from '../../images/icon/play.svg'
import repeat from '../../images/icon/repeat.svg'
import shuffle from '../../images/icon/shuffle.svg'
import volume from '../../images/icon/volume.svg'

export const Player = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: 10px;
`
export const PlayerProgress = styled.div`
  width: 100%;
  height: 5px;
  margin-bottom: 12px;
  background: #2e2e2e;
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
  color: white;
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
`
export const PlayerBlockButtonPrev = styled(PlayerBlockButton)`
  background-image: url(${prev});
`

export const PlayerBlockButtonPlay = styled(PlayerBlockButton)`
  background-image: url(${play});
`

export const PlayerBlockButtonNext = styled(PlayerBlockButton)`
  background-image: url(${next});
`

export const PlayerBlockButtonRepeat = styled(PlayerBlockButton)`
  background-image: url(${repeat});
`

export const PlayerBlockButtonShuffle = styled(PlayerBlockButton)`
  background-image: url(${shuffle});
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
  border: none;
  width: 14px;
  height: 13px;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;

  background-image: url(${(props) => (props.$IsDisLike ? dislike : like)});
`

export const PlayerVolume = styled.div`
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
  background-image: url(${volume});
`
