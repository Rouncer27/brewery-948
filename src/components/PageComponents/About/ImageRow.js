import React, { useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ImageRow = ({ left, right }) => {
  const leftDisplay = getImage(left.localFile.childImageSharp.gatsbyImageData)
  const leftAlt = left.altText
  const rightDisplay = getImage(right.localFile.childImageSharp.gatsbyImageData)
  const rightAlt = right.altText

  useEffect(() => {
    const imgLeft = document.querySelector(".image-left")
    const imgRight = document.querySelector(".image-right")

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#row-trigger",
          markers: false,
          start: "top 35%",
          toggleActions: "play none none none",
        },
      })
      .add("start")
      .fromTo(
        [imgLeft],
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
        [imgRight],
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

  return (
    <DivStyled id="row-trigger">
      <div className="wrapper">
        <div className="image image-left">
          <GatsbyImage
            image={leftDisplay}
            alt={leftAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
        <div className="image image-right">
          <GatsbyImage
            image={rightDisplay}
            alt={rightAlt}
            layout="fullWidth"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .image {
    position: relative;
    width: 100%;
    height: 100vw;

    @media (min-width: 768px) {
      width: calc(50%);
      height: 40rem;
    }

    @media (min-width: 1025px) {
      width: calc(50%);
      height: 60rem;
    }

    .gatsby-image-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export default ImageRow
