import React from "react"
import styled from "styled-components"

import HeroImage from "../Hero/HeroImage"
import HeroConentFour from "../Hero/HeroContentFour"

const Rent = ({ image, content }) => {
  return (
    <StyledSection>
      <HeroImage bgImg={image} />
      <HeroConentFour
        content={content}
        slug={"taproom"}
        external={false}
        btnText="Rent Our Taproom"
      />
    </StyledSection>
  )
}

const StyledSection = styled.section`
  position: relative;
  height: 50rem;

  @media (min-width: 768px) {
    height: 60rem;
  }

  @media (min-width: 1025px) {
    height: 55rem;
  }
`

export default Rent
