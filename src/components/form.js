import React, { useState } from "react"
import styled from "styled-components"
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import device from "./device"

const FieldWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 3rem 0;
  position: relative;
  ${device.small`display: block;`}
  label {
    flex: 1;
    font-family: "Lora";
    text-transform: uppercase;
    font-weight: 700;
  }
  input,
  textarea {
    display: block;
    color: var(--white);
    flex: 4;
    background: transparent;
    border: 0;
    border-bottom: 0.0063rem solid var(--white);
    padding: 0.1rem;
    ${device.small`width: 100%; margin-top: 1rem;`}
  }

  .error {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    color: #932422;
    font-size: 0.7rem;
    ${device.small`
    top: 80%;
    `}
  }
`

const ButtonWrapper = styled.div`
  margin-top: 5rem;
  button {
    margin-left: auto;
    width: 40%;
    display: block;
    text-align: center;
    padding: 1rem 0;
    background: var(--yellow);
    color: var(--black);
  }
`

const SubmitError = styled.div``

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
})

const ContactForm = () => {
  const [error, setError] = useState(false)
  function handleSubmit(values, setSubmitting, resetForm) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...values,
      }),
    })
      .then(() => {
        resetForm()
        console.log("submitted")
      })
      .catch(() => {
        setError(true)
        console.log("error")
      })
    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        msg: "",
      }}
      validationSchema={Schema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmit(values, setSubmitting, resetForm)
      }}
    >
      {({ isSubmitting }) => (
        <Form
          method="post"
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <FieldWrapper>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" className="input" />
            <div className="error">
              <ErrorMessage name="name" />
            </div>
          </FieldWrapper>

          <FieldWrapper>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" className="input" />
            <div className="error">
              <ErrorMessage name="email" />
            </div>
          </FieldWrapper>

          <FieldWrapper>
            <label htmlFor="name">Message</label>
            <Field name="msg" component="textarea" rows="1" className="input" />
          </FieldWrapper>

          <ButtonWrapper>
            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
          </ButtonWrapper>

          {error && (
            <SubmitError>Something went wrong. Please try again!</SubmitError>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
