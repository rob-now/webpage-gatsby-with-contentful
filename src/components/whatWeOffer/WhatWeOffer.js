import React from 'react'
import styled from 'styled-components'
import WhatWeOfferHeader from './WhatWeOfferHeader'
import WhatWeOfferBoxes from './WhatWeOfferBoxes'

const StyledWhatWeOfferContainer = styled.div`
  background: #fff;
  height: 636px;
`

const StyledContainerInner = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  height: 100%;
  position: relative;
  border: 1px solid blue;
`

export default ({ contentfulItems }) => {
  return (
    <StyledWhatWeOfferContainer>
      <StyledContainerInner>
        <WhatWeOfferHeader contentfulItems={contentfulItems} />
        <WhatWeOfferBoxes contentfulItems={contentfulItems} />
      </StyledContainerInner>
    </StyledWhatWeOfferContainer>
  )
}
