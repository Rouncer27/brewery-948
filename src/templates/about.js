import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import TempAbout from "../components/Templates/TempAbout"

const About = props => {
  const { hero, story, founders, imageRow } = props.data
  return (
    <Layout>
      <Seo title="About Page" />
      <TempAbout
        hero={hero}
        story={story}
        founders={founders}
        imageRow={imageRow}
      />
    </Layout>
  )
}

export const aboutTempQuery = graphql`
  query aboutTempPage($id: String!) {
    hero: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutTemplate {
            heroTopContent
            heroTopImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }

            heroTopIcon {
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

    story: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutTemplate {
            ourStoryTop
            ourStoryBottom
          }
        }
      }
    }

    founders: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutTemplate {
            foundersContent
            foundersSketch {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2000)
                }
              }
            }
          }
        }
      }
    }

    imageRow: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_About {
          aboutTemplate {
            imageRowLeft {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            imageRowRight {
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

export default About
