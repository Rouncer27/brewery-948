import React from "react"

import Intro from "../PageComponents/Beer/Intro"
import Details from "../PageComponents/Beer/Details"
import Taproom from "../PageComponents/Beer/Taproom"

const TempBeer = ({ beer, allBeers, prevBeer, nextBeer }) => {
  return (
    <>
      <Intro beer={beer} />
      <Details details={beer.ourBeers.details} url={beer.ourBeers.buyNowUrl} />
      <Taproom />
    </>
  )
}

export default TempBeer
