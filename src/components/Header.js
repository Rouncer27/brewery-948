import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import MainLogo from "./Logos/MainLogo"
import HeaderNav from "./Navigation/HeaderNav/HeaderNav"
import MobileNav from "./Navigation/MobileNav/MobileNav"

const Header = ({ siteTitle }) => (
  <StyledHeader role="banner" className="site-header">
    <div className="headerLogo">
      <h1>
        <Link to="/">
          <MainLogo />
          <span>{siteTitle}</span>
        </Link>
      </h1>
    </div>
    <HeaderNav />
    <MobileNav />
  </StyledHeader>
)

const StyledHeader = styled.header`
  position: relative;

  .headerLogo {
    width: 17.5rem;
    margin: 3rem auto;

    @media (min-width: 768px) {
      width: 15vw;
    }

    @media (min-width: 1025px) {
      position: absolute;
      top: 0;
      left: 5%;
      width: 12.5vw;
      margin: 0;
    }

    a {
      width: 100%;
      display: block;
      margin: auto;

      &:focus {
        outline: 0.4rem solid #003b49;
        transition: outline-width 0.35s ease-in-out;
      }
    }

    h1 {
      width: 100%;
      margin: 0;
      padding: 0;

      span {
        position: absolute;
        left: -999%;
      }

      @media (min-width: 768px) {
        width: calc(100%);
      }

      @media (min-width: 1025px) {
        width: calc(100%);
      }
    }
  }
`

export default Header
