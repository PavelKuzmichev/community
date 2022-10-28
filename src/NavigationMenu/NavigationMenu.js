import React from 'react'
import { bool } from 'prop-types'

import './NavigationMenu.scss'

function NavigationMenu({ isLoading }) {
  NavigationMenu.propTypes = {
    isLoading: bool,
  }
  let load = isLoading ? 'loading' : ''
  return (
    <div className="navigationMenu">
      <button
        className={`navigationMenu__link navigationMenu__link_daily-playList ${load}`}
      ></button>
      <button
        className={`navigationMenu__link navigationMenu__link_top-100 ${load}`}
      ></button>
      <button
        className={`navigationMenu__link navigationMenu__link_indy ${load}`}
      ></button>
    </div>
  )
}

export default NavigationMenu
