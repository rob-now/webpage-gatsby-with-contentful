import React, { Component } from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  text-transform: uppercase;
  width: 550px;
  line-height: 60px;
  padding-top: 188px;
  color: #fff;
  font-size: 72px;
  position: relative;
`

const StyledLine = styled.span`
  position: absolute;
  top: 171px;
  left: 2px;
  border-bottom: 4px solid #fdc300;
  width: 66px;
`

class HeroTitle extends Component {
  render() {
    const { contentfulItems } = this.props
    console.log(contentfulItems)

    return (
      <div>
        {contentfulItems.map(
          item =>
            item.sys.contentType.sys.id === 'hero' && (
              <H1 key={`heroTitle-${item.sys.id}`}>
                <StyledLine />
                {item.fields.heroTitle || 'Lorem ipsum'}
              </H1>
            )
        )}
      </div>
    )
  }
}

export default HeroTitle
