import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import HeroImage from "../Hero/HeroImage"
import HeroContentOne from "../Hero/HeroContentOne"

const Hero = ({ bgImg, title, logo }) => {
  return (
    <StyledSection>
      <HeroImage bgImg={bgImg} />
      <HeroContentOne title={title} logo={logo} />
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
    height: 67.5rem;
  }
`

Hero.propTypes = {
  bgImg: PropTypes.object,
  title: PropTypes.string,
  logo: PropTypes.object,
}

export default Hero
