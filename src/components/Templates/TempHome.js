import React from "react"

import Hero from "../PageComponents/Hero"
import DirectionSection from "../PageComponents/DirectionSection"

const TempHome = ({ hero, direction }) => {
  console.log("direction", direction)
  return (
    <>
      <Hero
        bgImg={hero.template.homeTemplate.image}
        title={hero.template.homeTemplate.title}
        logo={hero.template.homeTemplate.logo}
      />
      <DirectionSection
        ourStory={direction.template.homeTemplate.ourStory}
        ourBeers={direction.template.homeTemplate.ourBeers}
        newsEvents={direction.template.homeTemplate.newsEvents}
        nowPouring={direction.template.homeTemplate.nowPouring}
        shopGear={direction.template.homeTemplate.shopGear}
        seasonalFeature={direction.template.homeTemplate.seasonalFeature}
        seasonalSlug={direction.template.homeTemplate.seasonalFeatureSlug}
      />
    </>
  )
}

export default TempHome
