import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { colors, H1White } from "../../styles/helpers"
import { Link } from "gatsby"

const DirectionSection = ({
  ourStory,
  ourBeers,
  newsEvents,
  nowPouring,
  shopGear,
  seasonalFeature,
  seasonalSlug,
}) => {
  const ourStorySrc = getImage(
    ourStory.localFile.childImageSharp.gatsbyImageData
  )
  const ourStoryAlt = ourStory.altText
  const ourBeersSrc = getImage(
    ourBeers.localFile.childImageSharp.gatsbyImageData
  )
  const ourBeersAlt = ourBeers.altText
  const newsEventsSrc = getImage(
    newsEvents.localFile.childImageSharp.gatsbyImageData
  )
  const newsEventsAlt = newsEvents.altText
  const nowPouringSrc = getImage(
    nowPouring.localFile.childImageSharp.gatsbyImageData
  )
  const nowPouringAlt = nowPouring.altText
  const shopGearSrc = getImage(
    shopGear.localFile.childImageSharp.gatsbyImageData
  )
  const shopGearAlt = shopGear.altText
  const seasonalFeatureSrc = getImage(
    seasonalFeature.localFile.childImageSharp.gatsbyImageData
  )
  const seasonalFeatureAlt = seasonalFeature.altText
  return (
    <StyledSection>
      <div className="top-sec">
        <div className="top-sec__left">
          <div className="our-story">
            <h2>
              <Link to="/our-story">Our Story</Link>
            </h2>
          </div>
          <div>
            <GatsbyImage
              image={ourStorySrc}
              alt={ourStoryAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
        <div className="top-sec__right">
          <div className="top-sec__right--top">
            <div className="our-beers">
              <h3>
                <Link to="/our-beers">Our Beers</Link>
              </h3>
            </div>
            <div>
              <GatsbyImage
                image={ourBeersSrc}
                alt={ourBeersAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>
          <div className="top-sec__right--bot top-sec__right--bot--left">
            <div>
              <GatsbyImage
                image={seasonalFeatureSrc}
                alt={seasonalFeatureAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>
          <div className="top-sec__right--bot top-sec__right--bot--right">
            <div>
              <GatsbyImage
                image={newsEventsSrc}
                alt={newsEventsAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bot-sec">
        <div className="bot-sec__left">
          <div>
            <GatsbyImage
              image={nowPouringSrc}
              alt={nowPouringAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
        <div className="bot-sec__right">
          <div>
            <GatsbyImage
              image={shopGearSrc}
              alt={shopGearAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: ${colors.colorSecondary};

  @media (min-width: 768px) {
    padding-top: 7.5rem;
  }

  .gatsby-image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .bot-sec {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 65rem;

    @media (min-width: 1025px) {
      height: 65rem;
    }

    &__left {
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100%);
      height: calc(50% - 1rem);
      margin-bottom: 1rem;

      @media (min-width: 768px) {
        width: calc(50% - 1rem);
        height: 100%;
        margin-right: 1rem;
        margin-bottom: 0;
      }
    }

    &__right {
      width: calc(100%);
      height: calc(50% - 1rem);
      position: absolute;
      bottom: 0;
      right: 0;
      margin-top: 1rem;

      @media (min-width: 768px) {
        top: 0;
        bottom: auto;
        width: calc(50% - 1rem);
        height: 100%;
        margin-top: 0;
        margin-left: 1rem;
      }
    }
  }

  .top-sec {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
      height: 65rem;
    }

    @media (min-width: 1025px) {
      height: 100rem;
    }

    &__left {
      position: relative;
      width: calc(100%);
      height: 185vw;
      margin: 2rem 0;

      @media (min-width: 768px) {
        width: calc(33.333333% - 2rem);
        margin: 0;
        margin-right: 2rem;
        height: auto;
      }

      .our-story {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        padding: 6.6rem;
        transform: translate(0%, -50%);
        background-color: rgba(244, 62, 53, 0.65);
        text-align: center;
        z-index: 100;

        h2 {
          margin: 0;
        }

        a {
          ${H1White};
          display: block;
          padding: 4rem 6rem;
          border: solid 0.4rem ${colors.white};
          text-transform: uppercase;

          &:hover {
            background-color: ${colors.white};
            color: ${colors.black};
          }
        }
      }
    }

    &__right {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      position: relative;
      width: calc(100%);
      height: 85rem;

      @media (min-width: 768px) {
        width: calc(66.666666%);
        height: auto;
      }

      &--top {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100%);
        height: calc(33.333333% - 2rem);

        @media (min-width: 768px) {
          height: calc(50% - 2rem);
        }

        .our-beers {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          transform: translate(0%, -50%);
          background-color: rgba(36, 36, 36, 0.65);
          text-align: center;
          z-index: 100;

          h3 {
            margin: 0;
          }

          a {
            ${H1White};
            display: block;
            width: 100%;
            padding: 2.5rem;
            text-transform: uppercase;

            &:hover {
              color: ${colors.colorSecondary};
            }
          }
        }
      }

      &--bot {
        position: absolute;
        top: 33.33333%;
        left: 0;
        width: calc(50%);

        @media (min-width: 768px) {
          top: 50%;
          height: calc(50%);
        }

        &--left {
          width: calc(100%);
          height: calc(33.3333% - 1rem);
          margin-bottom: 1rem;

          @media (min-width: 768px) {
            width: calc(40% - 2rem);
            height: calc(50%);
            margin-bottom: 0;
          }
        }

        &--right {
          top: 66.6666%;
          left: auto;
          right: 0;
          width: calc(100%);
          height: calc(33.3333% - 1rem);
          margin-top: 1rem;

          @media (min-width: 768px) {
            top: 50%;
            width: calc(60%);
            height: calc(50%);
            margin-top: 0;
          }
        }
      }
    }
  }
`

export default DirectionSection
