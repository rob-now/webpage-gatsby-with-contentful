import React, { Fragment } from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'
import Link from 'gatsby-link'

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="35px"
            height="35px"
          >
            <path
              fillRule="evenodd"
              fill="rgb(0, 109, 183)"
              d="M17.500,-0.001 C27.165,-0.001 35.000,7.835 35.000,17.500 C35.000,27.164 27.165,34.999 17.500,34.999 C7.835,34.999 -0.000,27.164 -0.000,17.500 C-0.000,7.835 7.835,-0.001 17.500,-0.001 Z"
            />
            <path
              fillRule="evenodd"
              fill="rgb(255, 255, 255)"
              d="M24.005,23.628 L23.617,24.016 C23.227,24.406 22.594,24.406 22.204,24.016 L19.761,21.573 C18.884,22.123 17.847,22.441 16.736,22.441 C13.585,22.441 11.030,19.886 11.030,16.735 C11.030,13.584 13.585,11.029 16.736,11.029 C19.887,11.029 22.442,13.584 22.442,16.735 C22.442,17.853 22.120,18.895 21.565,19.775 L24.005,22.216 C24.395,22.606 24.395,23.238 24.005,23.628 ZM16.736,12.608 C14.457,12.608 12.609,14.456 12.609,16.735 C12.609,19.014 14.457,20.862 16.736,20.862 C19.015,20.862 20.863,19.014 20.863,16.735 C20.863,14.456 19.015,12.608 16.736,12.608 Z"
            />
          </svg>
        </StyledNavigationSearchIcon>
      </StyledNavigationList>
    </StyledNavigation>
  </Fragment>
)

export default Nav
