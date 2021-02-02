import React, { useContext } from "react"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"
import { ThemeContext } from "../../../context/theme"

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
  .a2 {
    fill: #efefef;
  }
  .b2 {
    fill: none;
    stroke: #fff;
    stroke-width: 2px;
  }
`

export default function Toggle({ className }) {
  const { theme, toggleTheme } = useContext(ThemeContext)


  const transitions = useTransition(theme, null, {
    from: { transform: 'translate3d(0,-400px,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,0,0)', opacity: 1 },
    leave: { transform: 'translate3d(0,-400px,0)', opacity: 0 },
    config: { mass: 1, tension: 150, friction: 15 },
  })

  

  return transitions.map(({ item, key, props }) =>
    item === "light" ? (
      <animated.div style={props} key={key}>
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          width="123.839"
          height="116.985"
          viewBox="0 0 123.839 116.985"
          className={className}
          onClick={toggleTheme}
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
      </animated.div>
    ) : (
      <animated.div style={props} key={key}>
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          width="110.731"
          height="101"
          viewBox="0 0 110.731 101"
          className={className}
          onClick={toggleTheme}
        >
          <g transform="translate(-561 -221)">
            <path
              className="a2"
              d="M49.518,99A48.2,48.2,0,0,0,93.736,71.1,37.794,37.794,0,0,1,77.8,74.248,38.933,38.933,0,0,1,38.912,35.359,40.3,40.3,0,0,1,59.883.591,73.906,73.906,0,0,0,49.518.006a49.5,49.5,0,1,0,0,98.99Zm0,0"
              transform="translate(560.977 222.001)"
            />
            <path
              className="b2"
              d="M49.518,99A48.2,48.2,0,0,0,93.736,71.1,37.794,37.794,0,0,1,77.8,74.248,38.933,38.933,0,0,1,38.912,35.359,40.3,40.3,0,0,1,59.883.591,73.906,73.906,0,0,0,49.518.006a49.5,49.5,0,1,0,0,98.99Zm0,0"
              transform="translate(575.977 222.001)"
            />
          </g>
        </SVG>
      </animated.div>
    )
  )
}
