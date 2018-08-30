import React, { Component, Fragment } from 'react'
import Nav from '../nav/Nav'
import HeroTitle from './HeroTitle'
import styled from 'styled-components'
import ReadMoreButton from './ReadMoreButton'
import HeroBoxBottom from './HeroBoxBottom'

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

const StyledHeroBoxesContainer = styled(StyledContainerInner)`
  display: flex;
  position: absolute;
  top: -200px;
`

const StyledHeroBox = styled.div`
  width: 360px;
  height: 400px;
  display: flex;
  flex-direction: column;
`

const StyledHeroBoxMiddle = styled(StyledHeroBox)`
  margin: 0 30px;
`

const StyledHeroBoxTop = styled.div`
  height: 50%;
  background: #dededd;
  position: relative;
`

const StyledHeroBoxBottom = styled.div`
  height: 50%;
  background: #fff;
  padding: 0 28px;
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
            <StyledHeroBoxesContainer>
              <StyledHeroBox>
                <StyledHeroBoxTop>
                  <ReadMoreButton
                    position={1}
                    text="Read more"
                    isReadMoreButtonHovered={isReadMoreButtonHovered}
                    handlePointerHover={this.handlePointerHover}
                  />
                </StyledHeroBoxTop>
                <HeroBoxBottom
                  position={1}
                  titleId="heroBox1Title"
                  descriptionId="heroBox1Description"
                  contentfulItems={contentfulItems}
                />
              </StyledHeroBox>
              <StyledHeroBoxMiddle>
                <StyledHeroBox>
                  <StyledHeroBoxTop>
                    <ReadMoreButton
                      position={2}
                      text="Read more"
                      isReadMoreButtonHovered={isReadMoreButtonHovered}
                      handlePointerHover={this.handlePointerHover}
                    />
                  </StyledHeroBoxTop>
                  <StyledHeroBoxBottom>Bottom</StyledHeroBoxBottom>
                </StyledHeroBox>
              </StyledHeroBoxMiddle>
              <StyledHeroBox>
                <StyledHeroBox>
                  <StyledHeroBoxTop>
                    <ReadMoreButton
                      position={3}
                      text="Read more"
                      isReadMoreButtonHovered={isReadMoreButtonHovered}
                      handlePointerHover={this.handlePointerHover}
                    />
                  </StyledHeroBoxTop>
                  <StyledHeroBoxBottom>Bottom</StyledHeroBoxBottom>
                </StyledHeroBox>
              </StyledHeroBox>
            </StyledHeroBoxesContainer>
          </StyledContainerInner>
        </StyledHeroContainerBottom>
      </Fragment>
    )
  }
}

export default Hero
