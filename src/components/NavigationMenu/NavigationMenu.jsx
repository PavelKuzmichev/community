import React from 'react'
import { bool } from 'prop-types'
import * as S from './styles'

function NavigationMenu({ isLoading }) {
  NavigationMenu.propTypes = {
    isLoading: bool,
  }
  // let load = isLoading ? 'loading' : ''
  return (
    <S.NavigationMenu>
      <S.NavigationMenuLinkDaily
        $IsLoading={isLoading}
      ></S.NavigationMenuLinkDaily>
      <S.NavigationMenuLinkTop100
        $IsLoading={isLoading}
      ></S.NavigationMenuLinkTop100>
      <S.NavigationMenuLinkIndy
        $IsLoading={isLoading}
      ></S.NavigationMenuLinkIndy>
    </S.NavigationMenu>
  )
}

export default NavigationMenu
