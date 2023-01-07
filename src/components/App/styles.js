import styled from 'styled-components'

export const StyledApp = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  background: ${(props) => props.$IsTheme.background};
  color: ${(props) => props.$IsTheme.color};
`
