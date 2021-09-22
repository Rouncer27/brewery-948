import React from "react"

import Hero from "../PageComponents/Taproom/Hero"
import ImageSection from "../PageComponents/Taproom/ImageSection"

const TempTaproom = ({ hero, imageSec }) => {
  console.log("imageSec: ", imageSec)

  return (
    <>
      <Hero
        bgImg={hero.template.taproomTemplate.heroBackgroundImage}
        title={hero.template.taproomTemplate.heroTitleTop}
        content={hero.template.taproomTemplate.heroTitleBottom}
      />
      <ImageSection
        leftTallImage={imageSec.template.taproomTemplate.leftTallImage}
        topLongImage={imageSec.template.taproomTemplate.topLongImage}
        rightSideImage={imageSec.template.taproomTemplate.rightSideImage}
        centreSmallImage={imageSec.template.taproomTemplate.centreSmallImage}
        bottomLeftImage={imageSec.template.taproomTemplate.bottomLeftImage}
        bottomRightImage={imageSec.template.taproomTemplate.bottomRightImage}
        bottomHeroImage={imageSec.template.taproomTemplate.bottomHeroImage}
        imageContent={imageSec.template.taproomTemplate.contentRight}
        contactInfo={imageSec.template.taproomTemplate.contentContactInfo}
        emailAddress={imageSec.template.taproomTemplate.emailContactInfo}
      />
    </>
  )
}

export default TempTaproom
