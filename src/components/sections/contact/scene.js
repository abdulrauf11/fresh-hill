import React from "react"
import styled, { keyframes, css } from "styled-components"
import { useInView } from "react-intersection-observer"

import device from "../../device"
import cloudOne from "../../../images/contact/cloud-1.svg"
import cloudTwo from "../../../images/contact/cloud-2.svg"
import hillOne from "../../../images/contact/hill-1.svg"
import hillTwo from "../../../images/contact/hill-2.svg"

const moveLeft = keyframes`
    from {
        transform: translate3d(0,0,0);
    }
    to {
        transform: translate3d(20px,0,0);
    }
`

const moveRight = keyframes`
    from {
        transform: translate3d(0,0,0);
    }
    to {
        transform: translate3d(-20px,0,0);
    }
`

const animationLeft = css`
  ${moveLeft} 3s linear 0s infinite alternate;
`

const animationRight = css`
  ${moveRight} 3s linear 0s infinite alternate;
`

const Wrapper = styled.div`
  position: absolute;
  width: var(--spread);
  margin: 0 auto;
  height: 100%;
  .element {
    position: absolute;
  }
  .cloud-1 {
    width: calc(8.44rem / var(--divider));
    top: 30%;
    left: 0;
    animation: ${props => (props.inView ? animationLeft : "none")};
    ${device.small`top: 8%;`}
  }
  .cloud-2 {
    width: calc(9.75rem / var(--divider));
    top: 15%;
    right: 0;
    animation: ${props => (props.inView ? animationRight : "none")};
    ${device.small`top: 5%;`}
  }
  .hill-1 {
    width: calc(25rem / var(--divider));
    bottom: 0;
    left: 0;
  }
  .hill-2 {
    width: calc(25rem / var(--divider));
    bottom: 0;
    right: 0;
    ${device.small`display: none;`}
  }
`

const Scene = () => {
  const [ref, inView] = useInView({ triggerOnce: false })
  return (
    <Wrapper ref={ref} inView={inView}>
      <img src={cloudOne} className="cloud-1 element" alt="Cloud" />
      <img src={cloudTwo} className="cloud-2 element" alt="Cloud" />
      <img src={hillOne} className="hill-1 element" alt="Cloud" />
      <img src={hillTwo} className="hill-2 element" alt="Cloud" />
    </Wrapper>
  )
}

export default Scene
