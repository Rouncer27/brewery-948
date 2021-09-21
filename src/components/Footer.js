import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { colors, Nav1White } from "../styles/helpers"

import Twitter from "./Icons/Twitter"
import Facebook from "./Icons/Facebook"
import Instagram from "./Icons/Instagram"

const getData = graphql`
  {
    footerData: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          address
          hoursOfOperation
          stayInTheKnow
          mailchimpUrl
          instagramUrl
          twitterUrl
          facebookUrl
          footerLogo {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
          }
        }
      }
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(getData)
  const image = getImage(
    data.footerData.acfOptionsSiteWideSettings.acfSiteWideSettings.footerLogo
      .localFile.childImageSharp.gatsbyImageData
  )
  const logoAlt =
    data.footerData.acfOptionsSiteWideSettings.acfSiteWideSettings.footerLogo
      .altText

  const {
    address,
    hoursOfOperation,
    stayInTheKnow,
    instagramUrl,
    facebookUrl,
    twitterUrl,
  } = data.footerData.acfOptionsSiteWideSettings.acfSiteWideSettings

  return (
    <StyledFooter>
      <div className="wrapper">
        <div className="footer-section">
          <div>
            <h3>Come visit our taproom</h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: address }} />
        </div>
        <div className="footer-section">
          <div>
            <h3>Hours of Operation</h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: hoursOfOperation }} />
        </div>
        <div className="footer-section footer-double">
          <div>
            <h3>Stay in the kown with 948 Brewing Company</h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: stayInTheKnow }} />
        </div>
        <div className="footer-section footer-double footer-social">
          <ul className="socialIcons">
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
            <li className="footer-logo">
              <Link to="/">
                <GatsbyImage image={image} alt={logoAlt} layout="fixed" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copy">
        <p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </p>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: ${colors.colorAlt};

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0 auto;
    padding: 3.5rem 5rem;
  }

  .footer-copy {
    width: 100%;
    max-width: 96rem;
    margin: 0 auto;
    padding: 0 2rem 2rem;
    text-align: center;

    p,
    a {
      ${Nav1White};
      margin: 0;
    }
  }

  .footer-section {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(100% / 3);
      margin: 2rem auto;
      padding: 1rem;

      &.footer-social {
        width: calc(100% / 2);
      }
    }

    @media (min-width: 1025px) {
      width: calc(100% / 6);
      margin: 0;

      &.footer-double {
        width: calc(100% / 3);
      }
    }

    h3 {
      ${Nav1White};
      margin-bottom: 2.5rem;
      font-weight: 600;
      text-transform: uppercase;

      &:hover {
        color: ${colors.white};
        cursor: initial;
      }
    }

    p {
      ${Nav1White};

      &:hover {
        color: ${colors.white};
        cursor: initial;
      }
    }
  }

  .footer-social {
    align-self: center;

    .socialIcons {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 0;

      li:first-of-type {
        margin-left: 0 !important;
      }
    }

    .footer-logo {
      display: inline-block;
      width: 15rem;
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
      fill: ${colors.white};

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

export default Footer
