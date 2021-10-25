import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import TempBeers from "../components/Templates/TempBeers"

const beers = props => {
  const { intro, pouring, rent } = props.data
  const seoInfo = props.data.seoInfo
  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <TempBeers intro={intro} pouring={pouring} rent={rent} />
    </Layout>
  )
}

export const beersTempQuery = graphql`
  query beersTempPage($id: String!) {
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

    intro: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Beers {
          beersTemplate {
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

    pouring: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Beers {
          beersTemplate {
            nowPouringContent
            nowPouringImage {
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

    rent: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Beers {
          beersTemplate {
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
  }
`

export default beers
