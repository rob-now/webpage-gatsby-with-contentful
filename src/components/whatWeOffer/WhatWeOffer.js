import React from 'react'
import styled from 'styled-components'
import WhatWeOfferHeader from './WhatWeOfferHeader'

const StyledWhatWeOfferContainer = styled.div`
  background: #fff;
  // padding-top: 43px;
  height: 636px;
`

const StyledContainerInner = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  height: 100%;
  position: relative;
`

export default () => {
  return (
    <StyledWhatWeOfferContainer>
      <StyledContainerInner>
        <WhatWeOfferHeader
          title="What we Offer"
          subTitle="Tailored logistic services"
        />
      </StyledContainerInner>
    </StyledWhatWeOfferContainer>
  )
}
