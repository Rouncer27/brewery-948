import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import TempHome from "../components/Templates/TempHome"

const IndexPage = props => {
  const { hero } = props.data

  return (
    <Layout>
      <Seo title="Home" />
      <TempHome hero={hero} />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    hero: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            title
            image {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }

            logo {
              altText
              sourceUrl
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

export default IndexPage
