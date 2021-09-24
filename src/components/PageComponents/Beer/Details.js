import React from "react"
import styled from "styled-components"
import {
  B1White,
  Btn1Orange,
  colors,
  H3Orange,
  standardWrapper,
} from "../../../styles/helpers"

const Details = ({ details, url }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="details">
          <h2>Details</h2>
          <div dangerouslySetInnerHTML={{ __html: details }} />
        </div>

        <div className="link">
          <a target="_blank" rel="noreferrer" href={url}>
            Buy Now
          </a>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding: 4rem 0;
  background-color: ${colors.colorAlt};

  .wrapper {
    ${standardWrapper};
  }

  .details {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(65%);
    }

    @media (min-width: 1025px) {
      width: calc(75%);
    }

    h2 {
      ${H3Orange};
      margin-top: 0;
      text-transform: uppercase;
    }

    p {
      ${B1White};
    }
  }

  .link {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(35%);
    }

    @media (min-width: 1025px) {
      width: calc(25%);
    }

    a {
      ${Btn1Orange};
    }
  }
`

export default Details
