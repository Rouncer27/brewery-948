import React from "react"

import Visit from "../PageComponents/Contact/Visit"

const TempContact = ({ visit }) => {
  return (
    <>
      <Visit
        image={visit.template.contactTemplate.visitImage}
        content={visit.template.contactTemplate.visitContent}
      />
    </>
  )
}

export default TempContact
