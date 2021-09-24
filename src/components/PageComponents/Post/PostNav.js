import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { colors, medWrapper } from "../../../styles/helpers"

const PostNav = ({ prevPost, nextPost }) => {
  return (
    <PostNavStyled>
      <div className="wrapper">
        <nav>
          {nextPost && (
            <Link to={`/news-and-events/${nextPost}`}>
              <span>&lt; </span>
              Next Article
            </Link>
          )}
          <Link to="/news-and-events">Home</Link>
          {prevPost && (
            <Link to={`/news-and-events/${prevPost}`}>
              Previous Article
              <span>&gt; </span>
            </Link>
          )}
        </nav>
      </div>
    </PostNavStyled>
  )
}

const PostNavStyled = styled.div`
  width: 100%;
  padding-bottom: 5rem;

  .wrapper {
    ${medWrapper};
    max-width: 95rem !important;
    border-top: 0.25rem solid ${colors.colorPrimary};
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
    }
  }
`

export default PostNav
