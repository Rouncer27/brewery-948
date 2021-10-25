import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import TempContact from "../components/Templates/TempContact"

const Contact = props => {
  const { visit, hours, rent, social } = props.data
  const seoInfo = props.data.seoInfo
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <TempContact visit={visit} hours={hours} rent={rent} social={social} />
    </Layout>
  )
}

export const contactTempQuery = graphql`
  query contactTempPage($id: String!) {
    seoInfo: wpPage(id: { eq: $id }) {
      seoFields {
        swbThemeDescription
        swbThemeMetaTitle
        swbThemeImage {
          localFile {
            relativePath
          }
        }
      }
    }

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

    hours: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
            hoursContent
            hoursImage {
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

    rent: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
            rentTaproomContent
            rentTaproomImage {
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

    social: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Contact {
          contactTemplate {
            googleReviewUrl
          }
        }
      }
    }
  }
`

export default Contact
