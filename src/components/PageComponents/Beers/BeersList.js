import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { colors } from "../../../styles/helpers"

const getData = graphql`
  {
    beers: allWpOurBeer(sort: { order: DESC, fields: date }) {
      edges {
        node {
          slug
          id
          ourBeers {
            image {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }

            ingredientImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }
        }
      }
    }
  }
`

const BeersList = () => {
  const postsData = useStaticQuery(getData)
  const beers = postsData.beers.edges
  return (
    <DivStyled>
      <div className="wrapper">
        {beers.map((beer, index) => {
          const imageSrc = getImage(
            beer.node.ourBeers.image.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = getImage(beer.node.ourBeers.image.altText)

          const imageIngreSrc = getImage(
            beer.node.ourBeers.ingredientImage.localFile.childImageSharp
              .gatsbyImageData
          )
          const imageIngreAlt = getImage(
            beer.node.ourBeers.ingredientImage.altText
          )
          return (
            <BeerCard
              className="beer-card"
              beerpos={index + 1}
              to={`/our-beers/${beer.node.slug}`}
              key={beer.node.key}
            >
              <div className="beer-card__inner">
                <div className="beer-card__face beer-card__face--front">
                  <div className="image-wrap">
                    <GatsbyImage
                      image={imageSrc}
                      alt={imageAlt}
                      layout="fixed"
                    />
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
            </BeerCard>
          )
        })}
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  padding: 5rem 0;
  background-color: ${colors.colorSecondary};

  .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .beer-card:nth-of-type(2n + 1) {
    margin-right: 1rem;
    margin-left: 0;
  }

  .beer-card:nth-of-type(2n + 2) {
    margin-right: 0;
    margin-left: 1rem;
  }

  @media (min-width: 768px) {
    .beer-card:nth-of-type(4n + 1) {
      margin-right: 1.5rem;
      margin-left: 0;
    }

    .beer-card:nth-of-type(4n + 2) {
      margin-right: 1rem;
      margin-left: 0.5rem;
    }

    .beer-card:nth-of-type(4n + 3) {
      margin-right: 0.5rem;
      margin-left: 1rem;
    }

    .beer-card:nth-of-type(4n + 4) {
      margin-right: 0;
      margin-left: 1.5rem;
    }
  }
`

const BeerCard = styled(Link)`
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

    &.is-flipped {
      transform: rotateY(180deg);
    }
    &:hover {
      transform: rotateY(180deg);
    }
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

export default BeersList
