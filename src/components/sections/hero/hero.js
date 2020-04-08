import React from "react"
import styled from "styled-components"
import loadable from "@loadable/component"

import device from "../../device"
import LowerScene from "./lower-scene"
import UpperScene from "./upper-scene"

const Heading = loadable(() => import("./heading"))

const Wrapper = styled.section`
  margin: 1rem auto;
  height: 78vh;
  min-height: 500px;
  max-height: 700px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${device.small`height: 70vh; min-height: 480px;`}
  ${device.large`margin-top: 3rem; max-height: 1020px;`}
    p {
      margin-top: 0.5rem;
      ${device.small`font-size: 0.9rem;`}
    }
  }
`

const Hero = () => {
  return (
    <Wrapper>
      <UpperScene />
      <Heading />
      <LowerScene />
    </Wrapper>
  )
}

export default Hero
