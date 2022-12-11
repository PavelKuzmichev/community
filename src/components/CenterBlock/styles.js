import styled, { css } from 'styled-components'

export const CenterBlock = styled.div`
  padding-left: 111px;
  margin-right: auto;
`
export const CenterBlockTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`
export const CenterBlockFilter = styled.div`
  position: relative;
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 51px;
`
export const CenterBlockFilterTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`
export const CenterBlockFilterBtn = styled.button`
  border: none;
  background-color: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: inherit;
  border: 1px solid ${(props) => (props.$IsTheme.dark ? '#ffffff' : '#000000')};
  border-radius: 60px;
  padding: 6px 20px;
  cursor: pointer;
  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
  }
  ${(props) =>
    props.$isOpen &&
    css`
      border-color: #ad61ff;
      color: #ad61ff;
    `};
`
export const SearchMenu = styled.div`
  position: absolute;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 34px;
  top: 50px;
  gap: 28px;
  width: 248px;
  height: 305px;
  background: ${(props) => (props.$IsTheme.dark ? '#313131' : '#ffffff')};
  border-radius: 12px;

  &::-webkit-scrollbar {
    width: 4px;
    height: 0px;
  }
  &::-webkit-scrollbar-track {
    background: #4b4949;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #4b4949;
  }
`
export const SearchMenuAuthor = styled(SearchMenu)`
  left: 100px;
`
export const SearchMenuGenre = styled(SearchMenu)`
  left: 414px;
`
export const SearchMenuYear = styled(SearchMenu)`
  width: 421px;
  flex-direction: row;
  height: 100px;
  align-items: center;
  left: 256px;
`
export const SearchMenuYearInput = styled.input``
export const SearchMenuItem = styled.p`
  height: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  &:hover {
    text-decoration-line: underline;
    color: #b672ff;
    cursor: pointer;
  }
`
export const CenterBlockPlayList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const CenterBlockPlayListTitle = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;
  margin-bottom: 24px;
`
export const CenterBlockContent = styled.div``
export const CenterBlockPlaylistCol = styled.div``
export const CenterBlockPlaylistColFirst = styled(CenterBlockPlaylistCol)`
  width: 447px;
`
export const CenterBlockPlaylistColSecond = styled(CenterBlockPlaylistCol)`
  width: 321px;
`
export const CenterBlockPlaylistColThird = styled(CenterBlockPlaylistCol)`
  width: 245px;
`
export const CenterBlockPlaylistColFourth = styled(CenterBlockPlaylistCol)`
  padding-left: 30px;
  width: 60px;
`
