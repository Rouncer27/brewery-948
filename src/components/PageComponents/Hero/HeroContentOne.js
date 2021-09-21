import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { H2White } from "../../../styles/helpers"

const HeroContentOne = ({ title, logo }) => {
  const logoDisplay = getImage(logo.localFile.childImageSharp.gatsbyImageData)
  const logoAlt = logo.altText
  return (
    <DivStyled>
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
    </DivStyled>
  )
}

const DivStyled = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  top: 10rem;
  left: 50%;
  width: 100%;
  margin: auto;
  padding: 2rem;
  transform: translate(-50%, 0%);

  @media (min-width: 768px) {
    padding: 2rem;
    max-width: 70rem;
  }

  @media (min-width: 1025px) {
    padding: 2rem;
    max-width: 100rem;
  }

  .hero-content__title {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(65%);
    }

    h2 {
      ${H2White};
      margin: 0;
      margin-bottom: 1.5rem;
      text-align: center;

      @media (min-width: 768px) {
        text-align: right;
      }
    }
  }

  .hero-content__logo {
    display: none;
    width: 100%;
    max-width: 25rem;

    @media (min-width: 768px) {
      display: block;
      width: calc(35%);
      max-width: 100%;
    }
  }
`

export default HeroContentOne
