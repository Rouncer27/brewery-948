import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { B1Black, colors, H1Black, medWrapper } from "../../../styles/helpers"

import Twitter from "../../Icons/Twitter"
import Facebook from "../../Icons/Facebook"
import Instagram from "../../Icons/Instagram"

const getData = graphql`
  {
    footerData: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          instagramUrl
          twitterUrl
          facebookUrl
        }
      }
    }
  }
`

const Social = ({ url }) => {
  const data = useStaticQuery(getData)
  const { instagramUrl, facebookUrl, twitterUrl } =
    data.footerData.acfOptionsSiteWideSettings.acfSiteWideSettings
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="icons">
          <ul>
            <StyledIcon>
              <a
                title="Follow us on Facebook - Link will open in new window"
                target="_blank"
                rel="noreferrer"
                href={facebookUrl}
              >
                <i>
                  <Facebook />
                  <span className="visuallyhidden">Facebook</span>
                </i>
              </a>
            </StyledIcon>

            <StyledIcon>
              <a
                title="Follow us on Instagram - Link will open in new window"
                target="_blank"
                rel="noreferrer"
                href={instagramUrl}
              >
                <i>
                  <Instagram />
                  <span className="visuallyhidden">Instagram</span>
                </i>
              </a>
            </StyledIcon>

            <StyledIcon>
              <a
                target="_blank"
                rel="noreferrer"
                title="Follow us on Twitter - Link will open in new window"
                href={twitterUrl}
              >
                <i>
                  <Twitter />
                  <span className="visuallyhidden">Twitter</span>
                </i>
              </a>
            </StyledIcon>
          </ul>
        </div>

        <div className="content">
          <h3>Leave us a review and connect on social</h3>
          <p>
            <a rel="noreferrer" target="_blank" href={url}>
              Click here
            </a>{" "}
            to leave us feedback on google so we can learn more about your
            experience.
          </p>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding: 5rem 0;
  background-color: ${colors.colorSecondary};

  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .icons {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(25% - 2rem);
      margin-right: 2rem;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

  .content {
    width: calc(100%);
    margin-top: 2.5rem;
    text-align: center;

    @media (min-width: 768px) {
      width: calc(75%);
      margin-top: 0;
      text-align: left;
    }

    h3 {
      ${H1Black};
    }

    p,
    a {
      ${B1Black};
    }

    a:hover {
      color: ${colors.white};
    }
  }
`

const StyledIcon = styled.li`
  display: inline-block;
  margin-right: 1rem;
  margin-left: 1rem;

  a {
    display: block;
    position: relative;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    @media (min-width: 768px) {
      width: 3.5rem;
      height: 3.5rem;
    }
    @media (min-width: 1025px) {
      width: 5rem;
      height: 5rem;
    }

    &:focus {
      outline: 0.4rem solid #003b49;
      transition: outline-width 0.35s ease-in-out;
    }

    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    svg {
      display: block;
      width: 4rem;
      height: 4rem;
      margin: auto;
      transition: all 0.3s ease-out;
      fill: ${colors.black};

      @media (min-width: 768px) {
        width: 3.5rem;
        height: 3.5rem;
      }
      @media (min-width: 1025px) {
        width: 4rem;
        height: 4rem;
      }

      &:hover {
        fill: ${colors.colorAccent};
      }
    }
  }
`

export default Social
