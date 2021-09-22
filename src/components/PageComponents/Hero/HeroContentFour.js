import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  Btn1Orange,
  H2White,
  standardWrapper,
  fontSizer,
} from "../../../styles/helpers"

const HeroConentFour = ({ content, slug, btnText }) => {
  return (
    <DivStyled>
      <div className="inner-wrap">
        <div className="hero-content__content">
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>
        <div className="hero-content__link">
          <Link to={`/${slug}`}>{btnText}</Link>
        </div>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 2rem;
  background-color: rgba(36, 36, 36, 0.8);

  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 1025px) {
    padding: 6rem 0;
  }

  .inner-wrap {
    ${standardWrapper};
    align-items: center;
  }

  .hero-content__content {
    width: 100%;
    margin-top: 2rem;
    text-align: center;

    p {
      ${H2White};
      ${fontSizer(2.8, 4, 76.8, 150, 1.8)};
      margin-bottom: 0;
    }
  }

  .hero-content__link {
    width: 100%;
    margin-top: 5rem;
    text-align: center;

    a {
      ${Btn1Orange};
    }
  }
`

export default HeroConentFour
