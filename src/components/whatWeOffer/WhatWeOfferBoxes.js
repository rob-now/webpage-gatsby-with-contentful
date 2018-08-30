import React from 'react'
import styled from 'styled-components'

const StyledWhatWeOfferBoxes = styled.div`
  margin: 40px 0 70px;
  display: flex;
  flex-wrap: wrap;
`

const StyledWhatWeOfferBox = styled.div`
  flex-basis: 50%;
  border: 1px solid red;
  height: 187px;
`

export default () => {
  return (
    <StyledWhatWeOfferBoxes>
      <StyledWhatWeOfferBox>1</StyledWhatWeOfferBox>
      <StyledWhatWeOfferBox>2</StyledWhatWeOfferBox>
      <StyledWhatWeOfferBox>3</StyledWhatWeOfferBox>
      <StyledWhatWeOfferBox>4</StyledWhatWeOfferBox>
    </StyledWhatWeOfferBoxes>
  )
}
