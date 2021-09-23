import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { H2White, standardWrapper, Btn1Orange } from "../../../styles/helpers"

import IconBeakerThree from "../../Icons/IconBeakerThree"

const NowPouring = ({ content, image }) => {
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
          <div className="inner-wrap">
            <div className="content__paragraph">
              <p dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div className="content__link">
              <div className="content__link--icon">
                <IconBeakerThree />
              </div>
              <a target="_blank" target="_blank" href="https://948brewing.ca/">
                Now Pouring
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  position: relative;

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
      height: 40rem;
    }

    @media (min-width: 1025px) {
      height: 45rem;
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
    background-color: rgba(36, 36, 36, 0.6);

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

    &__paragraph {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(75%);
      }

      p {
        ${H2White};
        margin: 0;
      }
    }

    &__link {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(25%);
      }

      &--icon {
        max-width: 25rem;
        margin-bottom: 4rem;
      }

      a {
        ${Btn1Orange};
      }
    }
  }
`

export default NowPouring
