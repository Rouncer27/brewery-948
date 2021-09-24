import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { colors, H1White } from "../../styles/helpers"

import arrowGIF from "../../images/looparrow.gif"

const VisitTaproom = ({ taproom }) => {
  const imageDisplay = getImage(
    taproom.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = taproom.altText
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
          <Link to="/taproom">
            <h2>Visit Our Taproom</h2>
            <div className="arrow-one">
              <img src={arrowGIF} alt="" />
            </div>
          </Link>
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
    height: 75rem;
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
    bottom: 0;
    left: 0;
    width: 100%;
    margin: auto;
    padding: 2rem;
    background-color: rgba(36, 36, 36, 0.6);

    &__title {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(65%);
      }

      h2 {
        ${H1White};
        display: block;
        margin: 0;
        padding: 7rem;
        text-align: center;
        text-transform: uppercase;
        transition: all 0.3s ease-out;
      }

      .arrow-one {
        position: absolute;
        top: -1rem;
        left: 34%;
        z-index: 100;
      }

      a {
        &:hover {
          h2 {
            color: ${colors.colorSecondary};
          }
        }
      }
    }
  }
`

export default VisitTaproom
