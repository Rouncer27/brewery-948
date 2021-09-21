import React from "react"

import Hero from "../PageComponents/Taproom/Hero"

const TempTaproom = ({ hero }) => {
  return (
    <>
      <Hero
        bgImg={hero.template.taproomTemplate.heroBackgroundImage}
        title={hero.template.taproomTemplate.heroTitleTop}
        content={hero.template.taproomTemplate.heroTitleBottom}
      />
    </>
  )
}

export default TempTaproom
