import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1Black, H1Black } from "../../../styles/helpers"

const Intro = ({ title, content, image }) => {
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
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  margin-bottom: 5rem;

  .wrapper {
    display: flex;
    align-items: center;
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
      height: 67rem;
      width: calc(50% - 5rem);
      margin-right: 5rem;
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
      margin-right: auto;
      margin-left: 5rem;
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

export default Intro
