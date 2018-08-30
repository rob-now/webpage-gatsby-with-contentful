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
`

const StyledHeroBoxBottom = styled.div`
  height: 50%;
  background: #fff;
`

class Hero extends Component {
  render() {
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
                  <button type="button">
                    <div>1</div>
                    <div>2</div>
                  </button>
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
