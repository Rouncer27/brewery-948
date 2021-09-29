import React from "react"

import Content from "../PageComponents/DefaultPages/Content"

const TempDefault = ({ page }) => {
  return (
    <>
      <Content content={page.content} title={page.title} />
    </>
  )
}

export default TempDefault
