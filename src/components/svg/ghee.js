import React from "react"
import styled, { keyframes, css } from "styled-components"
import { useInView } from "react-intersection-observer"

const moveUp = keyframes`
    0% {
        transform: translate3d(0,0,0);
    }
    50% {
      transform: translate3d(0,0,0);
    }
    to {
        transform: translate3d(0,-20px,0);
    }
`

const animation = css`
  ${moveUp} 1.5s ease-out 0s infinite alternate;
`

const SVG = styled.svg`
  overflow: visible;
  .a {
    fill: none;
    stroke: #000;
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }
  .b {
    fill: #43b060;
  }
  .animated-group {
    animation: ${props => (props.inView ? animation : "none")};
  }
`

export default function Ghee() {
  const [ref, inView] = useInView({ triggerOnce: false })

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="329.326"
      height="361.779"
      viewBox="0 0 329.326 361.779"
      ref={ref}
      inView={inView}
    >
      <g transform="translate(-23)">
        <g className="animated-group">
          <path
            className="a"
            d="M60.727,54.855H292.654V67.743H60.727Z"
            transform="translate(-11.143 -16.202)"
          />
          <path
            className="b"
            d="M292.654,19.328A19.346,19.346,0,0,0,273.326,0H80.052A19.345,19.345,0,0,0,60.727,19.328v6.44H292.654Z"
            transform="translate(-11.143)"
          />
          <path
            className="b"
            d="M330.969,70.068c16.3-19.622,28.458-45.259,16.623-55.2-11.938-9.912-34.946,6.71-51.269,26.35a117.35,117.35,0,0,0-17.138,26.73H49.584V80.828H275.269c-.047.316-.14.66-.173.966a6.4,6.4,0,0,0,.341,2.9,6.382,6.382,0,0,0-.295,3.246,14.357,14.357,0,0,0,2.37,5.766H46.157L23.5,120.877c-.691.826-.57.994-.2,1.489a9.086,9.086,0,0,0,10.167,1.66L46.986,118.2a22.97,22.97,0,0,1,21.2,1.676,14.943,14.943,0,0,1,7.168,12.453v1.748c0,.944,1.365,1.838,2.533,2.315a9.585,9.585,0,0,0,9.747-1.247l10.148-10.3a20.9,20.9,0,0,1,14.9-5.858,23.894,23.894,0,0,1,6.584.925,16.9,16.9,0,0,1,12.522,12.067l.884,3.906c.278,1.225,2.166,2.367,4.594,2.771a8.263,8.263,0,0,0,8.076-2.354l2.989-4.858a21.482,21.482,0,0,1,34.434,0l2.993,4.858a8.273,8.273,0,0,0,8.078,2.354c2.425-.4,4.313-1.541,4.589-2.766l.884-3.911a16.9,16.9,0,0,1,12.522-12.062,21.925,21.925,0,0,1,21.483,4.933l10.157,10.3a9.558,9.558,0,0,0,9.741,1.249c1.167-.476,2.532-1.371,2.532-2.315v-1.748a14.947,14.947,0,0,1,7.168-12.455,22.938,22.938,0,0,1,21.2-1.674l13.523,5.818a9.076,9.076,0,0,0,10.165-1.657c.371-.5.493-.666-.192-1.492l-17.418-20.875a50.735,50.735,0,0,1,32.961,6.873,38.786,38.786,0,0,1,15.3,26.589,6.441,6.441,0,0,0,6.342,5.348,6.694,6.694,0,0,0,1.1-.094,6.443,6.443,0,0,0,5.252-7.442A51.093,51.093,0,0,0,330.4,96.231a52.32,52.32,0,0,0-18.221-7.8A125.332,125.332,0,0,0,330.969,70.068ZM288.084,86.658a2.559,2.559,0,0,1-.231-.826,5.924,5.924,0,0,0-.295-1.131,6.42,6.42,0,0,0,.342-1.484,78.2,78.2,0,0,1,18.326-33.765c16.279-19.584,30.575-25.566,33-24.817,1.541,2.513-1.594,17.258-18.156,37.189C304.492,81.7,290.485,87.429,288.084,86.658Z"
            transform="translate(0 -3.518)"
          />
        </g>
        <path
          className="a"
          d="M64.141,179.825a10.049,10.049,0,0,0-9.019-.6l-13.515,5.819c-.55.236-1.126.377-1.688.569A127.717,127.717,0,0,0,33.3,225.875v20.872A127.265,127.265,0,0,0,46.716,303.7l47.343,94.552c8.831,7.5,37.316,15.227,74.53,15.227,37.145,0,65.672-7.732,74.53-15.224l47.335-94.541a127.26,127.26,0,0,0,13.427-56.966V225.875a127.806,127.806,0,0,0-6.62-40.267c-.564-.192-1.137-.33-1.69-.569l-13.515-5.819a10.067,10.067,0,0,0-9.02.6c-.322.212-1.368.958-1.368,1.69v1.75A15.515,15.515,0,0,1,261.143,197.5a22.211,22.211,0,0,1-23.812-4.123l-10.157-10.3a9.373,9.373,0,0,0-8.769-1.591c-1.866.536-3.27,1.547-3.484,2.513l-.886,3.914a17.435,17.435,0,0,1-15.043,12.634,20.7,20.7,0,0,1-21.164-8.3l-2.995-4.858a9.8,9.8,0,0,0-12.488,0l-2.993,4.855a19.854,19.854,0,0,1-17.129,8.643,24.779,24.779,0,0,1-4.033-.335,17.439,17.439,0,0,1-15.048-12.64L122.259,184c-.218-.972-1.621-1.981-3.487-2.516A9.389,9.389,0,0,0,110,183.073l-10.151,10.3A22.211,22.211,0,0,1,76.032,197.5,15.511,15.511,0,0,1,65.51,183.263v-1.748C65.51,180.783,64.461,180.037,64.141,179.825Z"
          transform="translate(-3.041 -52.7)"
        />
      </g>
    </SVG>
  )
}
