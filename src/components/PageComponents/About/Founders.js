import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1Black, H1Black, H3Orange, medWrapper } from "../../../styles/helpers"

const Founders = ({ content, sketch }) => {
  const sketchDisplay = getImage(
    sketch.localFile.childImageSharp.gatsbyImageData
  )
  const sketchAlt = sketch.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>948 Founders</h2>
        </div>
        <div className="sketch">
          <GatsbyImage
            image={sketchDisplay}
            alt={sketchAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="content">
          <h3>Dave + Kyle, Co-Founders</h3>

          <div
            className="content__body"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding: 5rem 0;

  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .title {
    width: 100%;
    text-align: center;

    h2 {
      ${H1Black};
      margin-bottom: 6rem;
      text-transform: uppercase;
    }
  }

  .sketch {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50% - 4.1rem);
      margin-right: 4.1rem;
    }
  }

  .content {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
    }

    h3 {
      ${H3Orange};
      margin-bottom: 3rem;
    }

    &__body {
      p {
        ${B1Black};
      }
    }
  }
`

export default Founders
