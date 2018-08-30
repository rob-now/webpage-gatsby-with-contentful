import React from 'react'
import styled from 'styled-components'

const StyledH3 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  margin: 44px 0 24px;
  position: relative;
`

const StyledLine = styled.span`
  position: absolute;
  left: 0;
  top: -9px;
  width: 30px;
  border-bottom: 3px solid #fdc300;
`

export default ({ item, titleId }) => {
  return (
    <StyledH3>
      {item.fields[titleId] || 'Lorem ipsum'}
      <StyledLine />
    </StyledH3>
  )
}
