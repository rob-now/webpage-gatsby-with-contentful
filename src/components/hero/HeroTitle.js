import React, { Component } from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  text-transform: uppercase;
  width: 320px;
  line-height: 32px;
  padding-top: 312px;
  color: #fff;
`

class HeroTitle extends Component {
  render() {
    const { contentfulItems } = this.props
    console.log(contentfulItems)

    return (
      <div>
        {contentfulItems.map(item => (
          <H1 key={`heroTitle-${item.sys.id}`}>{item.fields.heroTitle}</H1>
        ))}
      </div>
    )
  }
}

export default HeroTitle
