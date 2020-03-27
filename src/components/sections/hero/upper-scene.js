import React from "react"
import styled, { keyframes, css } from "styled-components"
import { useInView } from "react-intersection-observer"

import device from "../../device"
import Toggle from "./toggle"

import cloudOne from "../../../images/hero/cloud-1.svg"
import cloudTwo from "../../../images/hero/cloud-2.svg"
import cloudThree from "../../../images/hero/cloud-3.svg"
import clickHere from "../../../images/click-here.svg"

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
  flex: 1;
  position: relative;
  .element {
    position: absolute;
  }
  .cloud-1 {
    left: 0;
    bottom: 0;
    width: calc(7.5rem / var(--divider));
    animation: ${props => (props.inView ? animationLeft : "none")};
    ${device.small`bottom: 30%;`}
  }
  .cloud-2 {
    top: 0;
    right: calc(11.25rem + 6.25rem);
    width: calc(8.75rem / var(--divider));
    animation: ${props => (props.inView ? animationLeft : "none")};
    ${device.small`display: none;`}
  }
  .cloud-3 {
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: calc(11.25rem / var(--divider));
    animation: ${props => (props.inView ? animationRight : "none")};
  }
  .toggle {
    top: 0;
    left: 7.5rem;
    width: calc(7.5rem / var(--divider));
    ${device.small`left: 50%; transform: translateX(-100%);`}
  }
  .click-here {
    top: 0;
    left: 11rem;
    width: 4rem;
    ${device.small`left: 45%; top: 0rem;`}
    ${device.large`left: 12.5rem; top: -1rem;`}
  }
  img {
    filter: ${({ theme }) => theme.filter};
  }
`

const UpperScene = () => {
  const [ref, inView] = useInView({ triggerOnce: false })
  return (
    <Wrapper ref={ref} inView={inView}>
      <img className="cloud-1 element" src={cloudOne} alt="cloud" />
      <Toggle className="toggle element" />
      <img
        className="click-here element"
        src={clickHere}
        alt="Enable dark mode"
      />
      <img className="cloud-2 element" src={cloudTwo} alt="cloud" />
      <img className="cloud-3 element" src={cloudThree} alt="cloud" />
    </Wrapper>
  )
}

export default UpperScene
