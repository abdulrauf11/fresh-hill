import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import device from "../device"

const Wrapper = styled.section`
  p {
    margin: 0 auto;
    font-family: "Lora";
    font-size: 1.45rem;
    width: 70%;
    line-height: 1.8;
    ${device.small`width: 100%; font-size: 1.2rem;`}
  }
`

const About = () => (
  <Wrapper>
    <p>
      Our product reaches you directly from our farms to your door step. We make
      sure to deliver you the product the moment it's freshly made giving it no
      shelf time and no inventory stacking. Our focus is to offer you the best
      customer care and highest quality of pure product, free from any
      preservative and impurity at the lowest rate. In case of any issues with
      the quality, we offer 100% money back guarantee.
    </p>
  </Wrapper>
)

export default About
