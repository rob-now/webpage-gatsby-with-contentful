import React, { Component, Fragment } from 'react'
import Nav from '../nav/Nav'
import HeroTitle from './HeroTitle'
import styled from 'styled-components'

const HeroContainer = styled.div`
  background: #122636;
  padding-top: 43px;
  height: 852px;
  border-top: 1px solid #223443;
  border-bottom: 1px solid #223443;
`

const HeroContainerBottom = styled.div`
  background: #1b2936;
  height: 335px;
`

const ContainerInner = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  position: relative;
`

const StyledHeroBoxesContainer = styled(ContainerInner)`
  display: flex;
  position: absolute;
  top: -200px;
`

const StyledHeroBox = styled.div`
  width: 360px;
  height: 400px;
  color: purple;
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
`

const StyledReadMoreButton = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  &:hover {
    cursor: pointer;
  }
`

const StyledReadMoreText = styled.span`
  width: 135px;
  height: 34px;
  line-height: 34px;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  background: #1b2936;
  color: #fff;
  transition: background 0.3s;

  ${({ hovered }) =>
    hovered &&
    `
      background: #006db7;
      transition: background 0.3s;
    `};
`

const StyledReadMoreArrow = styled.span`
  width: 30px;
  height: 34px;
  line-height: 30px;
  background: #2f3840;
  transition: background 0.3s;

  ${({ hovered }) =>
    hovered &&
    `
      background: #037ed1;
      transition: background 0.3s;
    `};
`

class Hero extends Component {
  state = {
    isReadMoreButtonHovered: false,
  }

  handleMouseHover = () => {
    this.setState(prevState => ({
      isReadMoreButtonHovered: !prevState.isReadMoreButtonHovered,
    }))
  }

  render() {
    const { isReadMoreButtonHovered } = this.state
    const { contentfulItems } = this.props

    return (
      <Fragment>
        <HeroContainer>
          <ContainerInner>
            <Nav />
            <HeroTitle contentfulItems={contentfulItems} />
          </ContainerInner>
        </HeroContainer>
        <HeroContainerBottom>
          <ContainerInner>
            <StyledHeroBoxesContainer>
              <StyledHeroBox>
                <StyledHeroBoxTop>
                  <StyledReadMoreButton
                    type="button"
                    onPointerEnter={this.handleMouseHover}
                    onPointerLeave={this.handleMouseHover}
                  >
                    <StyledReadMoreText hovered={isReadMoreButtonHovered}>
                      Read more
                    </StyledReadMoreText>
                    <StyledReadMoreArrow hovered={isReadMoreButtonHovered}>
                      <svg
                        aria-hidden="true"
                        data-prefix="fas"
                        data-icon="angle-right"
                        width="6px"
                        height="9px"
                        class="svg-inline--fa fa-angle-right fa-w-8"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 512"
                      >
                        <path
                          fill="#fff"
                          d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                        />
                      </svg>
                    </StyledReadMoreArrow>
                  </StyledReadMoreButton>
                </StyledHeroBoxTop>
                <StyledHeroBoxBottom>Bottom</StyledHeroBoxBottom>
              </StyledHeroBox>
              <StyledHeroBoxMiddle>
                <StyledHeroBox>
                  <StyledHeroBoxTop>Top</StyledHeroBoxTop>
                  <StyledHeroBoxBottom>Bottom</StyledHeroBoxBottom>
                </StyledHeroBox>
              </StyledHeroBoxMiddle>
              <StyledHeroBox>
                <StyledHeroBox>
                  <StyledHeroBoxTop>Top</StyledHeroBoxTop>
                  <StyledHeroBoxBottom>Bottom</StyledHeroBoxBottom>
                </StyledHeroBox>
              </StyledHeroBox>
            </StyledHeroBoxesContainer>
          </ContainerInner>
        </HeroContainerBottom>
      </Fragment>
    )
  }
}

export default Hero
