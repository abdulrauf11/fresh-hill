import React from "react"
import styled from "styled-components"

import device from "../../device"
import Cow from "../../svg/cow.js"
import butter from "../../../images/hero/butter.svg"
import earthOne from "../../../images/hero/earth-1.svg"
import earthTwo from "../../../images/hero/earth-2.svg"

const Wrapper = styled.div`
  flex: 3;
  position: relative;
  display: flex;
  ${device.small`flex: 2;`}
  .element {
    bottom: 0;
    position: absolute;
  }
  .earth-1 {
    left: 0;
    width: calc(23.75rem / var(--divider));
    ${device.small`display: none;`}
  }
  .earth-2 {
    right: 0;
    width: calc(25rem / var(--divider));
    ${device.small`width: 10rem; z-index: -1;`}
  }
  .cow {
    bottom: -0.45rem;
    left: calc(16rem / var(--divider));
    width: calc(37.5rem / var(--divider));
    height: calc(23.75rem / var(--divider));
    ${device.small`width: 15rem; height: 9.5rem; left: 0;`}
  }
  .butter {
    right: calc(25rem / var(--divider));
    width: calc(9.38rem / var(--divider));
    filter: none;
    ${device.small`display: none;`}
  }
  img {
    filter: ${({ theme }) => theme.filter};
  }
`

const LowerScene = () => {
  return (
    <Wrapper>
      <img className="earth-1 element" src={earthOne} alt="hill" />
      <Cow className="cow element" />
      <img className="butter element" src={butter} alt="butter" />
      <img className="earth-2 element" src={earthTwo} alt="hill" />
    </Wrapper>
  )
}

export default LowerScene
