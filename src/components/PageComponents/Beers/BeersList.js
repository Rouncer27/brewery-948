import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { colors } from "../../../styles/helpers"

import BeerCard from "./BeerCard"

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
          return <BeerCard beer={beer.node} key={beer.node.key} />
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

export default BeersList
