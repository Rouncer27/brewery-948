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
                  gatsbyImageData(width: 1500)
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

  console.log(beers)
  return (
    <DivStyled>
      <div className="wrapper">
        {beers.map(beer => {
          const imageSrc = getImage(
            beer.node.ourBeers.image.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = getImage(beer.node.ourBeers.image.altText)
          return (
            <BeerCard to={`/our-beers`} key={beer.node.key}>
              <GatsbyImage image={imageSrc} alt={imageAlt} layout="fixed" />
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
`

const BeerCard = styled(Link)`
  width: calc(100% / 2);

  @media (min-width: 768px) {
    width: calc(100% / 4);
  }
`

export default BeersList
