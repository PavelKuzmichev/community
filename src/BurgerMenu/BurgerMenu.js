import React from 'react'
import { NavLink } from 'react-router-dom'
import { Fragment } from 'react'
import './BurgerMenu.scss'

function BurgerMenu() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = React.useState(false)
  const toggleBurgerMenuOpen = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen)
  }
  return (
    <div className={`burger-menu`}>
      <button
        className="burger-menu__close-btn"
        type="button"
        onClick={toggleBurgerMenuOpen}
      />
      {isBurgerMenuOpen && (
        <Fragment>
          <div className="burger-menu__link-list">
            <NavLink exact={'true'} to="/" className="burger-menu__link">
              Главное
            </NavLink>

            <NavLink to="/user-playlist" className="burger-menu__link">
              Фильмы
            </NavLink>

            <NavLink to="/signin" className="burger-menu__link">
              Войти
            </NavLink>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default BurgerMenu
