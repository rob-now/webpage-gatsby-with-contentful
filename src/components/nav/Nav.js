import React, { Fragment } from 'react'
import styled from 'styled-components'
import Brand from './Brand'
import NavList from './NavList'

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

const Nav = () => (
  <Fragment>
    <StyledNavigation>
      <Brand />
      <NavList />
    </StyledNavigation>
  </Fragment>
)

export default Nav
