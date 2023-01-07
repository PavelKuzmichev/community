import { React, useRef, useState, useEffect } from 'react'
import * as S from './styles'
import song from '../../audio/song.mp3'
import { useThemeContext } from '../../contexts/CurrentThemeContext.js'

function Player({currentTrack}) {
  const { theme } = useThemeContext()
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
        <source src={currentTrack ? currentTrack.track_file : song} type="audio/mpeg" />
      </S.Audio>
      <S.PlayerProgress $IsTheme={theme} $trackProgress={trackProgress} />
      <S.PlayerBlock>
        <S.PlayerBlockButtons>
          <S.PlayerBlockButtonPrev $IsTheme={theme} />
          <S.PlayerBlockButtonPlay
            $IsTheme={theme}
            onClick={togglePlay}
            $IsPlaying={isPlaying}
          />
          <S.PlayerBlockButtonNext $IsTheme={theme} />
          <S.PlayerBlockButtonRepeat $IsTheme={theme} />
          <S.PlayerBlockButtonShuffle $IsTheme={theme} />
        </S.PlayerBlockButtons>
        <S.PlayerBlockSong>
          <S.PlayerBlockSongImage />
          <S.PlayerBlockSongContent>
            <S.PlayerBlockSongAuthor>{currentTrack ? currentTrack.author : 'Баста'}</S.PlayerBlockSongAuthor>
            <S.PlayerBlockSongTitle>{currentTrack ? currentTrack.name : 'Ты не та'}.</S.PlayerBlockSongTitle>
          </S.PlayerBlockSongContent>
        </S.PlayerBlockSong>
        <S.PlayerBlockLikeBtns>
          <S.PlayerBlockLikeBtn $IsTheme={theme} />
          <S.PlayerBlockLikeBtn $IsTheme={theme} $IsDisLike={true} />
        </S.PlayerBlockLikeBtns>
        <S.PlayerVolume>
          <S.PlayerVolumeImg $IsTheme={theme} />
          <S.PlayerVolumeProgress type="range" name="range" />
        </S.PlayerVolume>
      </S.PlayerBlock>
    </S.Player>
  )
}

export default Player
