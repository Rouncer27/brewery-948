import React from "react"
import styled from "styled-components"
import { colors, medWrapper, standardWrapper } from "../../../styles/helpers"

import HeaderMenuMain from "./HeaderMenuMain"

const HeaderNav = () => {
  return (
    <HeaderNavStyled>
      <div className="wrapperNav">
        <div className="navTop">
          <div className="navTop__wrapper">
            <HeaderMenuMain />
          </div>
        </div>
      </div>
    </HeaderNavStyled>
  )
}

const HeaderNavStyled = styled.div`
  .wrapperNav {
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    padding: 0;
  }

  .navTop {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    &__socialLinks {
      display: flex;
      align-items: center;
      width: 100%;
      background-color: ${colors.colorSecondary};

      @media (min-width: 768px) {
        width: calc(60%);
      }
    }
  }

  .navTop {
    width: 100%;
    padding: 0;

    @media (min-width: 768px) {
      padding: 1rem 0;
    }

    &__wrapper {
      ${standardWrapper};
      padding: 0 2rem;
    }
  }

  .navBot {
    width: 100%;
    padding: 0;
    background: ${colors.colorAccent};

    @media (min-width: 768px) {
      padding: 1rem 0;
    }

    &__wrapper {
      ${medWrapper};
      padding: 0 2rem;
    }
  }
`

export default HeaderNav
