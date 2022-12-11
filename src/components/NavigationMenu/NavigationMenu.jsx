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
      <S.NavigationMenuLinkDaily $IsLoading={isLoading} />
      <S.NavigationMenuLinkTop100 $IsLoading={isLoading} />
      <S.NavigationMenuLinkIndy $IsLoading={isLoading} />
    </S.NavigationMenu>
  )
}

export default NavigationMenu
