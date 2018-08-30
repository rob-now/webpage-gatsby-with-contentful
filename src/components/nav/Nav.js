import React, { Fragment } from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'
import Link from 'gatsby-link'
import SearchIcon from './SearchIcon'

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 81px;
  background: #fdfdfd;
  margin: 0 auto;
  max-width: 1140px;
  width: 100%;
  border-radius: 5px;
  -webkit-box-shadow: 0px -8px 0px 0px rgba(255, 255, 255, 0.4);
  -moz-box-shadow: 0px -8px 0px 0px rgba(255, 255, 255, 0.4);
  box-shadow: 0px -8px 0px 0px rgba(255, 255, 255, 0.4);
`

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

const StyledNavigationList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`

const StyledNavigationItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin: 0 23px 0 0;
  height: 100%;
  &:hover {
    background: #f6f6f6;
    cursor: pointer;
  }
`

const StyledNavigationLink = styled.a`
  text-decoration: none;
  color: #333;
`

const StyledNavigationSearchIcon = styled.li`
  margin: 0 30px 0 0;
  padding: 0;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`

const LinkActive = {
  position: 'relative',
  height: '100%',
}

const StyledNavigationUnderline = styled.span`
  position: absolute;
  bottom: 0;
  border-bottom: 5px solid #006db7;
  width: 60px;
`

const Nav = () => (
  <Fragment>
    <StyledNavigation>
      <StyledNavigationBrand>
        <StyledLogo src={logo} alt="StyledLogo" />
        <StyledBrandText>
          <StyledBrandTextMain>Trucking</StyledBrandTextMain>
          <StyledBrandTextSecondary>
            Logistics & Transportation
          </StyledBrandTextSecondary>
        </StyledBrandText>
      </StyledNavigationBrand>
      <StyledNavigationList>
        <Link exact to="/" activeStyle={LinkActive}>
          <StyledNavigationItem>Home</StyledNavigationItem>
          <StyledNavigationUnderline />
        </Link>
        <StyledNavigationItem>
          <StyledNavigationLink href="#">About us</StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink href="#">Services</StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink href="#">News</StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink href="#">Locations</StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink href="#">Contact</StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationSearchIcon>
          <SearchIcon />
        </StyledNavigationSearchIcon>
      </StyledNavigationList>
    </StyledNavigation>
  </Fragment>
)

export default Nav
