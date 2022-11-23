import { React, useRef, useState, useEffect } from 'react'
import * as S from './styles'
import song from '../../audio/song.mp3'

function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [trackProgress, setTrackProgress] = useState(0)
  const audioRef = useRef(null)
  const intervalRef = useRef()
  const startTimer = () => {
    clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        setTrackProgress(0)
      } else {
        setTrackProgress(
          (audioRef.current.currentTime * 100) / audioRef.current.duration
        )
      }
    }, [100])
  }
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
      startTimer()
    } else {
      clearInterval(intervalRef.current)
      audioRef.current.pause()
    }
  }, [isPlaying])

  const handleStart = () => {
    audioRef.current.play()
    setIsPlaying(true)
  }

  const handleStop = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const togglePlay = isPlaying ? handleStop : handleStart
  return (
    <S.Player>
      <S.Audio controls ref={audioRef}>
        <source src={song} type="audio/mpeg" />
      </S.Audio>
      <S.PlayerProgress $trackProgress={trackProgress}> </S.PlayerProgress>
      <S.PlayerBlock>
        <S.PlayerBlockButtons>
          <S.PlayerBlockButtonPrev></S.PlayerBlockButtonPrev>
          <S.PlayerBlockButtonPlay
            onClick={togglePlay}
            $IsPlaying={isPlaying}
          ></S.PlayerBlockButtonPlay>
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
