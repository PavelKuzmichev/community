import React from 'react'
import { StyledHeaderInput } from './styles'
//import { Route, Switch} from 'react-router-dom'
import { useThemeContext } from '../../contexts/CurrentThemeContext.js'
const SearchInput = () => {
  const { theme } = useThemeContext()
  return (
    <StyledHeaderInput $IsTheme={theme} placeholder="Поиск"></StyledHeaderInput>
  )
}

export default SearchInput
