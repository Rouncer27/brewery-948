import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import TempTaproom from "../components/Templates/TempTaproom"

const Taproom = props => {
  const { hero } = props.data
  return (
    <Layout>
      <Seo title="About Page" />
      <TempTaproom hero={hero} />
    </Layout>
  )
}

export const taproomTempQuery = graphql`
  query taproomTempPage($id: String!) {
    hero: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Taproom {
          taproomTemplate {
            heroTitleTop
            heroTitleBottom
            heroBackgroundImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Taproom
