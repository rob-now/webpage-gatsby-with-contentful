import React, { Fragment } from 'react'
import styled from 'styled-components'

const StyledWhatWeOfferBox = styled.div`
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-basis: 50%;
  border: 1px solid red;
  height: 187px;
`

export default ({ id, img, contentfulItems, titleId, descriptionId }) => {
  return (
    <StyledWhatWeOfferBox>
      {contentfulItems.map(
        item =>
          item.sys.contentType.sys.id === 'whatWeOffer' && (
            <Fragment key={`whatWeOfferBox${id}-${item.sys.id}`}>
              <img src={img} alt="" />
              <div>
                <h3>{item.fields[titleId]}</h3>
                <p>{item.fields[descriptionId]}</p>
              </div>
            </Fragment>
          )
      )}
    </StyledWhatWeOfferBox>
  )
}
