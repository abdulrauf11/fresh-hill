import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"

const SVG = styled.svg`
  overflow: visible;
`

export default function Bucket() {
  const [isOpen, setIsOpen] = useState(false)
  const lidRef = useRef(null)

  useEffect(() => {
    gsap.to(lidRef.current, {
      duration: 2,
      rotate: isOpen ? -90 : 0,
      ease: "elastic",
      transformOrigin: "left bottom",
    })
  }, [isOpen])

  return (
    <SVG
      id="Capa_1"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <g>
        <g ref={lidRef}>
          <path d="m466 150h-15.689c-7.604-83.978-78.386-150-164.311-150h-60c-85.925 0-156.707 66.022-164.311 150h-15.689c-8.284 0-15 6.716-15 15v30c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15v-30c0-8.284-6.716-15-15-15zm-240-120h60c69.369 0 126.676 52.595 134.162 120h-328.324c7.486-67.405 64.793-120 134.162-120z" />
        </g>
        <path d="m121.352 500.231c1.517 6.874 7.609 11.769 14.648 11.769h240c7.039 0 13.131-4.895 14.648-11.769l57.404-260.231h-384.104z" />
      </g>
    </SVG>
  )
}
