import React from "react"

import Intro from "../PageComponents/Beers/Intro"
import NowPouring from "../PageComponents/Beers/NowPouring"
import Rent from "../PageComponents/Beers/Rent"
import BeersList from "../PageComponents/Beers/BeersList"

const TempBeers = ({ intro, pouring, rent, beersDisplay }) => {
  return (
    <>
      <Intro
        title={intro.template.beersTemplate.introTitle}
        content={intro.template.beersTemplate.introContent}
        image={intro.template.beersTemplate.introImage}
      />
      <NowPouring
        content={pouring.template.beersTemplate.nowPouringContent}
        image={pouring.template.beersTemplate.nowPouringImage}
      />
      <BeersList beersDisplay={beersDisplay} />
      <Rent
        content={rent.template.beersTemplate.rentTaproomContent}
        image={rent.template.beersTemplate.rentTaproomImage}
      />
    </>
  )
}

export default TempBeers
