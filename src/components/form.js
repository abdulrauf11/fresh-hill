import React, { useState } from "react"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"
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

  text-area {
    overflow: visible;
  }

  .error {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    color: #932422;
    font-size: 0.7rem;
    ${device.small`top: 80%;`}
  }
`

const ButtonWrapper = styled(animated.div)`
  button {
    margin-left: auto;
    width: 40%;
    display: block;
    text-align: center;
    padding: 1rem 0;
    background: var(--yellow);
    color: var(--black);
    position: relative;
    border: 2px solid var(--yellow);
    transition: all 0.2s;
    ${device.small`width: 100%;`}
    &:hover {
      background: transparent;
      color: var(--white);
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid var(--yellow);
    }
    &:hover:after {
      animation: fade-out-small 0.5s ease-out;
      animation-fill-mode: forwards;
    }
  }
`

const Message = styled(animated.div)`
  text-align: right;
  font-family: "Lora";
  text-transform: uppsercase;
  color: var(--yellow);
  font-size: 1.2rem;
  .error {
    color: #932422;
  }
`

const CTA = styled.div`
  position: relative;
  margin-top: 5rem;
  padding: 1rem 0;
  &:after {
    content: "contact";
    text-transform: uppercase;
    font-family: "Lora";
    color: transparent;
  }
  & > * {
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    width: 100%;
  }
`

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
  msg: Yup.string().required("Required"),
})

const ContactForm = () => {
  const [error, setError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const transitions = useTransition(submitted, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, position: "absolute" },
  })

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
    setSubmitted(true)
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
            <Field id="name" type="text" name="name" className="input" />
            <div className="error">
              <ErrorMessage name="name" />
            </div>
          </FieldWrapper>

          <FieldWrapper>
            <label htmlFor="email">Email</label>
            <Field id="email" type="email" name="email" className="input" />
            <div className="error">
              <ErrorMessage name="email" />
            </div>
          </FieldWrapper>

          <FieldWrapper>
            <label htmlFor="msg">Message</label>
            <Field
              id="msg"
              name="msg"
              component="textarea"
              rows="1"
              className="input"
            />
            <div className="error">
              <ErrorMessage name="msg" />
            </div>
          </FieldWrapper>

          <CTA>
            {transitions.map(({ item, key, props }) =>
              item ? (
                <Message style={props} key={key}>
                  {error ? (
                    <span className="error">
                      Something went wrong. Please try again!
                    </span>
                  ) : (
                    <span className="success">
                      Thank you! We'll get back to you soon.
                    </span>
                  )}
                </Message>
              ) : (
                <ButtonWrapper style={props} key={key}>
                  <button type="submit" disabled={isSubmitting}>
                    Send
                  </button>
                </ButtonWrapper>
              )
            )}
          </CTA>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
