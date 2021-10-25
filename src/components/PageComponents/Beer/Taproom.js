import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import HeroImage from "../Hero/HeroImage"
import HeroConentFour from "../Hero/HeroContentFour"

const getData = graphql`
  {
    taproom: wp {
      acfOptionsSiteWideSettings {
        acfSiteWideSettings {
          singleBeerTaproomImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 2000)
              }
            }
          }
        }
      }
    }
  }
`

const Taproom = () => {
  const data = useStaticQuery(getData)
  const image =
    data.taproom.acfOptionsSiteWideSettings.acfSiteWideSettings
      .singleBeerTaproomImage
  return (
    <StyledSection>
      <HeroImage bgImg={image} />
      <HeroConentFour
        content="<p>Visit us in our Taproom.<br/> Beer is always better with friends.</p>"
        slug="https://menu.948brewing.ca/"
        external={true}
        btnText="Now Pouring"
      />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  height: 40rem;

  @media (min-width: 768px) {
    height: 40rem;
  }

  @media (min-width: 1025px) {
    height: 40rem;
  }
`

export default Taproom
