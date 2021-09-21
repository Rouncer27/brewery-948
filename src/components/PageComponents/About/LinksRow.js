import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { colors, H1White } from "../../../styles/helpers"

const LinksRow = ({ beer, events, taproom }) => {
  const beerDisplay = getImage(beer.localFile.childImageSharp.gatsbyImageData)
  const beerAlt = beer.altText
  const eventsDisplay = getImage(
    events.localFile.childImageSharp.gatsbyImageData
  )
  const eventsAlt = events.altText
  const taproomDisplay = getImage(
    taproom.localFile.childImageSharp.gatsbyImageData
  )
  const taproomAlt = taproom.altText
  return (
    <DivStyled>
      <div className="wrapper">
        <div className="image beer-img">
          <Link to="/our-beers">Our Beers</Link>
          <GatsbyImage
            image={beerDisplay}
            alt={beerAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="image event-img">
          <Link to="/news-and-events">Events News</Link>
          <GatsbyImage
            image={eventsDisplay}
            alt={eventsAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="image taproom-img">
          <Link to="/taproom">Vist Our Taproom</Link>
          <GatsbyImage
            image={taproomDisplay}
            alt={taproomAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  background-color: ${colors.colorAlt};

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .image {
    position: relative;
    width: calc((100% / 1));
    height: 30rem;

    @media (min-width: 768px) {
      width: calc((100% / 3) - 1rem);
      height: 40rem;
    }

    @media (min-width: 1025px) {
      height: 50rem;
    }

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    a {
      ${H1White};
      display: block;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      padding: 5rem 2rem;
      background-color: rgba(213, 123, 46, 0.65);
      transform: translateY(-50%);
      text-align: center;
      z-index: 100;

      &:hover {
        color: ${colors.black};
      }
    }
  }

  .beer-img {
    margin-bottom: 2.5rem;

    @media (min-width: 768px) {
      margin-right: 1rem;
    }
  }

  .event-img {
    margin-bottom: 2.5rem;

    @media (min-width: 768px) {
      margin-right: 0.5rem;
      margin-left: 0.5rem;
    }
  }

  .taproom-img {
    @media (min-width: 768px) {
      margin-left: 1rem;
    }
  }
`

export default LinksRow
