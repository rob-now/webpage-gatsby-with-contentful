import React, { Fragment } from 'react'
import styled from 'styled-components'
import HeroBoxTitle from './HeroBoxTitle'
import HeroBoxDescription from './HeroBoxDescription'

const StyledHeroBoxBottom = styled.div`
  height: 50%;
  background: #fff;
  padding: 0 28px;
`

export default ({ id, titleId, descriptionId, contentfulItems }) => {
  return (
    <StyledHeroBoxBottom>
      {contentfulItems
        .filter(item => item.sys.contentType.sys.id === 'hero')
        .map(item => (
          <Fragment key={`heroBox${id}-${item.sys.id}`}>
            <HeroBoxTitle item={item} titleId={titleId} />
            <HeroBoxDescription item={item} descriptionId={descriptionId} />
          </Fragment>
        ))}
    </StyledHeroBoxBottom>
  )
}
