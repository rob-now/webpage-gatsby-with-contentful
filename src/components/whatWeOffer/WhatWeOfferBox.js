import React, { Fragment } from 'react'
import styled from 'styled-components'

const StyledWhatWeOfferBox = styled.div`
  display: flex;
  align-items: center;
  height: 182px;
  width: 555px;
  background: #fcfcfc;

  ${({ id }) =>
    id === 1
      ? `margin: 0 28px 28px 0;`
      : id === 4
        ? `margin: 0 0 0 28px;`
        : null};

  @media screen and (max-width: 1199.9px) {
    margin: 30px;
  }

  @media screen and (max-width: 575.9px) {
    flex-direction: column;
    justify-content: center;
    height: 300px;
    margin: 28px 0;
  }
`

const StyledWwoBoxIcon = styled.img`
  padding: 0 30px;
`

const StyledH3 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;

  @media screen and (max-width: 575.9px) {
    margin-top: 1.45rem;
  }
`

const StyledParagraph = styled.p`
  font-size: 13px;
  line-height: 20px;
  color: #777;
`

const StyledWwoBoxContent = styled.div`
  margin-right: 28px;

  @media screen and (max-width: 575.9px) {
    margin-left: 28px;
  }
`

export default ({ id, img, contentfulItems, titleId, descriptionId }) => {
  return (
    <StyledWhatWeOfferBox id={id}>
      {contentfulItems.map(
        item =>
          item.sys.contentType.sys.id === 'whatWeOffer' && (
            <Fragment key={`whatWeOfferBox${id}-${item.sys.id}`}>
              <StyledWwoBoxIcon src={img} alt={item.fields[titleId]} />
              <StyledWwoBoxContent>
                <StyledH3>{item.fields[titleId] || 'Lorem ipsum'}</StyledH3>
                <StyledParagraph>
                  {item.fields[descriptionId] ||
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus nulla labore provident repellendus assumenda consequatur...'}
                </StyledParagraph>
              </StyledWwoBoxContent>
            </Fragment>
          )
      )}
    </StyledWhatWeOfferBox>
  )
}
