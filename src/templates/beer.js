import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import TempBeer from "../components/Templates/TempBeer"

const Beer = props => {
  const { beer, allBeers } = props.data
  const prevBeer = props.pageContext.prev
  const nextBeer = props.pageContext.next

  return (
    <Layout>
      <Seo />
      <TempBeer
        beer={beer}
        allBeers={allBeers}
        prevBeer={prevBeer}
        nextBeer={nextBeer}
      />
    </Layout>
  )
}

export const query = graphql`
  query singleBeerQuery($slug: String!) {
    beer: wpOurBeer(slug: { eq: $slug }) {
      title
      id
      date
      slug
      ourBeers {
        content
        details
        buyNowUrl
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

    allBeers: allWpOurBeer {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default Beer
