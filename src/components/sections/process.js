import React from "react"
import styled from "styled-components"
import device from "../device"
import StepOne from "../svg/step-1.js"
import StepTwo from "../svg/step-2.js"
import Path from "../svg/path.js"

const Wrapper = styled.section``

const Container = styled.div`
  width: 80%;
  margin: 4rem auto 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem 0;
  ${device.medium`width: 100%;`}
  .step {
    width: 15rem;
    ${device.medium`width: 12rem;`}
    ${device.small`width: 100%;`}
    &.top, &.left {
      grid-column: 1 / 2;
      align-self: start;
      justify-self: start;
    }
    &.bottom,
    &.right {
      grid-column: 2 / 3;
      align-self: end;
      justify-self: end;
    }
    h4 {
      font-size: 1rem;
      margin: 1.5rem 0 0.5rem 0;
    }
    p {
      font-size: 0.8rem;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  }

  .path {
    grid-column: 1 / 3;
    text-align: center;
    svg {
      width: 70%;
      height: 100%;
      filter: ${({ theme }) => theme.filter};
    }
  }
`

const Process = () => (
  <Wrapper>
    <h2>Our Process</h2>
    <Container>
      <div className="step top left">
        <StepOne />
        <h4>Dairy Farm</h4>
        <p>
          Fresh dairy products are proudly produced at our farm by our cows.
        </p>
      </div>
      <div className="path">
        <Path />
      </div>
      <div className="step bottom right">
        <StepTwo />
        <h4>Your Doorstep</h4>
        <p>
          Our products arrive directly to your doorstep without any
          contamination.
        </p>
      </div>
    </Container>
  </Wrapper>
)

export default Process
