import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { standardWrapper } from "../../../styles/helpers"

const FeaturedImage = ({ image }) => {
  const imgDisplay = getImage(image.localFile.childImageSharp.gatsbyImageData)
  const imgAlt = image.altText
  return (
    <DivStyled>
      <div className="wrapper">
        <div className="image">
          <GatsbyImage
            image={imgDisplay}
            alt={imgAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.section`
  margin-top: 10rem;

  .wrapper {
    ${standardWrapper};
  }
`

export default FeaturedImage
