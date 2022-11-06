import React from 'react'
import { Fragment } from 'react'
import Track from '../Track/Track'
import { bool } from 'prop-types'
import * as S from './styles'

function CenterBlock({ isPlayList, isLoading }) {
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
  // const title = 1
  return (
    <S.CenterBlock>
      <S.CenterBlockTitle>Треки</S.CenterBlockTitle>
      {!isPlayList && (
        <Fragment>
          <S.CenterBlockFilter>
            <S.CenterBlockFilterTitle>Искать по:</S.CenterBlockFilterTitle>
            <S.CenterBlockFilterBtn
              onClick={toggleBurgerMenuOpen}
              $isOpen={isSearchMenuAuthorOpen}
            >
              исполнителю
            </S.CenterBlockFilterBtn>
            {isSearchMenuAuthorOpen && (
              <Fragment>
                <S.SearchMenuAuthor>
                  <S.SearchMenuItem>Michael Jackson</S.SearchMenuItem>
                  <S.SearchMenuItem>Frank Sinatra</S.SearchMenuItem>
                  <S.SearchMenuItem>Calvin Harris</S.SearchMenuItem>
                  <S.SearchMenuItem>Zhu</S.SearchMenuItem>
                  <S.SearchMenuItem>Arctic Monkeys</S.SearchMenuItem>
                  <S.SearchMenuItem>Eminem</S.SearchMenuItem>
                </S.SearchMenuAuthor>
              </Fragment>
            )}
            <S.CenterBlockFilterBtn
              onClick={toggleSearchMenuYearOpen}
              $isOpen={isSearchMenuYearOpen}
            >
              году выпуска
            </S.CenterBlockFilterBtn>
            {isSearchMenuYearOpen && (
              <Fragment>
                <S.SearchMenuYear>
                  <S.SearchMenuYearInput
                    type="radio"
                    id="yearNewer"
                    name="year"
                    value="newer"
                  ></S.SearchMenuYearInput>
                  <S.SearchMenuItem htmlFor="yearNewer">
                    Более новые
                  </S.SearchMenuItem>

                  <S.SearchMenuYearInput
                    type="radio"
                    id="yearOLder"
                    name="year"
                    value="older"
                  ></S.SearchMenuYearInput>
                  <S.SearchMenuItem htmlFor="yearOlder">
                    Более старые
                  </S.SearchMenuItem>
                </S.SearchMenuYear>
              </Fragment>
            )}
            <S.CenterBlockFilterBtn
              onClick={toggleSearchMenuGenreOpen}
              $isOpen={isSearchMenuGenreOpen}
            >
              жанру
            </S.CenterBlockFilterBtn>
            {isSearchMenuGenreOpen && (
              <Fragment>
                <S.SearchMenuGenre>
                  <S.SearchMenuItem>Рок</S.SearchMenuItem>
                  <S.SearchMenuItem>Хип-хоп</S.SearchMenuItem>
                  <S.SearchMenuItem>Поп-музыка</S.SearchMenuItem>
                  <S.SearchMenuItem>Техно</S.SearchMenuItem>
                  <S.SearchMenuItem>Инди</S.SearchMenuItem>
                  <S.SearchMenuItem>Кантри</S.SearchMenuItem>
                </S.SearchMenuGenre>
              </Fragment>
            )}
          </S.CenterBlockFilter>
        </Fragment>
      )}

      <S.CenterBlockContent>
        <S.CenterBlockPlayListTitle>
          <S.CenterBlockPlaylistColFirst>Трек</S.CenterBlockPlaylistColFirst>
          <S.CenterBlockPlaylistColSecond>
            ИСПОЛНИТЕЛЬ
          </S.CenterBlockPlaylistColSecond>
          <S.CenterBlockPlaylistColThird>АЛЬБОМ</S.CenterBlockPlaylistColThird>
          <S.CenterBlockPlaylistColFourth>◴</S.CenterBlockPlaylistColFourth>
        </S.CenterBlockPlayListTitle>
        <S.CenterBlockPlayList>
          {isPlayList && (
            <Fragment>
              <Track isLoading={isLoading} />
              <Track isLoading={isLoading} />
              <Track isLoading={isLoading} />
              <Track isLoading={isLoading} />
              <Track isLoading={isLoading} />
            </Fragment>
          )}
          {!isPlayList && (
            <Fragment>
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
            </Fragment>
          )}
        </S.CenterBlockPlayList>
      </S.CenterBlockContent>
    </S.CenterBlock>
  )
}

export default CenterBlock
