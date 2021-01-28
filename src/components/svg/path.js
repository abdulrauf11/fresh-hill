import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { useInView } from "react-intersection-observer"

const SVG = styled.svg`
  overflow: visible;
`
export default function Path() {
  const [ref, inView] = useInView({ triggerOnce: false })

  const pathRef = useRef(null)

  useEffect(() => {
    if (!inView) return
    gsap.to(pathRef.current, {
      duration: 2,
      strokeDashoffset: -100,
      repeat: -1,
      ease: "linear",
    })
  }, [inView])

  return (
    <div ref={ref}>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        width="864.635"
        height="249.769"
        viewBox="0 0 864.635 249.769"
      >
        <path
          ref={pathRef}
          d="M1 0v123.552h862.636v126.216"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeDasharray="10"
        />
      </SVG>
    </div>
  )
}
