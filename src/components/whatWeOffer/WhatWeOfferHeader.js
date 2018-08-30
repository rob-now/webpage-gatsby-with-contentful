import React, { Fragment } from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  font-size: 30px;
  color: #333;
  padding: 70px 0 12px;
  margin: 0;
  text-align: center;
`

const StyledSubTitle = styled.span`
  font-size: 13px;
  color: #888;
  text-transform: uppercase;
  display: block;
  text-align: center;
  padding: 0 0 15px;
`

const StyledLine = styled.span`
  display: block;
  width: 30px;
  border-bottom: 3px solid #fdc300;
  margin: 0 auto;
`

export default ({ title, subTitle }) => {
  return (
    <Fragment>
      <StyledH2>{title}</StyledH2>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
      <StyledLine />
    </Fragment>
  )
}
