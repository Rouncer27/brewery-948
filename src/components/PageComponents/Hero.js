import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { H2White } from "../../styles/helpers"

const Hero = ({ bgImg, title, logo }) => {
  const imageDisplay = getImage(bgImg.localFile.childImageSharp.gatsbyImageData)
  const imageAlt = bgImg.altText
  const logoDisplay = getImage(logo.localFile.childImageSharp.gatsbyImageData)
  const logoAlt = bgImg.altText
  return (
    <StyledSection>
      <div className="hero-image">
        <GatsbyImage
          image={imageDisplay}
          alt={imageAlt}
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <div className="hero-content">
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
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  height: 50rem;

  @media (min-width: 768px) {
    height: 60rem;
  }

  @media (min-width: 1025px) {
    height: 67.5rem;
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .hero-content {
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

    border: 0.5rem solid red;

    @media (min-width: 768px) {
      padding: 2rem;
      max-width: 100rem;
    }

    @media (min-width: 1025px) {
      padding: 2rem;
      max-width: 100rem;
    }

    &__title {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(65%);
      }

      h2 {
        ${H2White};
        margin: 0;
        margin-bottom: 1.5rem;
        text-align: right;
      }
    }

    &__logo {
      width: 100%;
      @media (min-width: 768px) {
        width: calc(35%);
      }
    }
  }
`

Hero.propTypes = {
  bgImg: PropTypes.object,
  title: PropTypes.string,
  logo: PropTypes.object,
}

export default Hero
