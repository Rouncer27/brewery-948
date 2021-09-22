import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import TempTaproom from "../components/Templates/TempTaproom"

const Taproom = props => {
  const { hero, imageSec } = props.data
  return (
    <Layout>
      <Seo title="About Page" />
      <TempTaproom hero={hero} imageSec={imageSec} />
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

    imageSec: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Taproom {
          taproomTemplate {
            leftTallImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            topLongImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            rightSideImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            centreSmallImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            bottomLeftImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            bottomRightImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            bottomHeroImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            contentRight
            contentContactInfo
            emailContactInfo
          }
        }
      }
    }
  }
`

export default Taproom
