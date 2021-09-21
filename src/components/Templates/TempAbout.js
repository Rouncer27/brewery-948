import React from "react"

import Hero from "../PageComponents/About/Hero"
import OurStory from "../PageComponents/About/OurStory"
import Founders from "../PageComponents/About/Founders"
import ImageRow from "../PageComponents/About/ImageRow"

const TempAbout = ({ hero, story, founders, imageRow }) => {
  console.log(imageRow)
  return (
    <>
      <Hero
        bgImg={hero.template.aboutTemplate.heroTopImage}
        title={hero.template.aboutTemplate.heroTopContent}
        logo={hero.template.aboutTemplate.heroTopIcon}
      />
      <OurStory story={story} />
      <Founders
        content={founders.template.aboutTemplate.foundersContent}
        sketch={founders.template.aboutTemplate.foundersSketch}
      />
      <ImageRow
        left={imageRow.template.aboutTemplate.imageRowLeft}
        right={imageRow.template.aboutTemplate.imageRowRight}
      />
    </>
  )
}

export default TempAbout
