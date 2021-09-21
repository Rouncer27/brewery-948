import React from "react"

import Hero from "../PageComponents/About/Hero"
import OurStory from "../PageComponents/About/OurStory"

const TempAbout = ({ hero, story }) => {
  return (
    <>
      <Hero
        bgImg={hero.template.aboutTemplate.heroTopImage}
        title={hero.template.aboutTemplate.heroTopContent}
        logo={hero.template.aboutTemplate.heroTopIcon}
      />
      <OurStory story={story} />
    </>
  )
}

export default TempAbout
