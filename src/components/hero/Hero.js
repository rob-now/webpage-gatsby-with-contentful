import React, { Component, Fragment } from 'react'
import Nav from '../nav/Nav'
import HeroTitle from './HeroTitle'
import styled from 'styled-components'
import HeroBoxes from './HeroBoxes'

const StyledHeroContainer = styled.div`
  background: #122636;
  padding-top: 43px;
  height: 852px;
  border-top: 1px solid #223443;
  border-bottom: 1px solid #223443;
`

const StyledHeroContainerBottom = styled.div`
  background: #1b2936;
  height: 335px;
`

const StyledContainerInner = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  position: relative;
`

class Hero extends Component {
  state = {
    isReadMoreButtonHovered: {
      1: false,
      2: false,
      3: false,
    },
  }

  handlePointerHover = position => {
    this.setState(prevState => ({
      isReadMoreButtonHovered: {
        ...prevState.isReadMoreButtonHovered,
        [position]: !prevState.isReadMoreButtonHovered[position],
      },
    }))
  }

  render() {
    const { isReadMoreButtonHovered } = this.state
    const { contentfulItems } = this.props

    return (
      <Fragment>
        <StyledHeroContainer>
          <StyledContainerInner>
            <Nav />
            <HeroTitle contentfulItems={contentfulItems} />
          </StyledContainerInner>
        </StyledHeroContainer>
        <StyledHeroContainerBottom>
          <StyledContainerInner>
            <HeroBoxes
              isReadMoreButtonHovered={isReadMoreButtonHovered}
              handlePointerHover={this.handlePointerHover}
              contentfulItems={contentfulItems}
            />
          </StyledContainerInner>
        </StyledHeroContainerBottom>
      </Fragment>
    )
  }
}

export default Hero
