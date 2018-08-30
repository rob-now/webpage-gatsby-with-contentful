import React from 'react'
import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-size: 13px;
  line-height: 20px;
  color: #777;
`

export default ({ item, descriptionId }) => {
  return (
    <StyledParagraph>
      {item.fields[descriptionId] ||
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatibus nulla labore provident repellendus assumenda consequatur...'}
    </StyledParagraph>
  )
}
