import styled, { css } from 'styled-components'

export const Track = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      text-decoration: none;
    `};
`
export const TrackTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 447px;
  color: inherit;

  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      text-decoration: none;
    `};
`
export const TrackTitleImage = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #4e4e4e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 17px;

  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`
export const TrackTitleSvg = styled.svg`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`

export const TrackTitleLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color: inherit;
  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`
export const TrackTitleSpan = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`
export const TrackAuthor = styled.div`
  width: 321px;
  display: flex;
  justify-content: flex-start;

  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`

export const TrackAuthorLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: inherit;
  text-align: left;
  text-decoration: none;
  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`
export const TrackAlbum = styled.div`
  width: 245px;

  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`
export const TrackAlbumLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  text-decoration: none;
  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`
export const TrackTime = styled.div``
export const TrackTitleText = styled.div`
  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`
export const TrackTimeSvg = styled.button`

}

`
export const TrackTimeText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;

  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `};
`
