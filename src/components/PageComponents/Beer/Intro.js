import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import {
  B1Black,
  H1Black,
  medWrapper,
  H2Orange,
  fontSizer,
  colors,
} from "../../../styles/helpers"
import { Link } from "gatsby"

const Intro = ({ beer, prevBeer, nextBeer }) => {
  const imgDisplay = getImage(
    beer.ourBeers.image.localFile.childImageSharp.gatsbyImageData
  )
  const imgAlt = beer.ourBeers.image.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="image">
          <div className="image__wrap">
            <GatsbyImage
              image={imgDisplay}
              alt={imgAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
        <div className="content">
          <h2>{beer.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: beer.ourBeers.content }} />
        </div>
      </div>
      <BeerNav>
        <Link to={`/our-beers/${prevBeer}`}>&#8249;</Link>
        <Link to={`/our-beers/${nextBeer}`}>&#8250;</Link>
      </BeerNav>
    </SectionStyled>
  )
}

const BeerNav = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  transform: translateY(-50%);

  a {
    ${H2Orange};
    ${fontSizer(2.8, 6, 76.8, 150, 3.0)};

    &:hover {
      color: ${colors.colorPrimary};
    }

    &:first-of-type {
      padding-left: 2.5rem;
    }

    &:last-of-type {
      padding-right: 2.5rem;
    }
  }
`

const SectionStyled = styled.section`
  margin-top: 5rem;
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    margin-top: 7.5rem;
  }

  @media (min-width: 1025px) {
    margin-top: 10rem;
  }

  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .image {
    position: relative;
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50%);
    }

    @media (min-width: 1025px) {
      width: calc(50% - 5rem);
      margin-right: 5rem;
    }
  }

  .content {
    width: 100%;
    padding: 2rem;
    text-align: center;

    @media (min-width: 768px) {
      width: calc(50% - 2.5rem);
      margin-right: auto;
      margin-left: 2.5rem;
      padding: 2rem 2rem 2rem 0;
      text-align: left;
    }

    @media (min-width: 1025px) {
      width: calc(50% - 5rem);
      margin-right: auto;
      margin-left: 5rem;
    }

    h2 {
      ${H1Black};
    }

    p {
      ${B1Black};
    }
  }
`

export default Intro
