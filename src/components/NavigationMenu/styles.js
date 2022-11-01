import styled, { css } from 'styled-components'
import imgDaily from '../../images/playlist01.png'
import imgTop100 from '../../images/playlist02.png'
import imgIndy from '../../images/playlist03.png'

export const NavigationMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 418px;
  padding: 210px 0 0 0;
`
export const NavigationMenuLink = styled.button`
  width: 250px;
  height: 150px;
  border: none;
  &:hover {
    scale: 1.01;
    cursor: pointer;
  }
`
export const NavigationMenuLinkDaily = styled(NavigationMenuLink)`
  background-image: url(${imgDaily})
    ${(props) =>
      props.$IsLoading &&
      css`
        background-image: none;
        background-color: rgba(49, 49, 49, 1);
        color: #313131;
        text-decoration: none;
      `};
`
export const NavigationMenuLinkTop100 = styled(NavigationMenuLink)`
  background-image: url(${imgTop100})
    ${(props) =>
      props.$IsLoading &&
      css`
        background-image: none;
        background-color: rgba(49, 49, 49, 1);
        color: #313131;
        text-decoration: none;
      `};
`
export const NavigationMenuLinkIndy = styled(NavigationMenuLink)`
  background-image: url(${imgIndy});
  ${(props) =>
    props.$IsLoading &&
    css`
      background-image: none;
      background-color: rgba(49, 49, 49, 1);
      color: #313131;
      text-decoration: none;
    `}
`
