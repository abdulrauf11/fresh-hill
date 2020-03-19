import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"

const SVG = styled.svg`
  cursor: pointer;
  overflow: visible;
  .a {
    fill: #ffe75c;
  }
  .b {
    fill: none;
    stroke: #000;
    stroke-miterlimit: 10;
    stroke-width: 2px;
    fill-rule: evenodd;
  }
`

export default function Theme({ className }) {
  //   const groupRef = useRef(null)
  //   useEffect(() => {
  //     gsap.to(groupRef.current, {
  //       duration: 1,
  //       y: -20,
  //       repeat: -1,
  //       yoyo: true,
  //       repeatDelay: 0.5,
  //     })
  //   }, [])

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="123.839"
      height="116.985"
      viewBox="0 0 123.839 116.985"
      className={className}
    >
      <g transform="translate(-452.368 -234.776)">
        <circle
          className="a"
          cx="48.599"
          cy="48.599"
          r="48.599"
          transform="translate(452.368 329.358) rotate(-76.674)"
        />
        <path
          className="b"
          d="M613.454,203.875a48.6,48.6,0,1,1-48.6-48.6A48.6,48.6,0,0,1,613.454,203.875Z"
          transform="translate(-38.247 89.394)"
        />
      </g>
    </SVG>
  )
}
