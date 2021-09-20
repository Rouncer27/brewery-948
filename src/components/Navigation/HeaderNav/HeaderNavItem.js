import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { colors, Btn1Green, Nav1Black } from "../../../styles/helpers"

import HeaderSubMenu from "./HeaderSubMenu"

const HeaderNavItem = ({ item }) => {
  const slug = item.url
    .split("/")
    .filter(item => item !== "")
    .filter(item => item !== "https:")
    .filter(item => item !== "http:")
    .filter(item => item !== process.env.GATSBY_WORDPRESS_URL)
    .join("/")
  const [subActive, setSubActive] = useState(false)

  const handleIsActiveOn = () => {
    setSubActive(true)
  }

  const handleIsActiveOff = () => {
    setSubActive(false)
  }

  return (
    <HeaderNavItemStyled>
      <Link
        to={`/${slug}`}
        onMouseEnter={handleIsActiveOn}
        onMouseLeave={handleIsActiveOff}
        onFocus={handleIsActiveOn}
      >
        {item.label}
      </Link>

      {item.subItems.length > 0 && (
        <>
          <span className="subIndicator">&#x25BC;</span>
          <HeaderSubMenu
            handleIsActiveOn={handleIsActiveOn}
            handleIsActiveOff={handleIsActiveOff}
            handleIsActiveOffBlur={handleIsActiveOff}
            subActive={subActive}
            items={item.subItems}
          />
        </>
      )}
    </HeaderNavItemStyled>
  )
}

const HeaderNavItemStyled = styled.li`
  flex-grow: 1;
  padding: 0 1rem;
  position: relative;
  align-self: center;
  text-align: center;

  a,
  button {
    ${Nav1Black};
    margin: 0 auto;
    border-top: 0.2rem solid ${colors.colorSecondary};
    border-bottom: 0.2rem solid ${colors.colorSecondary};
    border-color: transparent;
    text-transform: uppercase;
    text-align: center;
    transition: all 0.35s ease-in-out;

    &:hover {
      border-color: ${colors.colorSecondary};
      color: ${colors.colorAccent};
    }

    &[aria-current="page"] {
      color: ${colors.colorAccent};
      border-color: ${colors.colorSecondary};

      &:hover {
        color: ${colors.colorAccent};
        cursor: default;
      }
    }

    &:focus {
      outline: 0.4rem solid #d57b2e;
      transition: all 0.35s ease-in-out;
    }
  }

  button {
    ${Btn1Green};
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    background-color: transparent;
  }

  .subIndicator {
    display: inline-block;
    color: ${colors.white};
    font-size: 1rem;
    padding-left: 0.5rem;
  }
`

export default HeaderNavItem
