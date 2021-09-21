import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const ImageRow = ({ left, right }) => {
  const leftDisplay = getImage(left.localFile.childImageSharp.gatsbyImageData)
  const leftAlt = left.altText
  const rightDisplay = getImage(right.localFile.childImageSharp.gatsbyImageData)
  const rightAlt = right.altText
  return (
    <DivStyled>
      <div className="wrapper">
        <div className="image image-left">
          <GatsbyImage
            image={leftDisplay}
            alt={leftAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="image image-right">
          <GatsbyImage
            image={rightDisplay}
            alt={rightAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .image {
    position: relative;
    width: 100%;
    height: 100vw;

    @media (min-width: 768px) {
      width: calc(50%);
      height: 40rem;
    }

    @media (min-width: 1025px) {
      width: calc(50%);
      height: 60rem;
    }

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export default ImageRow
