import React from "react"

import Visit from "../PageComponents/Contact/Visit"
import Hours from "../PageComponents/Contact/Hours"

const TempContact = ({ visit, hours }) => {
  return (
    <>
      <Visit
        image={visit.template.contactTemplate.visitImage}
        content={visit.template.contactTemplate.visitContent}
      />
      <Hours
        image={hours.template.contactTemplate.hoursImage}
        content={hours.template.contactTemplate.hoursContent}
      />
    </>
  )
}

export default TempContact
