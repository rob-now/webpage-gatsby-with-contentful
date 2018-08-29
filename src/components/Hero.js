import React, { Component } from 'react'
import Nav from './Nav'
import HeroTitle from './HeroTitle'
import styled from 'styled-components'

const HeroContainer = styled.div`
  background: #122636;
  padding-top: 43px;
`

const ContainerInner = styled.div`
  margin: 0 auto;
  max-width: 1140px;
`

class Hero extends Component {
  render() {
    const { contentfulItems } = this.props

    return (
      <HeroContainer>
        <ContainerInner>
          <Nav />

          <HeroTitle contentfulItems={contentfulItems} />
        </ContainerInner>
      </HeroContainer>
    )
  }
}

export default Hero
