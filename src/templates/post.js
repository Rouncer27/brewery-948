import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import TempPost from "../components/Templates/TempPost"

const Post = props => {
  const { post, allPosts } = props.data
  const prevPost = props.pageContext.prev
  const nextPost = props.pageContext.next

  return (
    <Layout>
      <Seo />
      <TempPost />
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
        excerpt
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

    allPosts: allWpPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default Post
