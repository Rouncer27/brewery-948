import React from "react"

import Intro from "../PageComponents/Beers/Intro"

const TempBeers = ({ intro, pouring, rent }) => {
  console.log(intro, pouring, rent)
  return (
    <div>
      <Intro
        title={intro.template.beersTemplate.introTitle}
        content={intro.template.beersTemplate.introContent}
        image={intro.template.beersTemplate.introImage}
      />
    </div>
  )
}

export default TempBeers
