import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import SearchIcon from './SearchIcon'

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
  transition: background 0.3s;
  &:hover {
    background: #f6f6f6;
    cursor: pointer;
    transition: background 0.3s;
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

export default () => {
  return (
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
  )
}
