import styled from 'styled-components'

export const StyledHeaderInput = styled.input`
  max-width: 1085px;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: inherit;
  background-color: transparent;
  border-bottom: 1px solid
    ${(props) => (props.$IsTheme.dark ? '#4e4e4e' : '#D9D9D9')};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
`
