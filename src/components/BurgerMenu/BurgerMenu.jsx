import React from 'react'
import { Fragment } from 'react'
import * as S from './styles'
import { useThemeContext } from '../../contexts/CurrentThemeContext.js'
function BurgerMenu() {
  const { toggleTheme, theme } = useThemeContext()
  const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false)
  const toggleBurgerMenuOpen = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen)
  }

  console.log(theme)
  return (
    <S.BurgerMenu>
      <S.BurgerMenuBtn
        $IsTheme={theme}
        type="button"
        onClick={toggleBurgerMenuOpen}
      />
      {isBurgerMenuOpen && (
        <Fragment>
          <S.BurgerMenuLinkList>
            <S.BurgerMenuLink exact={'true'} to="/">
              Главное
            </S.BurgerMenuLink>
            <S.BurgerMenuLink to="/user-playlist">Мои треки</S.BurgerMenuLink>
            <S.BurgerMenuLink to="/signin">Войти</S.BurgerMenuLink>
            <S.BurgerMenuBtnTheme
              $IsTheme={theme}
              type="button"
              onClick={toggleTheme}
            />
          </S.BurgerMenuLinkList>
        </Fragment>
      )}
    </S.BurgerMenu>
  )
}

export default BurgerMenu
