import React, { useRef } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

const SVG = styled.svg`
  overflow: visible;
  .a {
    fill: #535461;
  }
  .b {
    fill: #43b060;
  }
  .c,
  .e {
    opacity: 0.1;
  }
  .d {
    fill: #ffe75c;
  }
  .e,
  .i,
  .j {
    fill: none;
  }
  .e,
  .j {
    stroke: #000;
  }
  .e,
  .i {
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }
  .f {
    fill: #ffb8b8;
  }
  .g {
    fill: #010101;
  }
  .h {
    fill: #fff;
    opacity: 0.4;
  }
  .i {
    stroke: #151539;
  }

  .human {
    transition: all 1.5s;
    opacity: ${props => (props.inView ? 1 : 0)};
    transform: ${props =>
      props.inView ? "translate3d(0px,0,0)" : "translate3d(-30px,0,0)"};
  }
`
export default function StepTwo() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  const humanRef = useRef(null)

  return (
    <SVG
      width="369.401"
      height="473.345"
      viewBox="0 0 369.401 473.345"
      ref={ref}
      inView={inView}
    >
      <g transform="translate(-1197.831 -2820.053)">
        <g transform="translate(-25.499 103.2)">
          <g transform="translate(1223.33 2781.194)">
            <rect
              className="a"
              width="259.536"
              height="384.042"
              transform="translate(13.766 9.937)"
            />
            <path
              className="d"
              d="M188.806,403.98,0,394.043V10L188.806.063Z"
              transform="translate(0 -0.063)"
            />
            <circle
              cx="2.338"
              cy="2.338"
              r="2.338"
              transform="translate(170.686 218.033)"
            />
            <path
              d="M293.7,377.66l1.621,2.807,1.62,2.807h-6.483l1.62-2.807Z"
              transform="translate(-120.673 -156.94)"
            />
            <path
              className="d"
              d="M328.781,403.98l-11.564-.037L317.675.063h11.106Z"
              transform="translate(-131.791 -0.063)"
            />
            <circle
              className="c"
              cx="7.599"
              cy="7.599"
              r="7.599"
              transform="translate(165.425 195.821)"
            />
            <circle
              cx="7.599"
              cy="7.599"
              r="7.599"
              transform="translate(165.425 194.652)"
            />
            <line
              className="e"
              y2="386.409"
              transform="translate(30.875 9.379)"
            />
            <line
              className="e"
              y2="389.916"
              transform="translate(64.194 7.041)"
            />
            <line
              className="e"
              y2="393.917"
              transform="translate(97.512 5.287)"
            />
            <line
              className="e"
              y2="398.099"
              transform="translate(130.831 3.534)"
            />
            <line
              className="e"
              y2="400.346"
              transform="translate(164.15 1.78)"
            />

            <g ref={humanRef} className="human">
              <path
                className="b"
                d="M711.851,266.939s-7.6,0-9.353,10.522-3.507,45.594-3.507,45.594S674.44,355.2,678.532,359.3s8.768,11.691,11.691,10.522,28.058-35.657,28.058-35.657Z"
                transform="translate(-477.908 -169.461)"
              />
              <path
                className="c"
                d="M711.851,266.939s-7.6,0-9.353,10.522-3.507,45.594-3.507,45.594S674.44,355.2,678.532,359.3s8.768,11.691,11.691,10.522,28.058-35.657,28.058-35.657Z"
                transform="translate(-477.908 -169.461)"
              />
              <ellipse
                cx="23.089"
                cy="21.628"
                rx="23.089"
                ry="21.628"
                transform="translate(247.679 34.056)"
              />
              <path
                className="f"
                d="M766.868,215.939s-.584,22.8-7.6,23.966-4.676,8.768-4.676,8.768,22.8,13.444,37.995,0l2.923-7.014s-10.522-7.6-5.845-18.121Z"
                transform="translate(-509.544 -148.273)"
              />
              <path
                d="M691.445,455.939s-34.488,64.3-21.628,84.174S701.967,600.9,704.89,600.9s19.29-8.184,18.121-13.444-18.705-44.425-23.381-47.932-2.338-12.86-1.754-13.444,19.874-31.565,19.874-31.565-.585,49.1,1.754,56.7-.585,61.961,2.338,64.3,16.367,6.43,18.705,2.923,9.353-56.7,4.676-68.976l8.768-84.174Z"
                transform="translate(-473.285 -247.983)"
              />
              <path
                d="M744.232,722.939l-14.613,26.889s-21.043,15.2-6.43,17.536,23.381-3.507,23.381-3.507l12.86-9.353V727.615Z"
                transform="translate(-494.506 -358.911)"
              />
              <path
                d="M728.859,689.678l7.6,18.121s2.923,7.6,0,9.353-11.106,12.275-5.845,13.445a17.129,17.129,0,0,0,3.212.319,32.48,32.48,0,0,0,23.614-9.609l4.739-4.739s-16.233-37.38-16.008-37.1S728.859,689.678,728.859,689.678Z"
                transform="translate(-499.008 -340.848)"
              />
              <path
                className="f"
                d="M19.874,0A19.874,19.874,0,1,1,0,19.874,19.874,19.874,0,0,1,19.874,0Z"
                transform="translate(252.063 41.947)"
              />
              <path
                className="b"
                d="M772.14,253.413,766,259.551s-18.705,7.014-27.473,0c0,0,3.215-6.722,3.215-6.138s-25.427,4.384-27.766,14.906,1.754,28.642,1.754,28.642-16.367,77.159-9.937,78.913,66.638,16.367,66.053,5.261,4.676-56.7,4.676-56.7l20.459-39.164s-2.923-12.86-9.937-16.952S772.14,253.413,772.14,253.413Z"
                transform="translate(-488.804 -163.827)"
              />
              <path
                className="f"
                d="M757.373,448.939l-7.6,4.676S720.547,473.49,735.745,477s23.966-14.029,23.966-14.029l5.845-7.015Z"
                transform="translate(-500.049 -245.075)"
              />
              <path
                className="c"
                d="M814.316,301.939l5.261,5.261s3.507,49.1-3.507,59.039-39.164,36.826-40.918,35.072-12.86-10.522-10.522-11.691,33.426-33.652,33.426-33.652l-2.445-45.261Z"
                transform="translate(-513.736 -184.002)"
              />
              <path
                className="b"
                d="M818.316,298.939l5.261,5.261s3.507,49.1-3.507,59.039-39.164,36.826-40.918,35.072-12.86-10.522-10.522-11.691,33.426-33.652,33.426-33.652l-2.445-45.261Z"
                transform="translate(-515.397 -182.756)"
              />
              <path
                className="g"
                d="M773.047,156.434s-6.756-2.457-15.968,2.764l4.913,1.228s-7.37.614-8.291,10.441h3.378s-2.15,8.6,0,11.055l1.382-2.61,3.992,7.984.921-3.992,1.842.614,1.228-6.449s3.071,4.606,5.527,4.913v-3.993s6.756,7.677,8.905,7.37l-3.071-4.3,4.3.921-1.842-3.071,11.055,3.071-2.457-3.071,7.677,2.457,3.685,1.535s5.22-11.976-2.15-20.267S779.956,152.9,773.047,156.434Z"
                transform="translate(-509.328 -122.842)"
              />
              <path
                className="h"
                d="M328.781,403.98l-11.564-.037L317.675.063h11.106Z"
                transform="translate(-131.791 -0.063)"
              />
              <path
                className="f"
                d="M665.563,425.939l-5.845,8.184s-28.058,5.845-17.536,14.613,25.72-8.184,25.72-8.184l8.184-10.522Z"
                transform="translate(-462.016 -235.519)"
              />
              <path
                className="j"
                d="M1309.1,2896.224s-3.53,3.559-6.275,1.206"
                transform="matrix(0.951, 0.309, -0.309, 0.951, 1125.211, -200.764)"
              />
            </g>
          </g>
        </g>
      </g>
    </SVG>
  )
}
