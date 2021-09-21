import React from "react"
import styled from "styled-components"
import {
  colors,
  H1White,
  medWrapper,
  IntroOrange,
  B1White,
} from "../../../styles/helpers"

import IconBeaker from "../../Icons/IconBeaker"

const OurStory = ({ story }) => {
  console.log("story", story)
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>Our Story</h2>
        </div>
        <div className="icon">
          <IconBeaker />
        </div>
        <div className="content">
          <div
            className="content__content-top"
            dangerouslySetInnerHTML={{
              __html: story.template.aboutTemplate.ourStoryTop,
            }}
          />
          <div
            className="content__content-bot"
            dangerouslySetInnerHTML={{
              __html: story.template.aboutTemplate.ourStoryBottom,
            }}
          />
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  background-color: ${colors.colorAlt};
  .wrapper {
    ${medWrapper};
  }

  .title {
    width: 100%;
    margin-bottom: 6rem;
    text-align: center;

    h2 {
      ${H1White};
      margin-bottom: 0;
      text-transform: uppercase;
    }
  }

  .icon {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(20% - 4rem);
      margin-right: 4rem;
      padding: 2rem;
    }
  }

  .content {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(80%);
    }

    &__content-top {
      width: 100%;
      margin-bottom: 4rem;

      p {
        ${IntroOrange};
        &:last-of-type {
          margin: 0;
        }
      }
    }

    &__content-bot {
      width: 100%;

      p {
        ${B1White};

        &:last-of-type {
          margin: 0;
        }
      }
    }
  }
`

export default OurStory
