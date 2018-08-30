import React, { Component, Fragment } from 'react'
import Nav from '../nav/Nav'
import HeroTitle from './HeroTitle'
import styled from 'styled-components'
import ReadMoreButton from './ReadMoreButton'

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

class Hero extends Component {
  state = {
    isReadMoreButtonHovered: {
      left: false,
      middle: false,
      right: false,
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
                    position="left"
                    text="Read more"
                    isReadMoreButtonHovered={isReadMoreButtonHovered}
                    handlePointerHover={this.handlePointerHover}
                  />
                </StyledHeroBoxTop>
                <StyledHeroBoxBottom>
                  {contentfulItems.map(item => (
                    <Fragment key={`heroBoxLeft-${item.sys.id}`}>
                      <StyledH3>
                        {item.fields.heroBox1Title}
                        <StyledLine />
                      </StyledH3>
                      <StyledParagraph>
                        {item.fields.heroBox1Description}
                      </StyledParagraph>
                    </Fragment>
                  ))}
                </StyledHeroBoxBottom>
              </StyledHeroBox>
              <StyledHeroBoxMiddle>
                <StyledHeroBox>
                  <StyledHeroBoxTop>
                    <ReadMoreButton
                      position="middle"
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
                      position="right"
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
