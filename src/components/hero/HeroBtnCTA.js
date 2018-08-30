import React from 'react'
import styled from 'styled-components'

const StyledBtnCTA = styled.button`
  border: none;
  border-radius: 25px;
  width: 216px;
  height: 49px;
  background: #fdc300;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  position: absolute;
  bottom: 43px;
  &:hover {
    cursor: pointer;
  }
`

export default ({ text }) => {
  return <StyledBtnCTA type="button">{text}</StyledBtnCTA>
}
