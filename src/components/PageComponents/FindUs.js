import React from "react"
import styled from "styled-components"
import { colors, H3White, medWrapper, IntroWhite } from "../../styles/helpers"
import IconMap from "../Icons/IconMap"

const FindUs = ({ locations }) => {
  const items = locations.template.homeTemplate.locations
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="icon">
          <IconMap />
        </div>
        <div className="content">
          <div className="content__title">
            <h2>Find Us On Tap At</h2>
          </div>
          <div className="content__locations">
            <ul>
              {items.map((item, index) => {
                let locationContent = ""
                let seperator = "|"
                if (index === items.length - 1) {
                  seperator = ""
                }
                if (
                  item.website
                    ? (locationContent = (
                        <React.Fragment key={index}>
                          <li>
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={item.website}
                            >
                              {item.name}
                            </a>
                          </li>
                          <span> {seperator} </span>
                        </React.Fragment>
                      ))
                    : (locationContent = (
                        <React.Fragment key={index}>
                          <li>{item.name}</li>
                          <span> {seperator} </span>
                        </React.Fragment>
                      ))
                )
                  return locationContent
              })}
            </ul>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 6rem 0;
  background-color: ${colors.colorSecondary};

  .wrapper {
    ${medWrapper};
    justify-content: flex-start;

    @media (min-width: 768px) {
      justify-content: center;
    }
  }

  .icon {
    width: 100%;
    max-width: 15rem;
    margin-bottom: 5rem;

    @media (min-width: 768px) {
      width: calc(25% - 4rem);
      max-width: 100%;
      margin-right: 4rem;
      margin-bottom: 0;
      padding: 3rem;
    }
  }

  .content {
    width: 100%;
    @media (min-width: 768px) {
      width: calc(75%);
    }

    &__title {
      margin-bottom: 2rem;
      border-bottom: solid 0.2rem ${colors.white};

      h2 {
        ${H3White};
        margin-bottom: 0.5rem;
        text-transform: uppercase;
      }
    }

    &__locations {
      width: 100%;

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-left: -1rem;

        li,
        a {
          ${IntroWhite};
          display: block;

          @media (min-width: 768px) {
            display: inline-block;
          }
        }

        li {
          padding: 1rem;

          @media (min-width: 768px) {
            padding: 0 1rem;
          }
        }

        a {
          &:hover {
            color: ${colors.colorPrimary};
          }
        }

        span {
          display: none;

          @media (min-width: 768px) {
            ${IntroWhite};
            display: block;
          }
        }
      }
    }
  }
`

export default FindUs
