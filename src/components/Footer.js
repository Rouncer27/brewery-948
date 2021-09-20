import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { colors, Nav1White } from "../styles/helpers"

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

  const { address, hoursOfOperation, stayInTheKnow } =
    data.footerData.acfOptionsSiteWideSettings.acfSiteWideSettings

  console.log("FOOTER DATA", data)

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
        <div className="footer-section">
          <div>
            <h3>Stay in the kown with 948 Brewing Company</h3>
          </div>
          <div dangerouslySetInnerHTML={{ __html: stayInTheKnow }} />
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
    justify-content: center;
    margin: 0 auto;
    padding: 3.5rem 5rem;
  }

  .footer-copy {
    width: 100%;
    max-width: 96rem;
    margin: 0 auto;
    text-align: center;

    p,
    a {
      ${Nav1White};
      margin: 0;
    }
  }

  .footer-section {
    @media (min-width: 1025px) {
      width: calc(100% / 4);
    }

    h3 {
      ${Nav1White};
      margin-bottom: 2.5rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    p {
      ${Nav1White};
    }
  }
`

export default Footer
