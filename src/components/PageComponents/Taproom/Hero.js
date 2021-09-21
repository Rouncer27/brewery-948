import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import HeroImage from "../Hero/HeroImage"
import HeroConentThree from "../Hero/HeroConentThree"

const Hero = ({ bgImg, title, content }) => {
  return (
    <StyledSection>
      <HeroImage bgImg={bgImg} />
      <HeroConentThree title={title} content={content} />
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
