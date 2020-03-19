import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import styled from "styled-components"
import device from "../device"
// Lower Scene
import Cow from "../svg/cow.js"
import butter from "../../images/hero/butter.svg"
import earthOne from "../../images/hero/earth-1.svg"
import earthTwo from "../../images/hero/earth-2.svg"
// Upper Scene
import cloudOne from "../../images/hero/cloud-1.svg"
import cloudTwo from "../../images/hero/cloud-2.svg"
import cloudThree from "../../images/hero/cloud-3.svg"
import Theme from "../svg/theme"

const Wrapper = styled.section`
  margin: 1rem auto;
  height: 76vh;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${device.small`height: 65vh;`}
  ${device.large`margin-top: 3rem;`}
  .heading-wrapper {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 3rem;
      ${device.small`font-size: 2.5rem;`}
      ${device.large`font-size: 4rem;`}
    }
    p {
      margin-top: 0.5rem;
    }
  }
`

const UpperScene = styled.div`
  flex: 1;
  position: relative;
  .element {
    position: absolute;
  }
  .cloud-1 {
    left: 0;
    bottom: 0;
    width: calc(7.5rem / var(--divider));
    ${device.small`bottom: 30%;`}
  }
  .cloud-2 {
    top: 0;
    right: calc(11.25rem + 6.25rem);
    width: calc(8.75rem / var(--divider));
    ${device.small`display: none;`}
  }
  .cloud-3 {
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: calc(11.25rem / var(--divider));
  }
  .sun {
    top: 0;
    left: 7.5rem;
    width: calc(7.5rem / var(--divider));
  }
`

const LowerScene = styled.div`
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
    ${device.small`width: 10rem;`}
  }
  .cow {
    bottom: -0.35rem;
    left: calc(16rem / var(--divider));
    width: calc(37.5rem / var(--divider));
    height: calc(23.75rem / var(--divider));
    ${device.small`width: 15rem; height: 9.5rem; left: 0;`}
  }
  .butter {
    right: calc(25rem / var(--divider));
    width: calc(9.38rem / var(--divider));
    ${device.small`display: none;`}
  }
`

const Hero = () => {
  const cloudOneRef = useRef(null)
  const cloudTwoRef = useRef(null)
  const cloudThreeRef = useRef(null)
  useEffect(() => {
    gsap.to(cloudOneRef.current, {
      duration: 3,
      x: 20,
      repeat: -1,
      ease: "linear",
      yoyo: true,
    })

    gsap.to(cloudTwoRef.current, {
      duration: 4,
      x: 30,
      repeat: -1,
      ease: "linear",
      yoyo: true,
    })

    gsap.to(cloudThreeRef.current, {
      duration: 3,
      x: -20,
      repeat: -1,
      ease: "linear",
      yoyo: true,
    })
  }, [])

  return (
    <Wrapper>
      <UpperScene>
        <img
          className="cloud-1 element"
          src={cloudOne}
          alt="cloud"
          ref={cloudOneRef}
        />
        <Theme className="sun element" />
        <img
          className="cloud-2 element"
          src={cloudTwo}
          alt="cloud"
          ref={cloudTwoRef}
        />
        <img
          className="cloud-3 element"
          src={cloudThree}
          alt="cloud"
          ref={cloudThreeRef}
        />
      </UpperScene>
      <div className="heading-wrapper">
        <h1>Welcome to Fresh Hill</h1>
        <p>your number one source for 100% pure "Desi Ghee" and "Makhan"</p>
      </div>
      <LowerScene>
        <img className="earth-1 element" src={earthOne} alt="hill" />
        {/* <img className="cow element" src={cow} alt="cow" /> */}
        <Cow className="cow element" />
        <img className="butter element" src={butter} alt="butter" />
        <img className="earth-2 element" src={earthTwo} alt="hill" />
      </LowerScene>
    </Wrapper>
  )
}

export default Hero
