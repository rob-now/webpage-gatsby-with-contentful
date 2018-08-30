import React from 'react'
import styled from 'styled-components'

const StyledBtnCTA = styled.button`
  border-radius: 25px;
  width: 216px;
  height: 49px;
  background: #fdc300;
  color: #fff;
  position: absolute;
  bottom: 43px;
`

export default ({ text }) => {
  return <StyledBtnCTA type="button">{text}</StyledBtnCTA>
}
