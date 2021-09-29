import React, { useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { B1Black, H1Black, H3Orange, medWrapper } from "../../../styles/helpers"

import arrowGIF from "../../../images/loop-down-big.gif"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Founders = ({ content, sketch }) => {
  useEffect(() => {
    const contentTop = document.querySelector(".content__title")
    const contentBot = document.querySelector(".content__body")
    const sketch = document.querySelector(".sketch")

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#founder-trigger",
          markers: false,
          start: "top 35%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        [contentTop],
        {
          autoAlpha: 0,
          x: 150,
        },
        {
          autoAlpha: 1,
          duration: 1,
          x: 0,
          ease: "power4.out",
        }
      )
      .fromTo(
        [contentBot],
        {
          autoAlpha: 0,
          y: 150,
        },
        {
          autoAlpha: 1,
          duration: 1,
          y: 0,
          ease: "power4.out",
        },
        "start+=0.25"
      )
      .fromTo(
        [sketch],
        {
          autoAlpha: 0,
          x: -200,
        },
        {
          autoAlpha: 1,
          duration: 2,
          x: 0,
          ease: "power4.out",
        },
        "start"
      )
  }, [])

  const sketchDisplay = getImage(
    sketch.localFile.childImageSharp.gatsbyImageData
  )
  const sketchAlt = sketch.altText
  return (
    <SectionStyled id="founder-trigger">
      <div className="wrapper">
        <div className="title">
          <h2>948 Founders</h2>
          <div className="arrow-one">
            <img src={arrowGIF} alt="" />
          </div>
        </div>
        <div className="sketch">
          <GatsbyImage
            image={sketchDisplay}
            alt={sketchAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="content">
          <div className="content__title">
            <h3>Dave + Kyle, Co-Founders</h3>
          </div>

          <div
            className="content__body"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  padding: 5rem 0;

  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .title {
    position: relative;
    width: 100%;
    text-align: center;

    h2 {
      ${H1Black};
      margin-bottom: 6rem;
      text-transform: uppercase;
    }

    .arrow-one {
      position: absolute;
      top: 15%;
      left: 25%;
      width: 10rem;
      z-index: 1000;
    }
  }

  .sketch {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50% - 4.1rem);
      margin-right: 4.1rem;
    }
  }

  .content {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(50%);
    }

    h3 {
      ${H3Orange};
      margin-bottom: 3rem;
    }

    &__body {
      p {
        ${B1Black};
      }
    }
  }
`

export default Founders
