import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { colors, H1White, H3White } from "../../styles/helpers"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import arrowUpGIF from "../../images/loopup-big.gif"
import arrowDownGIF from "../../images/loop-down-orange.gif"

gsap.registerPlugin(ScrollTrigger)

const DirectionSection = ({
  ourStory,
  ourBeers,
  newsEvents,
  nowPouring,
  shopGear,
  seasonalFeature,
  seasonalSlug,
}) => {
  useEffect(() => {
    const topLeft = document.querySelector(".top-sec__left")
    const topRightTop = document.querySelector(".top-sec__right--top")
    const topRightBotLeft = document.querySelector(".top-sec__right--bot--left")
    const topRightBotRight = document.querySelector(
      ".top-sec__right--bot--right"
    )

    gsap.set(topRightTop, { x: 200, autoAlpha: 0 })
    gsap.set(topRightBotLeft, { y: 200, autoAlpha: 0 })
    gsap.set(topRightBotRight, { x: 100, autoAlpha: 0 })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#top-trigger",
          markers: false,
          start: "top 35%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        [topLeft],
        {
          autoAlpha: 0,
          y: 150,
        },
        {
          autoAlpha: 1,
          duration: 1,
          y: 0,
          ease: "power4.out",
        }
      )
      .to(
        [topRightTop, topRightBotLeft, topRightBotRight],
        {
          autoAlpha: 1,
          duration: 1,
          x: 0,
          y: 0,
          ease: "power4.out",
          stagger: { each: 0.55 },
        },
        "start"
      )

    const botLeft = document.querySelector(".bot-sec__left")
    const botRight = document.querySelector(".bot-sec__right")

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#bot-trigger",
          markers: false,
          start: "top 35%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        [botLeft],
        {
          autoAlpha: 0,
          x: -150,
        },
        {
          autoAlpha: 1,
          duration: 1,
          x: 0,
          ease: "power4.out",
        }
      )
      .fromTo(
        [botRight],
        {
          autoAlpha: 0,
          x: 150,
        },
        {
          autoAlpha: 1,
          duration: 1,
          x: 0,
          ease: "power4.out",
        },
        "start"
      )
  }, [])

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
      <div id="top-trigger" className="top-sec">
        <div className="top-sec__left">
          <Link className="our-story" to="/our-story">
            <h2>
              Our Story
              <span className="arrow-one">
                <img src={arrowUpGIF} alt="" />
              </span>
            </h2>
          </Link>
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
            <Link to="/our-beers" className="our-beers">
              <span>
                Our Beers
                <span className="arrow-one">
                  <img src={arrowDownGIF} alt="" />
                </span>
              </span>
            </Link>
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
            <div className="seasonal-feature">
              <h3>
                <Link to={`/${seasonalSlug}`}>
                  <span>Seasonal Feature</span>{" "}
                  <span>&#43; Community Collaborations</span>
                </Link>
              </h3>
            </div>
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
            <Link className="news-events" to={`/news-and-events`}>
              <span>News &#43; Events</span>
            </Link>
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
      <div id="bot-trigger" className="bot-sec">
        <div className="bot-sec__left">
          <a
            className="shop-gear"
            target="_blank"
            rel="noreferrer"
            href="https://948-brewing-company.square.site/"
          >
            <span>Shop Beer &#43; Gear</span>
          </a>

          <div>
            <GatsbyImage
              image={shopGearSrc}
              alt={shopGearAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
        <div className="bot-sec__right">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://948brewing.ca/"
            className="now-pouring"
          >
            <span>Now Pouring</span>
          </a>
          <div>
            <GatsbyImage
              image={nowPouringSrc}
              alt={nowPouringAlt}
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

      .shop-gear {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(36, 36, 36, 0.5);
        text-align: center;
        z-index: 100;

        span {
          ${H3White};
          display: block;
          position: relative;
          transform: translateY(100%);
          transition: all 0.3s ease-out;
          text-transform: uppercase;
          opacity: 0;
        }

        &:hover {
          span {
            transform: translateY(0%);
            opacity: 1;
          }
        }
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

      .now-pouring {
        ${H1White};
        display: block;
        width: 100%;
        padding: 2.5rem;
        text-transform: uppercase;
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        transform: translate(0%, -50%);
        transition: all 0.3s ease-out;
        text-align: center;
        z-index: 100;

        span {
          position: relative;
          z-index: 99999;
        }

        &::after {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          content: "";
          background-color: rgba(36, 36, 36, 0.65);
          transition: all 0.3s ease-out;
          z-index: 1;
        }

        &::before {
          position: absolute;
          width: 0;
          height: 100%;
          top: 0;
          right: 0;
          content: "";
          background-color: #d57b2e;
          transition: all 0.3s ease-out;
          z-index: 10;
        }

        &:hover {
          color: ${colors.black};

          &::before {
            width: 100%;
          }
        }
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
      overflow: hidden;

      @media (min-width: 768px) {
        width: calc(33.333333% - 2rem);
        margin: 0;
        margin-right: 2rem;
        height: auto;
      }

      .arrow-one {
        position: absolute;
        bottom: -5rem;
        right: 3rem;
        width: 10rem;
        z-index: 100;

        transform: rotate(-30deg);
      }

      .our-story {
        ${H1White};
        display: block;
        text-transform: uppercase;
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        padding: 6.6rem;
        transition: all 0.3s ease-out;
        transform: translate(0%, -50%);
        background-color: rgba(244, 62, 53, 0.65);
        text-align: center;
        z-index: 100;

        h2 {
          ${H1White};
          position: relative;
          width: 100%;
          display: block;
          margin: 0;
          padding: 4rem 6rem;
          transition: all 0.3s ease-out;
          border: solid 0.4rem ${colors.white};

          &:hover {
            background-color: ${colors.white};
            color: ${colors.black};
          }
        }

        &:hover {
          padding: 100% 6.6rem;
          h2 {
            color: ${colors.black};
            background-color: ${colors.white};
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
          ${H1White};
          position: relative;
          display: block;
          width: 100%;
          padding: 2.5rem;
          text-transform: uppercase;
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          transform: translate(0%, -50%);
          transition: all 0.3s ease-out;
          text-align: center;
          z-index: 100;

          .arrow-one {
            position: absolute;
            top: -12rem;
            left: 0rem;
            width: 10rem;
            z-index: 100;
            transform: rotate(0deg);
          }

          span {
            position: relative;
            z-index: 99999;
          }

          &::after {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            content: "";
            background-color: rgba(36, 36, 36, 0.65);
            transition: all 0.3s ease-out;
            z-index: 1;
          }

          &::before {
            position: absolute;
            width: 0;
            height: 100%;
            top: 0;
            right: 0;
            content: "";
            background-color: #d57b2e;
            transition: all 0.3s ease-out;
            z-index: 10;
          }

          &:hover {
            color: ${colors.black};

            &::before {
              width: 100%;
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

          .seasonal-feature {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(36, 36, 36, 0.65);
            text-align: center;
            z-index: 100;

            h3 {
              margin: 0;
            }

            a {
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              flex-direction: column;
              justify-content: center;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              width: 100%;
              padding: 2.5rem;

              span {
                display: block;
                text-transform: uppercase;
              }

              span:first-of-type {
                ${H1White};
              }

              span:last-of-type {
                ${H3White};
                margin-top: 2rem;
              }

              &:hover {
                color: ${colors.colorSecondary};
              }
            }
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

          .news-events {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(36, 36, 36, 0.5);
            text-align: center;
            z-index: 100;

            span {
              ${H3White};
              display: block;
              position: relative;
              transform: translateY(100%);
              transition: all 0.3s ease-out;
              text-transform: uppercase;
              opacity: 0;
            }

            &:hover {
              span {
                transform: translateY(0%);
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }
`

DirectionSection.propTypes = {
  ourStory: PropTypes.object,
  ourBeers: PropTypes.object,
  newsEvents: PropTypes.object,
}

export default DirectionSection
