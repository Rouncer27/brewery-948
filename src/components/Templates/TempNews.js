import React from "react"

import Intro from "../PageComponents/News/Intro"
import Posts from "../PageComponents/News/Posts"

const TempNews = ({ intro }) => {
  return (
    <>
      <Intro
        title={intro.template.newsTemplate.introTitle}
        content={intro.template.newsTemplate.introContent}
        image={intro.template.newsTemplate.introImage}
      />
      <Posts />
    </>
  )
}

export default TempNews
