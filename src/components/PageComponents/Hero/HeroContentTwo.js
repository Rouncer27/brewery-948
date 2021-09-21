import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { H2White, standardWrapper } from "../../../styles/helpers"

const HeroContentTwo = ({ title, logo }) => {
  const logoDisplay = getImage(logo.localFile.childImageSharp.gatsbyImageData)
  const logoAlt = logo.altText
  return (
    <DivStyled>
      <div className="inner-wrap">
        <div className="hero-content__title">
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
        </div>
        <div className="hero-content__logo">
          <GatsbyImage
            image={logoDisplay}
            alt={logoAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
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
  background-color: rgba(36, 36, 36, 0.65);
  transform: translate(0%, -50%);

  @media (min-width: 768px) {
    padding: 0 2rem;
    max-width: 100%;
  }

  @media (min-width: 1025px) {
  }

  .inner-wrap {
    ${standardWrapper};
    align-items: center;
    flex-direction: row-reverse;
    max-width: 70rem !important;
  }

  .hero-content__title {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(75%);
    }

    h2 {
      ${H2White};
      margin: 0;
      text-align: center;
    }
  }

  .hero-content__logo {
    width: 100%;
    max-width: 15rem;
    margin-top: 2rem;

    @media (min-width: 768px) {
      display: block;
      width: calc(25%);
      max-width: 100%;
      margin-top: 0;
    }
  }
`

export default HeroContentTwo
