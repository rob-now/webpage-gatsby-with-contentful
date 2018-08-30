import React from 'react'
import styled from 'styled-components'
import HeroBoxBottom from './HeroBoxBottom'
import HeroBoxTop from './HeroBoxTop'

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

export default ({
  isReadMoreButtonHovered,
  handlePointerHover,
  contentfulItems,
}) => {
  return (
    <StyledHeroBoxesContainer>
      <StyledHeroBox>
        <HeroBoxTop
          id={1}
          isReadMoreButtonHovered={isReadMoreButtonHovered}
          handlePointerHover={handlePointerHover}
        />
        <HeroBoxBottom
          id={1}
          titleId="heroBox1Title"
          descriptionId="heroBox1Description"
          contentfulItems={contentfulItems}
        />
      </StyledHeroBox>
      <StyledHeroBoxMiddle>
        <StyledHeroBox>
          <HeroBoxTop
            id={2}
            isReadMoreButtonHovered={isReadMoreButtonHovered}
            handlePointerHover={handlePointerHover}
          />
          <HeroBoxBottom
            id={2}
            titleId="heroBox2Title"
            descriptionId="heroBox2Description"
            contentfulItems={contentfulItems}
          />
        </StyledHeroBox>
      </StyledHeroBoxMiddle>
      <StyledHeroBox>
        <StyledHeroBox>
          <HeroBoxTop
            id={3}
            isReadMoreButtonHovered={isReadMoreButtonHovered}
            handlePointerHover={handlePointerHover}
          />
          <HeroBoxBottom
            id={3}
            titleId="heroBox3Title"
            descriptionId="heroBox3Description"
            contentfulItems={contentfulItems}
          />
        </StyledHeroBox>
      </StyledHeroBox>
    </StyledHeroBoxesContainer>
  )
}
