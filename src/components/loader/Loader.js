import React from 'react'
import styled from 'styled-components'
import spinner from '../img/spinner.gif'

const StyledLoader = styled.img`
  width: 64px;
  margin: 20vh auto 0;
  display: block;
`

export default () => {
  return <StyledLoader src={spinner} alt="Animated spinner" />
}
