import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import TempPost from "../components/Templates/TempPost"

const Post = props => {
  const { post } = props.data
  const prevPost = props.pageContext.prev
  const nextPost = props.pageContext.next

  return (
    <Layout>
      <Seo />
      <TempPost post={post} prevPost={prevPost} nextPost={nextPost} />
    </Layout>
  )
}

export const query = graphql`
  query singlePostQuery($slug: String!) {
    post: wpPost(slug: { eq: $slug }) {
      title
      id
      date
      slug
      categories {
        nodes {
          name
        }
      }
      acfPost {
        mainContent
        author
        pinToTop
        featuredImage {
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
`

export default Post
