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
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  transition: background 0.3s;
  &: hover {
    background: #ffca16;
    transition: background 0.3s;
  }
`

export default ({ contentfulItems }) => {
  return contentfulItems
    .filter(item => item.sys.contentType.sys.id === 'hero')
    .map(item => (
      <StyledBtnCTA key={`CTAButton${item.sys.id}`} type="button">
        {item.fields.heroCtaButton}
      </StyledBtnCTA>
    ))
}
