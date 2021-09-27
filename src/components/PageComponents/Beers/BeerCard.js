import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BeerCard = ({ beer }) => {
  const [isFlipped, setIsFliiped] = useState(false)
  const imageSrc = getImage(
    beer.ourBeers.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = getImage(beer.ourBeers.image.altText)

  const imageIngreSrc = getImage(
    beer.ourBeers.ingredientImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageIngreAlt = getImage(beer.ourBeers.ingredientImage.altText)
  return (
    <BeerCardStyled
      className="beer-card"
      to={`/our-beers/${beer.slug}`}
      key={beer.key}
      isflipped={isFlipped}
      onMouseOver={() => setIsFliiped(true)}
      onMouseLeave={() => setIsFliiped(false)}
    >
      <div className="beer-card__inner">
        <div className="beer-card__face beer-card__face--front">
          <div className="image-wrap">
            <GatsbyImage image={imageSrc} alt={imageAlt} layout="fixed" />
          </div>
        </div>
        <div className="beer-card__face beer-card__face--back">
          <div className="image-wrap">
            <GatsbyImage
              image={imageIngreSrc}
              alt={imageIngreAlt}
              layout="fixed"
            />
          </div>
        </div>
      </div>
    </BeerCardStyled>
  )
}

const BeerCardStyled = styled(Link)`
  position: relative;
  width: calc((100vw / 2) - 1rem);
  height: calc((100vw / 2) - 1rem);
  margin-top: 1rem;
  margin-bottom: 1rem;
  perspective: 100rem;

  @media (min-width: 768px) {
    width: calc((100vw / 4) - 1.5rem);
    height: calc((100vw / 4) - 1.5rem);
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .beer-card__inner {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
    transform: ${props =>
      props.isflipped ? "rotateY(180deg)" : "rotateY(0deg)"};
  }

  .beer-card__face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    overflow: hidden;
    box-shadow: 0 0.3rem 1.8rem 0.3rem rgba(0, 0, 0, 0.2);

    &--front {
    }

    &--back {
      transform: rotateY(180deg);
    }
  }

  .image-wrap {
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
`

export default BeerCard
