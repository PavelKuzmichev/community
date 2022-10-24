import React from 'react'

import './Player.scss'

function Player() {
  return (
    <div className="player">
      <div className="player__progress"> </div>
      <div className="player__block">
        <div className="player__block_buttons">
          <button className="player__block_button player__block_button_prev"></button>
          <button className="player__block_button player__block_button_play"></button>
          <button className="player__block_button player__block_button_next"></button>
          <button className="player__block_button player__block_button_repeat"></button>
          <button className="player__block_button player__block_button_shuffle"></button>
        </div>
        <div className='player__block_song'>
            <div className='player__block_song-image'></div>
            <div className='player__block_song-content'>
            <div className='player__block_song-author'>Баста</div>
            <div className='player__block_song-title'>Ты та...</div>
            </div>
            
        </div>
        <div className='player__block_like-btns'>
          <button className='player__block_like-btn player__block_like-btn_like'></button>
          <button className='player__block_like-btn player__block_like-btn_disLike'></button>
            </div>
            <div className='player__volume'>
          <div className='player__volume_img'></div>
          <input className="player__volume_progress" type="range" name="range"></input>
            </div>
        </div>
        
      </div>
    
  )
}

export default Player
