import React from 'react'
import { Fragment } from 'react'
import Track from '../Track/Track'
import './CenterBlock.scss'
import { bool } from 'prop-types'

function CenterBlock({ isLoading }) {
  CenterBlock.propTypes = {
    isLoading: bool,
  }
  
  const [isSearchMenuAuthorOpen, setSearchMenuAuthorOpen] =
    React.useState(false)
  const [isSearchMenuGenreOpen, setSearchMenuGenreOpen] = React.useState(false)
  const [isSearchMenuYearOpen, setSearchMenuYearOpen] = React.useState(false)
  const toggleSearchMenuYearOpen = () => {
    closeAllSearchMenu()
    setSearchMenuYearOpen(!isSearchMenuYearOpen)
  }
  const toggleBurgerMenuOpen = () => {
    closeAllSearchMenu()
    setSearchMenuAuthorOpen(!isSearchMenuAuthorOpen)
  }
  const toggleSearchMenuGenreOpen = () => {
    closeAllSearchMenu()
    setSearchMenuGenreOpen(!isSearchMenuGenreOpen)
  }
  const closeAllSearchMenu = () => {
    setSearchMenuAuthorOpen(false)
    setSearchMenuGenreOpen(false)
    setSearchMenuYearOpen(false)
  }
  return (
    <div className="centerBlock">
      <h2 className="centeBlock__title">Треки</h2>
      <div className="centerBlock__filter">
        <h3 className="centerBlock__filter_title">Искать по:</h3>
        <button
          className="centerBlock__filter_btn"
          onClick={toggleBurgerMenuOpen}
        >
          исполнителю
        </button>
        {isSearchMenuAuthorOpen && (
          <Fragment>
            <div className="searchMenu searchMenu_Author">
              <p className="searchMenuAuthor__item">Michael Jackson</p>
              <p className="searchMenuAuthor__item">Frank Sinatra</p>
              <p className="searchMenuAuthor__item">Calvin Harris</p>
              <p className="searchMenuAuthor__item">Zhu</p>
              <p className="searchMenuAuthor__item">Arctic Monkeys</p>
              <p className="searchMenuAuthor__item">Eminem</p>
            </div>
          </Fragment>
        )}
        <button
          className="centerBlock__filter_btn"
          onClick={toggleSearchMenuYearOpen}
        >
          году выпуска
        </button>
        {isSearchMenuYearOpen && (
          <Fragment>
            <div className="searchMenu searchMenu_Year">
              <input
                type="radio"
                id="yearNewer"
                name="year"
                value="newer"
              ></input>
              <label className="searchMenuAuthor__item" htmlFor="yearNewer">
                Более новые
              </label>

              <input
                type="radio"
                id="yearOLder"
                name="year"
                value="older"
              ></input>
              <label className="searchMenuAuthor__item" htmlFor="yearOlder">
                Более старые
              </label>
            </div>
          </Fragment>
        )}
        <button
          className="centerBlock__filter_btn"
          onClick={toggleSearchMenuGenreOpen}
        >
          жанру
        </button>
        {isSearchMenuGenreOpen && (
          <Fragment>
            <div className="searchMenu searchMenu_Genre">
              <p className="searchMenuAuthor__item">Рок</p>
              <p className="searchMenuAuthor__item">Хип-хоп</p>
              <p className="searchMenuAuthor__item">Поп-музыка</p>
              <p className="searchMenuAuthor__item">Техно</p>
              <p className="searchMenuAuthor__item">Инди</p>
              <p className="searchMenuAuthor__item">Кантри</p>
            </div>
          </Fragment>
        )}
      </div>
      <div className="centerblock__content">
        <div className="centerblock__playlist-title">
          <div className="centerblock__playlist-col col1">Трек</div>
          <div className="centerblock__playlist-col col2">ИСПОЛНИТЕЛЬ</div>
          <div className="centerblock__playlist-col col3">АЛЬБОМ</div>
          <div className="centerblock__playlist-col col4">◴</div>
        </div>
        <div className="centerblock__playlist">
          <Track isLoading={isLoading} />
          <Track isLoading={isLoading} />
          <Track isLoading={isLoading} />
          <Track isLoading={isLoading} />
          <Track isLoading={isLoading} />
          <Track isLoading={isLoading} />
          <Track isLoading={isLoading} />
          <Track isLoading={isLoading} />
          <Track isLoading={isLoading} />
          <Track isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}

export default CenterBlock
