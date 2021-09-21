import React from "react"
import styled from "styled-components"
import { H2White, H3Orange, standardWrapper } from "../../../styles/helpers"

const HeroConentThree = ({ title, content }) => {
  return (
    <DivStyled>
      <div className="inner-wrap">
        <div className="hero-content__title">
          <h2>{title}</h2>
        </div>
        <div className="hero-content__content">
          <p dangerouslySetInnerHTML={{ __html: content }} />
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
  top: 50%;
  left: 0;
  width: 100%;
  margin: auto;
  padding: 2rem;
  background-color: rgba(36, 36, 36, 0.8);
  transform: translate(0%, -50%);

  @media (min-width: 768px) {
    padding: 0 2rem;
    max-width: 100%;
  }

  @media (min-width: 1025px) {
    padding: 6rem 0;
  }

  .inner-wrap {
    ${standardWrapper};
    align-items: center;
    max-width: 75rem !important;
  }

  .hero-content__title {
    width: 100%;
    text-align: center;

    @media (min-width: 768px) {
      width: 100%;
    }

    h2 {
      ${H2White};
      margin: 0;
    }
  }

  .hero-content__content {
    width: 100%;
    margin-top: 2rem;
    text-align: center;

    p {
      ${H3Orange};
      margin-bottom: 0;
    }
  }
`

export default HeroConentThree
