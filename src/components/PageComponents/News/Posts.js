import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  colors,
  medWrapper,
  IntroOrange,
  Nav1White,
} from "../../../styles/helpers"

const getData = graphql`
  {
    posts: allWpPost(sort: { order: DESC, fields: date }) {
      edges {
        node {
          slug
          id
          title
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
      }
    }
  }
`

const Posts = () => {
  const postsData = useStaticQuery(getData)
  const posts = postsData.posts.edges
  return (
    <SectionStyled>
      <div className="wrapper">
        {posts.map(post => {
          const imageSrc = getImage(
            post.node.acfPost.featuredImage.localFile.childImageSharp
              .gatsbyImageData
          )
          const imageAlt = post.node.acfPost.featuredImage.altText
          return (
            <ArticleCard
              className="article"
              to={`/news-and-events/${post.node.slug}`}
              key={post.node.id}
            >
              <div className="article-wrapper">
                <div className="content">
                  <h2>{post.node.title}</h2>
                  <div>
                    <p>{post.node.acfPost.excerpt}</p>
                  </div>
                </div>
                <div className="image">
                  <div className="image__wrap">
                    <GatsbyImage
                      image={imageSrc}
                      alt={imageAlt}
                      layout="fixed"
                    />
                  </div>
                </div>
              </div>
            </ArticleCard>
          )
        })}
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.div`
  .wrapper {
    ${medWrapper};
    justify-content: flex-start;
  }

  .article {
    &:nth-of-type(2n + 1) {
      background-color: ${colors.colorShad};

      .article-wrapper {
        flex-direction: column-reverse;
        padding-top: 25rem;

        @media (min-width: 768px) {
          padding-top: 30rem;
        }

        .image {
          top: 0;
          left: 0;
          height: 25rem;

          @media (min-width: 768px) {
            height: 30rem;
          }
        }
      }
    }

    &:nth-of-type(2n + 2) {
      background-color: ${colors.colorAlt};

      .article-wrapper {
        flex-direction: column;
        padding-bottom: 25rem;

        @media (min-width: 768px) {
          padding-bottom: 20rem;
        }

        .image {
          bottom: 0;
          left: 0;
          height: 25rem;

          @media (min-width: 768px) {
            height: 20rem;
          }
        }
      }
    }
  }
`

const ArticleCard = styled(Link)`
  display: flex;
  width: calc(100%);
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    width: calc((100% / 2) - 2rem);
    margin: 1rem;
  }

  @media (min-width: 1025px) {
    width: calc((100% / 3) - 2rem);
    margin: 1rem;
  }

  .article-wrapper {
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .content {
    width: 100%;
    padding: 3rem;

    h2 {
      ${IntroOrange};
    }

    p {
      ${Nav1White};
    }
  }

  .image {
    position: absolute;
    width: calc(100%);

    .image__wrap {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .gatsby-image-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`

export default Posts
