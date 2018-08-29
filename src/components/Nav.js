import React, { Fragment } from 'react'
import styled from 'styled-components'

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  background: #fdfdfd;
`

const NavigationBrand = styled.div`
  display: flex;
  align-items: center;
`

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
`

const BrandTextMain = styled.span`
  text-transform: uppercase;
`

const NavigationItems = styled.ul`
  list-style-type: none;
  display: flex;
`

const Nav = () => (
  <Fragment>
    <Navigation>
      <NavigationBrand>
        <div>logo</div>
        <BrandText>
          <BrandTextMain>Trucking</BrandTextMain>
          <span>Lotistics & Transportation</span>
        </BrandText>
      </NavigationBrand>
      <NavigationItems>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Locations</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <button type="button">Search</button>
        </li>
      </NavigationItems>
    </Navigation>
  </Fragment>
)

export default Nav
