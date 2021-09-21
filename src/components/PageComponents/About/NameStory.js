import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  medWrapper,
  colors,
  B1White,
  IntroOrange,
  Btn1Orange,
} from "../../../styles/helpers"

import IconBeakerTwo from "../../Icons/IconBeakerTwo"

const NameStory = ({ top, bot, slug }) => {
  return (
    <DivStyled>
      <div className="wrapper">
        <div className="icon">
          <IconBeakerTwo />
        </div>
        <div className="content">
          <div
            className="content__top"
            dangerouslySetInnerHTML={{ __html: top }}
          />
          <div
            className="content__bot"
            dangerouslySetInnerHTML={{ __html: bot }}
          />
          <div className="content__link">
            <Link to={`/${slug}`}>Read About Our Journey</Link>
          </div>
        </div>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  padding: 7.5rem 0 5rem 0;
  background-color: ${colors.colorAlt};

  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .icon {
    width: calc(100%);
    max-width: 15rem;
    margin-bottom: 5rem;

    @media (min-width: 768px) {
      width: calc(20% - 4rem);
      max-width: 100%;
      margin-right: 4rem;
      margin-bottom: 0;
      padding: 2rem;
    }
  }

  .content {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(80%);
    }

    &__top {
      width: 100%;
      margin-bottom: 4rem;

      p {
        ${IntroOrange};
        &:last-of-type {
          margin: 0;
        }
      }
    }

    &__bot {
      width: 100%;

      p {
        ${B1White};

        &:last-of-type {
          margin: 0;
        }
      }
    }

    &__link {
      width: 100%;
      margin-top: 5rem;

      a {
        ${Btn1Orange};
      }
    }
  }
`

export default NameStory
