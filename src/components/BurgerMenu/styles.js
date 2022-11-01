import styled from 'styled-components'
import hamburgerIcon from '../../images/icon/hamburger_icon_153362.svg'
import { Link } from 'react-router-dom'
export const BurgerMenu = styled.div`
  min-width: 208px;
`
export const BurgerMenuLink = styled(Link)`
  cursor: pointer;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 5px 0;
  text-decoration: none;
  min-width: 208px;
`
export const BurgerMenuLinkList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 0 10px 0;
  gap: 16px;
`
export const BurgerMenuBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  background-image: url(${hamburgerIcon});
  background-position: center;
  background-repeat: no-repeat;
  width: 20px;
  height: 10px;
  color: #ffffff;
`
