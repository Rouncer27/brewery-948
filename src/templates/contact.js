import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import TempContact from "../components/Templates/TempContact"

const Contact = props => {
  const { visit } = props.data
  return (
    <Layout>
      <Seo title="Contact Page" />
      <TempContact visit={visit} />
    </Layout>
  )
}

export const contactTempQuery = graphql`
  query contactTempPage($id: String!) {
    visit: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
            visitContent
            visitImage {
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

export default Contact
