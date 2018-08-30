import React from 'react'
import styled from 'styled-components'
import ReadMoreButton from './ReadMoreButton'

const StyledHeroBoxTop = styled.div`
  height: 50%;
  background: #dededd;
  position: relative;
`

export default ({ id, isReadMoreButtonHovered, handlePointerHover }) => {
  return (
    <StyledHeroBoxTop>
      <ReadMoreButton
        id={id}
        text="Read more"
        isReadMoreButtonHovered={isReadMoreButtonHovered}
        handlePointerHover={handlePointerHover}
      />
    </StyledHeroBoxTop>
  )
}
