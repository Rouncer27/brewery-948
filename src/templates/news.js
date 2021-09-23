import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import TempNews from "../components/Templates/TempNews"

const News = props => {
  const { intro } = props.data
  return (
    <Layout>
      <Seo title="Beers Page" />
      <TempNews intro={intro} />
    </Layout>
  )
}

export const newsTempQuery = graphql`
  query newsTempPage($id: String!) {
    intro: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_News {
          newsTemplate {
            introTitle
            introContent
            introImage {
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

export default News
