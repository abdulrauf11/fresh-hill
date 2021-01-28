import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { useInView } from "react-intersection-observer"

const SVG = styled.svg`
  overflow: visible;
  .a {
    fill: #87766a;
  }
  .b {
    fill: #43b060;
  }
  .c {
    fill: none;
    stroke-miterlimit: 10;
    stroke-width: 2px;
    stroke: #f2f2f2;
  }
`
export default function StepOne() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const grassRef = useRef(null)
  useEffect(() => {
    const grass = grassRef.current.children
    gsap.to(grass, {
      duration: 1.5,
      opacity: inView ? 1 : 0,
      stagger: 1.5 / grass.length,
    })
  }, [inView])

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="329.694"
      height="293.064"
      viewBox="0 0 329.694 293.064"
      ref={ref}
    >
      <path
        className="a"
        d="M68.348 215.758L4 255.448v36.3s106.7-2.972 135.2 0 92.071 0 92.071 0l27.923 1.32s13.5-20.846 28.5-50.845a208.552 208.552 0 0135.766-50.358l6.231-16.863-6.231-39.053z"
      />
      <path
        className="b"
        d="M73.207 146.219c-6.687 9.623-6.1 19.248-11.623 28.905-5.226 9.144-14.7 17.323-20.209 24.646-14.769 19.625-28.836 32.243-37.015 55.674 29.154-4.269 64.448-8.414 93.254-1.235 34.37 8.564 68.991-2.779 103.087-1.491 13.407.508 29.5 6.843 43.5 3 11.383-3.129 19.818-17.46 24.405-30 5.53-15.116 4.565-22.792 16.431-36 9.391-10.452 11.549-20.791 19.16-31.867 5.263-7.657 18.649-12.889 19.268-21.909-45.278-2.245-87.915.483-131.762.95-11.988.128-21.141-3.38-33.371-4.172-6.167-.4-11.741 2.255-17.626 1.5-6.8-.871-11.181-4.956-18-6.068-5.8-.946-23.355.069-30 1.569-13.16 2.973-9.725 10.5-18 18"
      />
      <path
        className="a"
        d="M64.348 140.758L0 180.448v36.3s106.7-2.972 135.2 0 92.071 0 92.071 0l27.923 1.32s13.5-20.846 28.5-50.845a208.552 208.552 0 0135.766-50.358l6.231-16.863-6.231-39.053z"
      />
      <path
        className="b"
        d="M69.207 71.219c-6.687 9.623-6.1 19.248-11.623 28.905-5.226 9.144-14.7 17.323-20.209 24.646C22.606 144.395 8.539 157.013.36 180.444c29.154-4.269 64.448-8.414 93.254-1.235 34.37 8.564 68.991-2.779 103.087-1.491 13.407.508 29.5 6.843 43.5 3 11.383-3.129 19.818-17.46 24.405-30 5.53-15.116 4.565-22.792 16.431-36 9.391-10.452 11.549-20.791 19.16-31.867 5.263-7.657 18.649-12.889 19.268-21.909-45.278-2.245-87.915.483-131.762.95-11.988.128-21.141-3.38-33.371-4.172-6.167-.4-11.741 2.255-17.626 1.5-6.8-.871-11.181-4.956-18-6.068-5.8-.946-23.355.069-30 1.569-13.16 2.973-9.725 10.5-18 18"
      />
      <g ref={grassRef}>
        <path
          className="c"
          d="M60 143.744c3.828-8.695-39.191-51.411-21-56.3 12.1-3.252 18.779 38 21.047 46.8-3.174-20.2-6.043-40.356-6.047-60.978 0-11.7-1.98-26.744 8-34.645 12.691 7.976 11.435 32.254 11 45.374-.545 16.444-.738 36.492-5.071 52.3 3.805-16.316 8.31-33.933 22-44.77 11.269-8.924 21.271-.279 17.847 13.223-4.632 18.272-29.332 27.654-41.773 39M162 159.744c-.695-4.708-36.846-47.031-16-47.02 12.942.007 22.518 31.641 21 41.835 0-8.606-4.758-57.416 14-50.086 13.8 5.394.979 40.687-4.142 49 6.851-13.026 13.089-26.486 26.118-34.7 10.512-6.631 15.8-1.962 13.829 11.2-2.626 17.52-22.988 25.236-37.8 27.777M250 84.744c-12.088-4.742-33.343-32.307-39.242-48.493-2.31-6.337-8.535-29.663 2.916-24.379 10.505 4.847 16.081 29.568 18.077 39.626 1.786 9 .882 20.146 7.05 27.237 2.375-19.587-3.092-40.847-2.8-60.76.137-9.342.35-24.8 9.975-12.279 13.269 17.255-1.178 51.095-1.046 70.892 2.241-8.143 16.392-58.815 22.016-31.621 2.94 14.217-5.32 27.648-18.945 32.777"
        />
        <path
          d="M150 71.744c-3.316-9.7-42.737-52.634-26.271-65.248 13.974-10.7 16.641 55.123 18.294 61.775-.066-8.722-4.48-55.934 9.758-55.3 18.672.836-2.459 42.967-3.653 50.711 2.235-1.6 25.612-80.445 38.118-43.717 6.309 18.527-18.525 35.769-26.246 49.777"
          stroke="#000"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <path
          className="c"
          d="M144 236.744c-4.428-.652-25.5-18.028-19.849-27 6.054-9.613 17.46 13.721 20.923 18.643-1.627-5.25-7.338-39.552 2.7-35.437 8.219 3.368 6.25 28.115 6.2 35.288 1.905-7.918 6.169-16.308 14.769-18.351 7.982 7.9-4.685 18.164-9.749 22.853M70 232.744c-5.333-3.467-23.668-19.171-15-29.143 6.453 5.25 8.278 13.659 12.045 20.915-.109-7.487-2.4-19.45 2.2-25.618 4.846 4.252 5.224 17.082 4.726 23.569.734-6.852 5.222-15.384 12.075-16.6 5.507 8.1-1.335 16.144-7.052 21.875"
        />
      </g>
    </SVG>
  )
}
