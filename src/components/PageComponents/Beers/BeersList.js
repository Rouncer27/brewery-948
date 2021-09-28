import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { colors } from "../../../styles/helpers"

import BeerCard from "./BeerCard"
import QuoteCard from "./QuoteCard"
import TaproomCard from "./TaproomCard"
import { getRandomRum } from "../../../utils/helperFunctions"

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

    quotes: allWpQuote {
      edges {
        node {
          acfQuotes {
            quote
          }
        }
      }
    }
  }
`

const BeersList = () => {
  const postsData = useStaticQuery(getData)
  const beers = postsData.beers.edges
  const quotes = postsData.quotes.edges
  const [beersDisplayed, setBeersDisplay] = useState([])

  useEffect(() => {
    const quoteOneInsert = getRandomRum(0, beers.length - 1)
    const taproomInsert = getRandomRum(0, beers.length - 1)
    const quoteOneIndex = getRandomRum(0, quotes.length - 1)
    beers.splice(quoteOneInsert, 0, quotes[quoteOneIndex])
    beers.splice(taproomInsert, 0, { taproomLink: true })
    setBeersDisplay(beers)
  }, [])

  return (
    <DivStyled>
      <div className="wrapper">
        {beersDisplayed.map((beer, index) => {
          console.log("HERES THE BEERS", beer)
          if (beer.taproomLink === true) {
            return <TaproomCard key={index} />
          } else if (beer.node.acfQuotes) {
            return <QuoteCard quote={beer.node} key={beer.node.id} />
          }
          return <BeerCard beer={beer.node} key={beer.node.id} />
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
