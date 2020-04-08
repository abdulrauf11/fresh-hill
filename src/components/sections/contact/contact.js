import React from "react"
import styled from "styled-components"

import Form from "../../form"
import device from "../../device"
import Scene from "./scene"

const Wrapper = styled.div`
  background: ${({ theme }) => theme.contact};
  color: var(--white);
  height: 110vh;
  min-height: 870px;
  max-height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  ${device.large`max-height: 1400px;`}
  .inner-wrapper {
    position: relative;
    z-index: 1;
    width: 40%;
    margin: 0 auto;
    ${device.medium`width: 70%;`}
    ${device.small`width: var(--spread);`}
  }
  p {
    margin-top: 2rem;
  }
  .form-wrapper {
    margin-top: 4rem;
  }
`

const Contact = () => {
  return (
    <Wrapper>
      <Scene />
      <div className="inner-wrapper">
        <h2>Contact Us</h2>
        <p>
          We're here to help and answer any question you might have. Fill out
          the form and we'll be in touch as soon as possible!
        </p>
        <div className="form-wrapper">
          <Form />
        </div>
      </div>
    </Wrapper>
  )
}

export default Contact
