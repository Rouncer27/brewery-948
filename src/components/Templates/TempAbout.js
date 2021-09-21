import React from "react"

import Hero from "../PageComponents/About/Hero"

const TempAbout = ({ hero }) => {
  return (
    <>
      <Hero
        bgImg={hero.template.aboutTemplate.heroTopImage}
        title={hero.template.aboutTemplate.heroTopContent}
        logo={hero.template.aboutTemplate.heroTopIcon}
      />
    </>
  )
}

export default TempAbout
