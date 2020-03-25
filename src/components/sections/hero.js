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
import Toggle from "../svg/toggle"
import clickHere from "../../images/click-here.svg"

const Wrapper = styled.section`
  margin: 1rem auto;
  height: 78vh;
  min-height: 500px;
  max-height: 1020px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${device.small`height: 70vh; min-height: 480px;`}
  ${device.large`margin-top: 3rem; min-height: 1000px;`}
  .heading-wrapper {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      overflow: hidden;
      font-size: 4vmax;
      ${device.small`font-size: 2rem;`}
      ${device.large`font-size: 4rem;`}
      .word {
        display: inline-block;
        opacity: 0;
        &:nth-child(even) {
          transform: translateY(-100%);
        }
        &:nth-child(odd) {
          transform: translateY(100%);
        }
        .letter {
          display: inline-block;
        }
      }
    }
    p {
      margin-top: 0.5rem;
      ${device.small`font-size: 0.9rem;`}
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

const Hero = () => {
  const cloudOneRef = useRef(null)
  const cloudTwoRef = useRef(null)
  const cloudThreeRef = useRef(null)
  const headingRef = useRef(null)

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

    const tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "slow" },
      delay: 0.3,
    })

    const words = [...headingRef.current.children]
    words.forEach(word => {
      const letters = word.textContent
        .split("")
        .map(letter => `<span class="letter">${letter}</span>`)
      word.innerHTML = letters.join("")
      tl.to(word, { y: 0, opacity: 1 })
    })
  }, [])

  function handleMouseEnter(e) {
    if (window.innerWidth < 600) {
      return
    }
    const word = e.currentTarget
    const letters = [...word.children]
    const tl = gsap.timeline({
      defaults: { duration: 0.2, ease: "slow" },
      paused: true,
      onComplete: () => tl2.play(),
    })
    const tl2 = gsap.timeline({
      defaults: { duration: 0.2, ease: "slow" },
      paused: true,
    })

    letters.forEach((letter, index) => {
      tl.to(letter, { y: index % 2 ? "-100%" : "100%" })
      tl2.to(letter, { y: 0 })
    })

    tl.play()
  }

  return (
    <Wrapper>
      <UpperScene>
        <img
          className="cloud-1 element"
          src={cloudOne}
          alt="cloud"
          ref={cloudOneRef}
        />
        <Toggle className="toggle element" />
        <img
          className="click-here element"
          src={clickHere}
          alt="Enable dark mode"
        />
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
        <h1 ref={headingRef}>
          <div className="word" onMouseEnter={handleMouseEnter}>
            Welcome
          </div>{" "}
          <div className="word" onMouseEnter={handleMouseEnter}>
            to
          </div>{" "}
          <div className="word" onMouseEnter={handleMouseEnter}>
            Fresh
          </div>{" "}
          <div className="word" onMouseEnter={handleMouseEnter}>
            Hill
          </div>
        </h1>
        <p>Your number one source for 100% pure "Desi Ghee" and "Makhan"</p>
      </div>
      <LowerScene>
        <img className="earth-1 element" src={earthOne} alt="hill" />
        <Cow className="cow element" />
        <img className="butter element" src={butter} alt="butter" />
        <img className="earth-2 element" src={earthTwo} alt="hill" />
      </LowerScene>
    </Wrapper>
  )
}

export default Hero
