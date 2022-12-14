import React from 'react'
import { Fragment } from 'react'
import Track from '../Track/Track'
import { bool } from 'prop-types'
import * as S from './styles'
import { useThemeContext } from '../../contexts/CurrentThemeContext.js'
import { useGetAllTracksQuery } from '../../services/tracks'
//import { TrackAuthor } from '../Track/styles'


function CenterBlock({ isPlayList, isLoading1  }) {
  const { data } = useGetAllTracksQuery()

  let authors = data ? data.map((track) => track.author) : []
  let uniqueAuthors = authors.filter((element, index) => {
    return authors.indexOf(element) === index
  })
  let genres = data ? data.map((track) => track.genre) : []
  let uniqueGenres = genres.filter((element, index) => {
    return genres.indexOf(element) === index
  })

  CenterBlock.propTypes = {
    isLoading: bool,
  }

  const { theme } = useThemeContext()
  const [isSearchMenuAuthorOpen, setSearchMenuAuthorOpen] =
    React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')
  let tracks = searchValue === 'older' ? [...data].sort(function (a, b) {
      
    return new Date(a.release_date) - new Date(b.release_date);
  }) : searchValue === 'newer' ? [...data].sort(function (a, b) {
      
    return new Date(b.release_date) - new Date(a.release_date) }) : searchValue
    ? data.filter((item) => item.author === searchValue || item.genre === searchValue)
    : data
  const [isSearchMenuGenreOpen, setSearchMenuGenreOpen] = React.useState(false)
  const [isSearchMenuYearOpen, setSearchMenuYearOpen] = React.useState(false)
  const [value, setValue] = React.useState("");
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
  const sortTracks = (evt) => {
    setSearchValue(evt.target.textContent)
  }
  const filterNewestTracks = (evt) => {
    setValue(evt.target.value);
    setSearchValue(value)
  };
  return (
    <S.CenterBlock>
      <S.CenterBlockTitle>??????????</S.CenterBlockTitle>
      {!isPlayList && (
        <Fragment>
          <S.CenterBlockFilter>
            <S.CenterBlockFilterTitle>???????????? ????:</S.CenterBlockFilterTitle>
            <S.CenterBlockFilterBtn
              onClick={toggleBurgerMenuOpen}
              $isOpen={isSearchMenuAuthorOpen}
              $IsTheme={theme}
            >
              ??????????????????????
            </S.CenterBlockFilterBtn>
            {isSearchMenuAuthorOpen && (
              <Fragment>
                <S.SearchMenuAuthor $IsTheme={theme}>
                  {uniqueAuthors.sort().map((author, index) => (
                    <S.SearchMenuItem
                      onClick={(event) => sortTracks(event)}
                      key={index}
                    >
                      {author}
                    </S.SearchMenuItem>
                  ))}
                </S.SearchMenuAuthor>
              </Fragment>
            )}
            <S.CenterBlockFilterBtn
              onClick={toggleSearchMenuYearOpen}
              $isOpen={isSearchMenuYearOpen}
              $IsTheme={theme}
            >
              ???????? ??????????????
            </S.CenterBlockFilterBtn>
            {isSearchMenuYearOpen && (
              <Fragment>
                <S.SearchMenuYear $IsTheme={theme}>
                  <S.SearchMenuYearInput
                    type="radio"
                    id="yearNewer"
                    name="year"
                    value="newer"
                    onChange={filterNewestTracks}
                  ></S.SearchMenuYearInput>
                  <S.SearchMenuItem htmlFor="yearNewer" onChange={filterNewestTracks}>
                    ?????????? ??????????
                  </S.SearchMenuItem>

                  <S.SearchMenuYearInput
                    type="radio"
                    id="yearOLder"
                    name="year"
                    value="older"
                  onChange={filterNewestTracks} ></S.SearchMenuYearInput>
                  <S.SearchMenuItem htmlFor="yearOlder" onChange={filterNewestTracks}>
                    ?????????? ????????????
                  </S.SearchMenuItem>
                </S.SearchMenuYear>
              </Fragment>
            )}
            <S.CenterBlockFilterBtn
              onClick={toggleSearchMenuGenreOpen}
              $isOpen={isSearchMenuGenreOpen}
              $IsTheme={theme}
            >
              ??????????
            </S.CenterBlockFilterBtn>
            {isSearchMenuGenreOpen && (
              <Fragment>
                <S.SearchMenuGenre $IsTheme={theme}>
                  {uniqueGenres.sort().map((genre, index) => (
                    <S.SearchMenuItem onClick={(event) => sortTracks(event)} key={index}>{genre}</S.SearchMenuItem>
                  ))}
                </S.SearchMenuGenre>
              </Fragment>
            )}
          </S.CenterBlockFilter>
        </Fragment>
      )}

      <S.CenterBlockContent>
        <S.CenterBlockPlayListTitle>
          <S.CenterBlockPlaylistColFirst>????????</S.CenterBlockPlaylistColFirst>
          <S.CenterBlockPlaylistColSecond>
            ??????????????????????
          </S.CenterBlockPlaylistColSecond>
          <S.CenterBlockPlaylistColThird>????????????</S.CenterBlockPlaylistColThird>
          <S.CenterBlockPlaylistColFourth>???</S.CenterBlockPlaylistColFourth>
        </S.CenterBlockPlayListTitle>
        <S.CenterBlockPlayList>
          {isPlayList && (
            <Fragment>
              <Track isLoading={isLoading1} />
              <Track isLoading={isLoading1} />
              <Track isLoading={isLoading1} />
              <Track isLoading={isLoading1} />
              <Track isLoading={isLoading1} />
            </Fragment>
          )}
          {!isPlayList && (
            <Fragment>
              {data
                ? tracks.map((track) => <Track key={track.id} track={track} />)
                : '?????????? ???? ??????????????'}
            </Fragment>
          )}
        </S.CenterBlockPlayList>
      </S.CenterBlockContent>
    </S.CenterBlock>
  )
}

export default CenterBlock
