import React from 'react'
import styled from 'styled-components'
import HeroBtnReadMore from './HeroBtnReadMore'

const StyledHeroBoxTop = styled.div`
  height: 50%;
  background: #dededd;
  position: relative;
`

export default ({ id, isReadMoreButtonHovered, handlePointerHover }) => {
  return (
    <StyledHeroBoxTop>
      <HeroBtnReadMore
        id={id}
        text="Read more"
        isReadMoreButtonHovered={isReadMoreButtonHovered}
        handlePointerHover={handlePointerHover}
      />
    </StyledHeroBoxTop>
  )
}
