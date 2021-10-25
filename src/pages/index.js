import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import TempHome from "../components/Templates/TempHome"

const IndexPage = props => {
  const { hero, direction, taproom, locations } = props.data
  const seoInfo = props.data.seoInfo

  return (
    <Layout>
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <TempHome
        hero={hero}
        direction={direction}
        taproom={taproom}
        locations={locations}
      />
    </Layout>
  )
}

export const homeQuery = graphql`
  {
    seoInfo: wpPage(slug: { eq: "home" }) {
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

    direction: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            seasonalFeatureSlug
            ourStory {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            ourBeers {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            newsEvents {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            nowPouring {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            shopGear {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1500)
                }
              }
            }
            seasonalFeature {
              altText
              sourceUrl
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

    taproom: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            taproomImage {
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

    locations: wpPage(slug: { eq: "home" }) {
      template {
        ... on WpTemplate_Home {
          homeTemplate {
            locations {
              name
              website
            }
          }
        }
      }
    }
  }
`

export default IndexPage
