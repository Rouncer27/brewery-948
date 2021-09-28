import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  B1White,
  colors,
  colorSecondary,
  H1White,
} from "../../../styles/helpers"

const TaproomCard = () => {
  return (
    <TaproomCardStyled className="beer-card">
      <div className="tap__inner">
        <p>
          <Link to="/contact">Visit Our Taproom </Link>
        </p>
      </div>
    </TaproomCardStyled>
  )
}

const TaproomCardStyled = styled.div`
  display: flex;
  position: relative;
  width: calc((100vw / 2) - 1rem);
  height: calc((100vw / 2) - 1rem);
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #242424;

  @media (min-width: 768px) {
    width: calc((100vw / 4) - 1.5rem);
    height: calc((100vw / 4) - 1.5rem);
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .tap__inner {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 1rem;
    padding: 2rem;
    border: solid 0.2rem ${colors.white};
    text-align: center;
  }

  p,
  a {
    ${H1White};
    width: 100%;
    margin: 0;
    text-transform: uppercase;
  }

  a:hover {
    color: ${colors.colorSecondary};
  }
`

export default TaproomCard
