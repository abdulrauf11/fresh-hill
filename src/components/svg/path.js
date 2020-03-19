import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"

const SVG = styled.svg`
  overflow: visible;
  .a {
    fill: none;
    stroke: #000;
    stroke-width: 2px;
    stroke-dasharray: 10;
  }
`
export default function Path() {
  const pathRef = useRef(null)
  useEffect(() => {
    gsap.to(pathRef.current, {
      duration: 2,
      strokeDashoffset: -100,
      repeat: -1,
      ease: "linear",
    })
  }, [])

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="864.635"
      height="249.769"
      viewBox="0 0 864.635 249.769"
      ref={pathRef}
    >
      <path
        className="a"
        d="M1364.654,2298.163V2174.611H502.018V2048.395"
        transform="translate(1365.654 2298.163) rotate(180)"
      />
    </SVG>
  )
}
