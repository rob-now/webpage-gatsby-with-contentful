import React from 'react'
import logo from '../img/logo.png'
import styled from 'styled-components'

const StyledLogo = styled.img`
  margin: 0 23px;
`

const StyledNavigationBrand = styled.div`
  display: flex;
  align-items: center;
`

const StyledBrandText = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledBrandTextMain = styled.span`
  text-transform: uppercase;
  color: #010101;
  font-size: 26px;
  line-height: 30px;
  font-weight: bold;
`

const StyledBrandTextSecondary = styled.span`
  font-size: 11px;
  line-height: 10px;
  color: #777;
`

export default () => {
  return (
    <StyledNavigationBrand>
      <StyledLogo src={logo} alt="StyledLogo" />
      <StyledBrandText>
        <StyledBrandTextMain>Trucking</StyledBrandTextMain>
        <StyledBrandTextSecondary>
          Logistics & Transportation
        </StyledBrandTextSecondary>
      </StyledBrandText>
    </StyledNavigationBrand>
  )
}
