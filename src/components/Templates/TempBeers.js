import React from "react"

import Intro from "../PageComponents/Beers/Intro"
import NowPouring from "../PageComponents/Beers/NowPouring"

const TempBeers = ({ intro, pouring, rent }) => {
  console.log(intro, pouring, rent)
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
    </>
  )
}

export default TempBeers
