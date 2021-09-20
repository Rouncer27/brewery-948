import React from "react"
import styled from "styled-components"
import { colors, medWrapper, standardWrapper } from "../../../styles/helpers"

import HeaderMenuMain from "./HeaderMenuMain"

const HeaderNav = () => {
  return (
    <HeaderNavStyled>
      <div className="navTop">
        <div className="navTop__wrapper">
          <HeaderMenuMain />
        </div>
      </div>
    </HeaderNavStyled>
  )
}

const HeaderNavStyled = styled.div`
  background-color: #242424;

  .navTop {
    width: 100%;
    padding: 0;
  }
`

export default HeaderNav
