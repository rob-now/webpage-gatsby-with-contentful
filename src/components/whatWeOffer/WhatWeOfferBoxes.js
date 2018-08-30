import React from 'react'
import styled from 'styled-components'
import WhatWeOfferBox from './WhatWeOfferBox'
import wwo_icon1 from '../img/wwo_icon1.png'
import wwo_icon2 from '../img/wwo_icon2.png'
import wwo_icon3 from '../img/wwo_icon3.png'
import wwo_icon4 from '../img/wwo_icon4.png'

const StyledWhatWeOfferBoxes = styled.div`
  margin: 40px 0 70px;
  display: flex;
  flex-wrap: wrap;
`

export default ({ contentfulItems }) => {
  return (
    <StyledWhatWeOfferBoxes>
      <WhatWeOfferBox
        id={1}
        img={wwo_icon1}
        contentfulItems={contentfulItems}
        titleId="whatWeOfferBox1Title"
        descriptionId="whatWeOfferBox1Description"
      />
      <WhatWeOfferBox
        id={2}
        img={wwo_icon2}
        contentfulItems={contentfulItems}
        titleId="whatWeOfferBox2Title"
        descriptionId="whatWeOfferBox2Description"
      />
      <WhatWeOfferBox
        id={3}
        img={wwo_icon3}
        contentfulItems={contentfulItems}
        titleId="whatWeOfferBox3Title"
        descriptionId="whatWeOfferBox3Description"
      />
      <WhatWeOfferBox
        id={4}
        img={wwo_icon4}
        contentfulItems={contentfulItems}
        titleId="whatWeOfferBox4Title"
        descriptionId="whatWeOfferBox4Description"
      />
    </StyledWhatWeOfferBoxes>
  )
}
