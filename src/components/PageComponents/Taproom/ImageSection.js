import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Btn1Grey, colors, H2White, H3White } from "../../../styles/helpers"

import HeroImage from "../Hero/HeroImage"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const ImageSection = ({
  leftTallImage,
  topLongImage,
  rightSideImage,
  centreSmallImage,
  bottomLeftImage,
  bottomRightImage,
  imageContent,
  contactInfo,
  emailAddress,
  bottomHeroImage,
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
          trigger: "#top-tap-trigger",
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
          trigger: "#bot-tap-trigger",
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

  const leftTallSrc = getImage(
    leftTallImage.localFile.childImageSharp.gatsbyImageData
  )
  const leftTallAlt = leftTallImage.altText

  const topLongSrc = getImage(
    topLongImage.localFile.childImageSharp.gatsbyImageData
  )
  const topLongAlt = topLongImage.altText

  const rightSideSrc = getImage(
    rightSideImage.localFile.childImageSharp.gatsbyImageData
  )
  const rightSideAlt = rightSideImage.altText

  const centreSmallSrc = getImage(
    centreSmallImage.localFile.childImageSharp.gatsbyImageData
  )
  const centreSmallAlt = centreSmallImage.altText

  const bottomLeftSrc = getImage(
    bottomLeftImage.localFile.childImageSharp.gatsbyImageData
  )
  const bottomLeftAlt = bottomLeftImage.altText

  const bottomRightSrc = getImage(
    bottomRightImage.localFile.childImageSharp.gatsbyImageData
  )
  const bottomRightAlt = bottomRightImage.altText
  return (
    <StyledSection>
      <div id="top-tap-trigger" className="top-sec">
        <div className="top-sec__left">
          <div>
            <GatsbyImage
              image={leftTallSrc}
              alt={leftTallAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
        <div className="top-sec__right">
          <div className="top-sec__right--top">
            <div>
              <GatsbyImage
                image={topLongSrc}
                alt={topLongAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>
          <div className="top-sec__right--bot top-sec__right--bot--left">
            <div>
              <GatsbyImage
                image={centreSmallSrc}
                alt={centreSmallAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>
          <div className="top-sec__right--bot top-sec__right--bot--right">
            <div className="img-content">
              <p>{imageContent}</p>
            </div>
            <div>
              <GatsbyImage
                image={rightSideSrc}
                alt={rightSideAlt}
                layout="fullWidth"
                formats={["auto", "webp", "avif"]}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="bot-tap-trigger" className="bot-sec">
        <div className="bot-sec__left">
          <div className="img-content">
            <div dangerouslySetInnerHTML={{ __html: contactInfo }} />
            <a href={`mailto: ${emailAddress}`}>Email Us Today</a>
          </div>
          <div>
            <GatsbyImage
              image={bottomLeftSrc}
              alt={bottomLeftAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
        <div className="bot-sec__right">
          <div>
            <GatsbyImage
              image={bottomRightSrc}
              alt={bottomRightAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <HeroImage bgImg={bottomHeroImage} />
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

  .hero-bottom {
    position: relative;
    height: 50rem;
    margin-top: 2rem;

    @media (min-width: 768px) {
      height: 60rem;
    }

    @media (min-width: 1025px) {
      height: 67.5rem;
    }
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

      .img-content {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 4rem 8rem;
        background-color: rgba(36, 36, 36, 0.5);
        text-align: center;
        z-index: 100;

        p {
          ${H3White};
          width: 100%;
        }

        a {
          ${Btn1Grey};
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

          .img-content {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 4rem 8rem;
            background-color: rgba(36, 36, 36, 0.5);
            text-align: center;
            z-index: 100;

            p {
              ${H2White};
              margin: 0;
            }
          }
        }
      }
    }
  }
`

ImageSection.propTypes = {
  ourStory: PropTypes.object,
  ourBeers: PropTypes.object,
  newsEvents: PropTypes.object,
}

export default ImageSection
