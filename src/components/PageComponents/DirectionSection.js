import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { colors } from "../../styles/helpers"

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
          <div className="dir-img">
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
            <div className="dir-img">
              <GatsbyImage
                image={ourBeersSrc}
                alt={ourBeersAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>
          <div className="top-sec__right--bot top-sec__right--bot--left">
            <div className="dir-img">
              <GatsbyImage
                image={seasonalFeatureSrc}
                alt={seasonalFeatureAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>
          <div className="top-sec__right--bot top-sec__right--bot--right">
            <div className="dir-img">
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
