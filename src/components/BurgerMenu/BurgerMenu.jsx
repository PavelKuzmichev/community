import React from 'react'
import { Fragment } from 'react'
import * as S from './styles'

function BurgerMenu() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false)
  const toggleBurgerMenuOpen = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen)
  }
  return (
    <S.BurgerMenu>
      <S.BurgerMenuBtn type="button" onClick={toggleBurgerMenuOpen} />
      {isBurgerMenuOpen && (
        <Fragment>
          <S.BurgerMenuLinkList>
            <S.BurgerMenuLink exact={'true'} to="/">
              Главное
            </S.BurgerMenuLink>

            <S.BurgerMenuLink to="/user-playlist">Мои треки</S.BurgerMenuLink>

            <S.BurgerMenuLink to="/signin">Войти</S.BurgerMenuLink>
          </S.BurgerMenuLinkList>
        </Fragment>
      )}
    </S.BurgerMenu>
  )
}

export default BurgerMenu
