import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1Black, H1Black } from "../../../styles/helpers"

import arrowGIF from "../../../images/step-arrow-2.gif"

const Hours = ({ image, content }) => {
  const imgDisplay = getImage(image.localFile.childImageSharp.gatsbyImageData)
  const imgAlt = image.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="image">
          <div className="image__wrap">
            <GatsbyImage
              image={imgDisplay}
              alt={imgAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
        <div className="content">
          <h2>Taproom Hours</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <div className="arrow-one">
            <img src={arrowGIF} alt="" />
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
  }

  .image {
    position: relative;
    width: 100%;
    height: 40rem;

    @media (min-width: 768px) {
      height: 60rem;
      width: calc(50%);
    }

    @media (min-width: 1025px) {
      height: 60rem;
      width: calc(50% - 5rem);
      margin-left: 5rem;
    }

    &__wrap {
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
  }

  .content {
    position: relative;
    width: 100%;
    padding: 2rem;
    text-align: center;

    @media (min-width: 768px) {
      width: calc(50% - 2.5rem);
      margin-right: auto;
      margin-left: 2.5rem;
      padding: 2rem 2rem 2rem 0;
      text-align: left;
    }

    @media (min-width: 1025px) {
      width: calc(50% - 5rem);
      max-width: 50rem;
      margin-left: auto;
      margin-right: 5rem;
    }

    .arrow-one {
      position: absolute;
      top: -7.5rem;
      left: 25%;
      width: 10rem;
      z-index: 1000;
    }

    h2 {
      ${H1Black};
      text-transform: uppercase;
    }

    p {
      ${B1Black};
    }
  }
`

export default Hours
