import React from "react"
import styled from "styled-components"
import {
  B1Black,
  colors,
  H2Orange,
  standardWrapper,
} from "../../../styles/helpers"

const Title = ({ title, date, author }) => {
  const options = { year: "numeric", month: "long" }
  const postDate = new Date(date).toLocaleDateString(undefined, options)
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="meta">
          <p>{postDate}</p>
          <p>{author}</p>
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .meta {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 0.4rem solid ${colors.colorSecondary};
    margin-bottom: 2rem;
    padding-bottom: 0.5rem;

    p {
      ${B1Black};
      margin: 0;
    }
  }

  .title {
    width: 100%;
    margin-top: 2rem;
    text-align: center;

    h1 {
      ${H2Orange};
    }
  }
`

export default Title
