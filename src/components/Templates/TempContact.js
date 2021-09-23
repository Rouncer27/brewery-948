import React from "react"

import Visit from "../PageComponents/Contact/Visit"
import Hours from "../PageComponents/Contact/Hours"
import Rent from "../PageComponents/Contact/Rent"
import ContactForm from "../PageComponents/Contact/ContactForm"

const TempContact = ({ visit, hours, rent }) => {
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
      <Rent
        image={rent.template.contactTemplate.rentTaproomImage}
        content={rent.template.contactTemplate.rentTaproomContent}
      />
      <ContactForm />
    </>
  )
}

export default TempContact
