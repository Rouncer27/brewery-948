import React, { useState } from "react"
import styled from "styled-components"
import {
  B1White,
  Btn1Orange,
  colors,
  H2White,
  standardWrapper,
} from "../../../styles/helpers"

import IconPhone from "../../Icons/IconPhone"
import submitToServer from "../../FormParts/functions/submitToServer"
import FormSuccess from "../../FormParts/formModals/FormSuccess"
import FormSubmit from "../../FormParts/formModals/FormSubmit"
import FormErrors from "../../FormParts/formModals/FormErrors"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    errorWarnDisplay: false,
    success: false,
    errors: [],
  })

  const handleOnChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleOnSubmit = async event => {
    event.preventDefault()
    setFormStatus({
      ...formStatus,
      submitting: true,
    })
    const formDataArray = Object.entries(formData)
    const bodyFormData = new FormData()
    formDataArray.forEach(field => {
      bodyFormData.append(field[0], field[1])
    })

    const response = await submitToServer(566, bodyFormData)

    if (!response.errors) {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: false,
        success: true,
        errors: [],
      })
    } else {
      setFormStatus({
        ...formStatus,
        submitting: false,
        errorWarnDisplay: true,
        success: false,
        errors: response.errorMessages,
      })
    }
  }

  const handleErrorModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
    })
  }

  const handleSuccessModalClose = () => {
    setFormStatus({
      ...formStatus,
      submitting: false,
      errorWarnDisplay: false,
      success: false,
      errors: [],
    })

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="icon">
          <IconPhone />
        </div>
        <form onSubmit={handleOnSubmit}>
          <div className="title">
            <h2>Contact Form</h2>
            <p>
              Do you have a question for us or want to know more about renting
              our Taproom?
            </p>
          </div>
          <InputField>
            <label htmlFor="firstName">
              Frist Name <span className="required">(required)</span>
              <span
                className={`error-message ${
                  formStatus.errors.findIndex(
                    error => error.idref === "firstName"
                  ) !== -1 && " error-active"
                }`}
              >
                You must input a name.
              </span>
              <input
                name="firstName"
                type="text"
                value={formData.firstName}
                id="firstName"
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>
          <InputField>
            <label htmlFor="lastName">
              Last Name <span className="required">(required)</span>
              <span
                className={`error-message ${
                  formStatus.errors.findIndex(
                    error => error.idref === "lastName"
                  ) !== -1 && " error-active"
                }`}
              >
                You must input a name.
              </span>
              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                id="lastName"
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>
          <InputField>
            <label htmlFor="email">
              Email <span className="required">(required)</span>
              <span
                className={`error-message ${
                  formStatus.errors.findIndex(
                    error => error.idref === "email"
                  ) !== -1 && " error-active"
                }`}
              >
                You must input a email.
              </span>
              <input
                name="email"
                type="email"
                value={formData.email}
                id="email"
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>
          <InputField>
            <label htmlFor="phone">
              phone number <span className="required">(required)</span>
              <span
                className={`error-message ${
                  formStatus.errors.findIndex(
                    error => error.idref === "phone"
                  ) !== -1 && " error-active"
                }`}
              >
                You must input a phone number.
              </span>
              <input
                name="phone"
                type="text"
                value={formData.phone}
                id="phone"
                onChange={handleOnChange}
                aria-required="true"
                required
              />
            </label>
          </InputField>
          <InputField size="full">
            <label htmlFor="message">
              Add a message <span className="required">(required)</span>
              <span
                className={`error-message${
                  formStatus.errors.findIndex(
                    error => error.idref === "message"
                  ) !== -1
                    ? " error-active"
                    : ""
                }`}
              >
                Add a message
              </span>
              <textarea
                name="message"
                value={formData.message}
                id="message"
                onChange={handleOnChange}
                rows={6}
                // aria-required="true"
                // required
              />
            </label>
          </InputField>
          <div className="btn-submit">
            <button>Submit</button>
          </div>
        </form>
      </div>
      <FormSubmit isActive={formStatus.submitting} />
      <FormSuccess
        isActive={formStatus.success}
        handleClose={handleSuccessModalClose}
      />
      <FormErrors
        isActive={formStatus.errorWarnDisplay}
        handleClose={handleErrorModalClose}
      />
    </SectionStyled>
  )
}

const SectionStyled = styled.div`
  padding: 4rem 0;
  background-color: ${colors.colorAlt};

  .wrapper {
    ${standardWrapper};
    justify-content: flex-start;

    @media (min-width: 768px) {
      justify-content: center;
    }
  }

  .icon {
    width: calc(100%);
    max-width: 17.5rem;
    margin-bottom: 2.5rem;
    padding-left: 2rem;

    @media (min-width: 768px) {
      width: calc(20%);
      max-width: 100%;
      margin-bottom: 0;
      padding: 2rem;
    }
  }

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(80%);
    }

    .title {
      margin-left: 2rem;

      h2 {
        ${H2White};
        text-transform: uppercase;
      }

      p {
        ${B1White};
      }
    }

    .btn-submit {
      margin-top: 2.5rem;
      margin-left: 2rem;

      button {
        ${Btn1Orange};
      }
    }
  }
`

const InputField = styled.div`
  width: calc(100% - 4rem);
  margin: 1rem 2rem;
  padding: 1rem 0;

  @media (min-width: 768px) {
    width: ${props =>
      props.size === "full" ? "calc(100% - 4rem)" : "calc(50% - 4rem)"};
    margin: 1rem 2rem;
  }

  label {
    ${B1White};
    display: block;
    width: 100%;
    line-height: 1.5;

    .error-message {
      display: none;
    }

    .error-active {
      display: inline-block;
      color: red;
      padding-left: 2rem;
    }

    input,
    textarea {
      display: block;
      margin-top: 0.25rem;
      margin-bottom: 0.5rem;
      padding: 0.9rem 1rem;
      border-radius: 0.2rem;
      color: #000;
      margin-left: 0;
      margin-right: 0;
      width: 100%;
      background-color: #f1f9ff;
      border: 0.1rem #bce0fd solid;
      border-radius: 1rem;
    }
  }
`

export default ContactForm
