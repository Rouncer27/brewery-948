import { Link } from "gatsby"
import React, { useEffect } from "react"
import styled from "styled-components"
import {
  medWrapper,
  colors,
  B1White,
  IntroOrange,
  Btn1Orange,
} from "../../../styles/helpers"

import beakerGIF from "../../../images/story-triangle-flask.gif"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const NameStory = ({ top, bot, slug }) => {
  useEffect(() => {
    const contentTop = document.querySelector(".content__top")
    const contentBot = document.querySelector(".content__bot")
    const contentLink = document.querySelector(".content__link")

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#journey-trigger",
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
        [contentLink],
        {
          autoAlpha: 0,
          x: 200,
        },
        {
          autoAlpha: 1,
          duration: 2,
          x: 0,
          ease: "power4.out",
        },
        "start+=0.5"
      )
  }, [])
  return (
    <DivStyled id="journey-trigger">
      <div className="wrapper">
        <div className="icon">
          <img src={beakerGIF} alt="" />
        </div>
        <div className="content">
          <div
            className="content__top"
            dangerouslySetInnerHTML={{ __html: top }}
          />
          <div
            className="content__bot"
            dangerouslySetInnerHTML={{ __html: bot }}
          />
          <div className="content__link">
            <Link to={`/${slug}`}>Read About Our Journey</Link>
          </div>
        </div>
      </div>
    </DivStyled>
  )
}

const DivStyled = styled.div`
  padding: 7.5rem 0 5rem 0;
  background-color: ${colors.colorAlt};

  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .icon {
    width: calc(100%);
    max-width: 15rem;
    margin-bottom: 5rem;

    @media (min-width: 768px) {
      width: calc(20% - 2rem);
      max-width: 100%;
      margin-right: 2rem;
      margin-bottom: 0;
    }
  }

  .content {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(80%);
    }

    &__top {
      width: 100%;
      margin-bottom: 4rem;

      p {
        ${IntroOrange};
        &:last-of-type {
          margin: 0;
        }
      }
    }

    &__bot {
      width: 100%;

      p {
        ${B1White};

        &:last-of-type {
          margin: 0;
        }
      }
    }

    &__link {
      width: 100%;
      margin-top: 5rem;

      a {
        ${Btn1Orange};
      }
    }
  }
`

export default NameStory
