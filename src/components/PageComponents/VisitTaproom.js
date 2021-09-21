import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { colors, H1White } from "../../styles/helpers"

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
          <h2>
            <Link to="/taproom">Visit Our Taproom</Link>
          </h2>
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
        margin: 0;

        a {
          ${H1White};
          display: block;
          margin: 0;
          padding: 7rem;
          text-align: center;
          text-transform: uppercase;

          &:hover {
            color: ${colors.colorSecondary};
          }
        }
      }
    }
  }
`

export default VisitTaproom
