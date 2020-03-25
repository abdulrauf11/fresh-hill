import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

import Form from "../form"
import device from "../device"
import cloudOne from "../../images/contact/cloud-1.svg"
import cloudTwo from "../../images/contact/cloud-2.svg"
import hillOne from "../../images/contact/hill-1.svg"
import hillTwo from "../../images/contact/hill-2.svg"

const Wrapper = styled.div`
  background: ${({ theme }) => theme.contact};
  color: var(--white);
  height: 110vh;
  min-height: 870px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .inner-wrapper {
    position: relative;
    z-index: 1;
    width: 40%;
    margin: 0 auto;
    ${device.small`width: var(--spread);`}
  }
  p {
    margin-top: 2rem;
  }
  .form-wrapper {
    margin-top: 4rem;
  }
`

const Scene = styled.div`
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
    ${device.small`top: 8%;`}
  }
  .cloud-2 {
    width: calc(9.75rem / var(--divider));
    top: 15%;
    right: 0;
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

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true })
  const cloudOneRef = useRef(null)
  const cloudTwoRef = useRef(null)

  useEffect(() => {
    if (!inView) return

    gsap.to(cloudOneRef.current, {
      duration: 3,
      x: 20,
      repeat: -1,
      ease: "linear",
      yoyo: true,
    })

    gsap.to(cloudTwoRef.current, {
      duration: 3,
      x: -20,
      repeat: -1,
      ease: "linear",
      yoyo: true,
    })
  }, [inView])

  return (
    <Wrapper>
      <Scene ref={ref}>
        <img
          src={cloudOne}
          className="cloud-1 element"
          alt="Cloud"
          ref={cloudOneRef}
        />
        <img
          src={cloudTwo}
          className="cloud-2 element"
          alt="Cloud"
          ref={cloudTwoRef}
        />
        <img src={hillOne} className="hill-1 element" alt="Cloud" />
        <img src={hillTwo} className="hill-2 element" alt="Cloud" />
      </Scene>
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
