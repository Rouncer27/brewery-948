import React from "react"

import Hero from "../PageComponents/Hero"

const TempHome = ({ hero }) => {
  return (
    <>
      <Hero
        bgImg={hero.template.homeTemplate.image}
        title={hero.template.homeTemplate.title}
        logo={hero.template.homeTemplate.logo}
      />
    </>
  )
}

export default TempHome
