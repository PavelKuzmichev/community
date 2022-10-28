import React from 'react'
//import { Route, Switch} from 'react-router-dom'
import './Track.scss'
import { bool } from 'prop-types'

const Track = ({ isLoading }) => {
  Track.propTypes = {
    isLoading: bool,
  }
  let load = isLoading ? 'loading' : ''

  return (
    <div className={`track ${load}`}>
      <div className={`track__title ${load}`}>
        <div className={`track__title-image ${load}`}>
          <svg className="track__title-svg" alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
        <div className={`track__title-text ${load}`}>
          <a className={`track__title-link ${load}`} href="http://">
            Guilt <span className="track__title-span"></span>
          </a>
        </div>
      </div>
      <div className={`track__author ${load}`}>
        <a className={`track__author-link ${load}`} href="http://">
          Nero
        </a>
      </div>
      <div className={`track__album ${load}`}>
        <a className={`track__album-link ${load}`} href="http://">
          Welcome Reality
        </a>
      </div>
      <div className={`track__time ${load}`}>
        <svg className="track__time-svg" alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
        </svg>
        <span className={`track__time-text ${load}`}>4:44</span>
      </div>
    </div>
  )
}

export default Track
