import React, { Fragment } from 'react'
import styled from 'styled-components'

const StyledHeroBoxBottom = styled.div`
  height: 50%;
  background: #fff;
  padding: 0 28px;
`

const StyledH3 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  // line-height: 60px;
  color: #333;
  text-transform: uppercase;
  margin: 44px 0 24px;
  position: relative;
`

const StyledParagraph = styled.p`
  font-size: 13px;
  line-height: 20px;
  color: #777;
`

const StyledLine = styled.span`
  position: absolute;
  left: 0;
  top: -9px;
  width: 30px;
  border-bottom: 3px solid #fdc300;
`

export default ({ position, titleId, descriptionId, contentfulItems }) => {
  return (
    <StyledHeroBoxBottom>
      {contentfulItems.map(item => (
        <Fragment key={`heroBox${position}-${item.sys.id}`}>
          <StyledH3>
            {item.fields[titleId] || 'Lorem ipsum'}
            <StyledLine />
          </StyledH3>
          <StyledParagraph>
            {item.fields[descriptionId] ||
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus nulla labore provident repellendus assumenda consequatur...'}
          </StyledParagraph>
        </Fragment>
      ))}
    </StyledHeroBoxBottom>
  )
}
