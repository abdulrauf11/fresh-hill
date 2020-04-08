import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import styled from "styled-components"
import device from "../../device"

const Wrapper = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    overflow: hidden;
    font-size: 4vw;
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
`

export default function Heading() {
  const headingRef = useRef(null)

  useEffect(() => {
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
    if (window.innerWidth < 1100) {
      return
    }
    const word = e.currentTarget
    const letters = [...word.children]

    const tl2 = gsap.timeline({
      defaults: { duration: 0.2, ease: "slow" },
      paused: true,
    })

    const tl = gsap.timeline({
      defaults: { duration: 0.2, ease: "slow" },
      paused: true,
      onComplete: () => tl2.play(),
    })

    letters.forEach((letter, index) => {
      tl.to(letter, { y: index % 2 ? "-100%" : "100%" })
      tl2.to(letter, { y: "0%" })
    })

    tl.play()
  }

  return (
    <Wrapper>
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
    </Wrapper>
  )
}
