import React from "react"

import Hero from "../PageComponents/About/Hero"
import OurStory from "../PageComponents/About/OurStory"
import Founders from "../PageComponents/About/Founders"
import ImageRow from "../PageComponents/About/ImageRow"
import NameStory from "../PageComponents/About/NameStory"

const TempAbout = ({ hero, story, founders, imageRow, nameStory }) => {
  console.log(nameStory)
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
      <NameStory
        top={nameStory.template.aboutTemplate.nameStoryTop}
        bot={nameStory.template.aboutTemplate.nameStoryBottom}
        slug={nameStory.template.aboutTemplate.nameStorySlug}
      />
    </>
  )
}

export default TempAbout
