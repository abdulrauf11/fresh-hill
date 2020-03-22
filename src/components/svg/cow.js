import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"

const SVG = styled.svg`
  overflow: visible;
  .a {
    fill: #43b060;
  }
  .b {
    fill: #d6d6d6;
  }
  .c {
    fill: #ffe75c;
  }
  .d {
    fill: #fffff5;
  }
  .e,
  .f {
    fill: none;
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }
  .e {
    stroke: #000;
  }
  .f {
    stroke: #fafafc;
  }
  .g {
    fill: #151539;
  }
`

export default function Cow({ className }) {
  const tailRef = useRef(null)
  const earRef = useRef(null)

  useEffect(() => {
    gsap.to(tailRef.current, {
      duration: 1,
      rotate: 10,
      repeat: -1,
      ease: "sine",
      yoyo: true,
    })

    gsap.fromTo(
      earRef.current,
      { rotate: -20 },
      {
        duration: 0.5,
        rotate: 0,
        repeat: -1,
        repeatDelay: 2.5,
        ease: "elastic",
      }
    )
  }, [])

  return (
    <SVG
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="600.256"
      height="379.335"
      viewBox="0 0 600.256 379.335"
    >
      <g ref={earRef}>
        <path
          className="a ear"
          d="M1796,613.706s15.557-8.3,24.525-4.983,19.238,7.972,20.234,12.29-10.92,12.956-17.9,14.283-26.864-4.65-26.864-4.65Z"
          transform="translate(-1243.123 -548.385)"
        />
        <path
          className="f"
          d="M1814.539,624.979s23.949-5.089,37.14,5.34"
          transform="translate(-1254.042 -557.69)"
        />
      </g>
      <path
        ref={tailRef}
        className="a tail"
        d="M466.772,600.61s-10.489,32.142-6.753,53.068,10.147,78.466,6.555,99.4-7.4,48.583-7.4,48.583l8.436,17.937,4.447-7.565,8.007,3.646V797.895s-7.365-2.221-5.123-28.376-.76-55.3-2.254-77.721,13.446-56.05,14.193-59.04S466.772,600.61,466.772,600.61Z"
        transform="translate(-455.728 -544.068)"
      />
      <path
        className="b"
        d="M1324.263,824.806c-2.242,23.917-15.695,67.259-17.189,82.954s-8.968,25.411-11.958,30.643-5.231,37.533-7.29,42.705c-.936,2.357,2.233,9.254,5.955,16.19,4.449,8.281,9.686,16.328,9.686,16.328H1275.8l-7.349-6.6s.145-.528.329-1.49c.5-2.625,1.31-8.032.309-11.863-1.365-5.231-.125-13.438.005-23.9s6.6-41.1,1.544-47.825,4.33-48.576.593-82.951,11.988-74.741,11.988-74.741l41.041,3S1326.506,800.89,1324.263,824.806Z"
        transform="translate(-932.397 -640.456)"
      />
      <path
        d="M1303.466,1347.578H1275.8l-7.349-6.6s.145-.528.329-1.49l19.043-5.137,5.955-3.118C1298.23,1339.515,1303.466,1347.578,1303.466,1347.578Z"
        transform="translate(-932.397 -974.407)"
      />
      <path
        className="b"
        d="M666.912,1129.808l-32.969,6.168s-1.56-5.456-4-14.165c-5.969-21.36-17.2-62.312-23.572-90.443-8.968-39.611,7.474-59.791,7.474-59.791l22.422,21.674s-5.232,71.744,0,82.954,13.453,31.39,13.453,31.39l2.033,6.846.957,3.214Z"
        transform="translate(-540.853 -762.569)"
      />
      <g transform="translate(24.081 147.209)">
        <path
          className="c"
          d="M510.378,821.232s6.636,41.115,0,59.051S531.26,957.95,563.462,959.1s53.875-2.617,71.064-13.065a118.643,118.643,0,0,0,28.4-24.647s-1.495-39.609,0-42.6-13.452-32.136-14.947-35.125-29.147-23.19-32.135-22.431S510.378,821.232,510.378,821.232Z"
          transform="translate(-509.382 -821.211)"
        />
        <path
          className="c"
          d="M696.3,1119.585s12.448,7.489,13.2,21.688.747,20.563,6.726,20.744-1.495-37.186,13.452-46.154Z"
          transform="translate(-619.48 -994.762)"
        />
        <path
          className="c"
          d="M744.8,1072.306s12.448,7.488,13.2,21.687.747,20.563,6.726,20.745-1.5-37.186,13.452-46.154Z"
          transform="translate(-648.042 -966.915)"
        />
        <path
          className="c"
          d="M627.2,1103.825s12.448,7.489,13.2,21.688.747,20.563,6.726,20.744-1.495-37.186,13.452-46.154Z"
          transform="translate(-578.778 -985.479)"
        />
      </g>
      <path
        d="M704.529,1334.548l-32.969,6.168s-1.56-5.456-4-14.165l21.808-7.369.957,3.214Z"
        transform="translate(-578.471 -967.309)"
      />
      <path
        className="d"
        d="M974.25,610.764a35.836,35.836,0,0,0-10.3,1.093c-27.249,6.588-62.451,40.3-64.432,59.447-2.24,21.668-17.188,8.216-33.632,30.636s-35.872,21.676-60.532,2.988q-3.243-2.454-6.428-4.611c-14.936-10.135-28.918-15.425-41.256-15.692a39.038,39.038,0,0,0-16.592,3.115c-17.188,7.472-80.712,9.716-105.376,5.232s-53.8-61.28-53.8-61.28-5.232-14.948-12.087-8.224-31.26,88.936-34.253,108.368,6.728,66.68,9.716,71.855c1.553,2.684,8.109,13,14.052,22.32,5.5,8.627,10.484,16.361,10.484,16.361h-29.02l-7.472-8.934-14.2-5.207s.288-4.35.485-10.112c.251-7.319.349-16.909-.485-22.762-1.5-10.464-10.468-45.59-17.944-64.27s-1.5-25.411,3.728-52.315c4.394-22.6-5.984-64.69-15.174-97.961-1.751-6.346-3.461-12.371-5.018-17.878-7.353-26.02-9.589-51.152-5.7-66.4,1.249-4.9,3.128-8.779,5.672-11.335,13.39-13.46,48.641-16.427,62.093-14.192,9.568,1.595,58.09,2.437,99.293.1,16.719-.949,32.234-2.421,43.451-4.578,24.45-4.7,50.68-3.781,74.214-2.269,13.518.871,26.148,1.936,37.039,2.244l.851.025c29.888.748,85.2,27.652,103.879,34.376,11.755,4.233,35.95,3.732,52.266,2.778,4.632-.271,8.627-.579,11.524-.826,3.12-.263,4.965-.456,4.965-.456S1001.9,612.26,974.25,610.764Z"
        transform="translate(-466.299 -463.036)"
      />
      <path
        d="M1433.261,539.557l-1.644-.822c.44,11.434-6.539,23.1-16.148,30.369a34.81,34.81,0,0,1-17.57,7.258c-18.885,1.681-46.512-13.037-54.05-30.845-3.884-9.174-3.341-13.177-13.32-16.444-9.564-3.132-19.572-3.83-28.926-3.715-7.135.09-4.788,1.665-10.534-3.888-3.686-3.563-11.039-8.639-12.4-14.011-2.609-10.291,2.828-14.377-6.473-23.184-4.372-4.139-7.135-8.536-7.615-12.8l.851.025c29.888.748,85.2,27.652,103.879,34.376,11.755,4.233,35.95,3.732,52.266,2.778,1.155,1.282,2.31,2.552,3.465,3.8.415.444,1,1.11,1.693,1.944C1432.25,521,1444.671,538.118,1433.261,539.557Z"
        transform="translate(-930.115 -468.007)"
      />
      <path
        className="d"
        d="M1206.669,824.807c-1.319,14.105-6.543,34.968-10.912,52.928-2.178,8.964-4.147,17.208-5.314,23.53-.456,2.487-.789,4.677-.962,6.494-1.5,15.7-8.968,25.412-11.96,30.644-1.262,2.215-2.4,9.272-3.436,17.077-1.418,10.633-2.667,22.646-3.851,25.63-.937,2.355,2.232,9.251,5.951,16.188,4.451,8.282,9.687,16.328,9.687,16.328h-27.664l-7.349-6.6s.144-.525.329-1.487c.505-2.626,1.311-8.033.308-11.863-1.365-5.232-.123-13.44,0-23.9s6.6-41.1,1.545-47.822c-3.958-5.265.933-32.04,1.455-59.906a183.484,183.484,0,0,0-.859-23.044c-3.74-34.38,11.985-74.744,11.985-74.744l41.042,3S1208.913,800.887,1206.669,824.807Z"
        transform="translate(-863.133 -640.454)"
      />
      <path
        d="M1185.873,1347.578H1158.21l-7.349-6.6s.144-.528.329-1.49l19.043-5.137,5.954-3.118C1180.637,1339.515,1185.873,1347.578,1185.873,1347.578Z"
        transform="translate(-863.134 -974.407)"
      />
      <path
        d="M629.988,1351.241H600.97l-7.474-8.933-14.2-5.209s.392-4.348.591-10.113l12.439,1.88v10.468l27.281-4.455C625.113,1343.508,629.988,1351.241,629.988,1351.241Z"
        transform="translate(-526.48 -971.906)"
      />
      <path
        className="d"
        d="M1704.348,666.319c-7.472,6.728-24.66,2.244-29.144,0s-16.444-3.736-30.64-12.7c-.2-.127-.395-.259-.588-.4-8.566-6.206-12.013-26.74-12.293-47.725a204.911,204.911,0,0,1,2.417-34.828,43.009,43.009,0,0,1,8.849-19.88,47.14,47.14,0,0,1,6.366-6.568c9.247-7.891,20.156-11.339,25.7-10.933.062,0,.123.012.185.016,9.642.875,19.026,13.062,25.691,25.552,4.706,8.812,8.06,17.772,9.194,23.024,2.754,12.7-5.618,37.762,2.626,54.938C1724.005,660.343,1711.824,659.595,1704.348,666.319Z"
        transform="translate(-1146.329 -504.391)"
      />
      <path
        className="a"
        d="M1770.968,809.3c-2.7-1.23-7.307,7.307-5.647,10.961a41.687,41.687,0,0,1,2.649,9.965c.374,2.078,6.652,6.644,15.953,6.311s13.951-1,13.951-8.968,1.33-19.266-2.989-18.269S1778.276,812.622,1770.968,809.3Z"
        transform="translate(-1224.845 -666.916)"
      />
      <path
        className="c"
        d="M1777.949,825.637s6.311,2.989,8.969,3.322-3.321,6.541-4.485,3.6A33.748,33.748,0,0,0,1777.949,825.637Z"
        transform="translate(-1232.491 -676.609)"
      />
      <path
        className="a ear-2"
        d="M1576.427,630.342s-8.3-16.277-24.248-14.948-18.933,11.958-21.591,14.948,3.987,6.311,10.63,8.968,20.262,9.3,28.235,5.979S1576.427,630.342,1576.427,630.342Z"
        transform="translate(-1086.441 -552.73)"
      />
      <path
        className="e"
        d="M1631.6,710.975s-2.052,39.891,12.868,47.323"
        transform="translate(-1146.234 -609.073)"
      />
      <path
        className="e"
        d="M1157.917,868.033s-1.959-35.934-.982-44.823,1.618-35.914,10.606-48.78"
        transform="translate(-866.551 -646.448)"
      />
      <path
        className="e"
        d="M1260.1,882.035s11.117-46.911,11.908-71.8-1-38.681-1-38.681"
        transform="translate(-927.477 -644.756)"
      />
      <path
        className="e"
        d="M712.072,523.125s-29.305,0-31.607,17.262,37.8,51.511,37.8,51.511"
        transform="translate(-586.013 -498.429)"
      />
      <path
        className="e"
        d="M1668.818,712.219s4.556,5.1,10.84,0"
        transform="translate(-1168.212 -609.806)"
      />
      <path
        className="f"
        d="M1531.447,640.552s22.815-17.776,45.839,0"
        transform="translate(-1087.3 -562.94)"
      />
      <path
        d="M1005.053,475.177c-1.077,7.583-2.478,19.588-11.146,22.872-8.8,3.337-16.148-6.457-25.026-7.686-10.526-1.459-13.057,5.774-20.349,11.323-13.32,10.139-42.892,11.705-52.842-4.085-4.862-7.714-3.465-16.033-6.338-23.883a19.141,19.141,0,0,0-1.184-2.61c16.719-.949,32.234-2.421,43.451-4.578,24.45-4.7,50.68-3.781,74.214-2.269A60.435,60.435,0,0,1,1005.053,475.177Z"
        transform="translate(-708.408 -463.036)"
      />
      <path
        className="g"
        d="M451.7,548.575l-.584,1.554c-.09-.234-.2-.473-.325-.728C450.917,549.1,452.212,547.461,451.7,548.575Z"
        transform="translate(-450.79 -513.193)"
      />
      <path
        d="M531.4,630.476c-15.758,4.874-29.752,4.529-41.679-1.656-1.751-6.346-3.461-12.371-5.018-17.878-7.353-26.02-9.589-51.153-5.7-66.4,11.171.362,21.639,13.086,27.664,21.61,10.411,14.747,35.7,1.295,34.355,25.523C540.171,606.988,551.79,624.163,531.4,630.476Z"
        transform="translate(-466.299 -511.045)"
      />
      <path
        d="M1114.1,548.769c-13.321,13.442-30.977-1.76-44.43,6.554-6.567,4.058-6.888,11.578.024,14.015,6.563,2.314,13.305-1.274,19.723,2.656,6.683,4.092,8.772,16.232,17.285,16.231,8.466,0,7.415-7.685,11.283-13.195,3.548-5.053,11.212-6.109,13.214-12.47,2.359-7.5-4.091-11.224-9.7-13.791-1.377-.63-2.69-1.138-4.11-1.644Z"
        transform="translate(-812.341 -512.565)"
      />
      <path
        d="M1763.026,558.893c-6.941,4.122-15.651,4.607-18.766-4.278-2.425-6.913-2.17-15.725-7.11-21.29.062,0,.123.012.185.016C1746.977,534.217,1756.36,546.4,1763.026,558.893Z"
        transform="translate(-1208.46 -504.437)"
      />
      <path
        d="M1213.652,1097.615c-.456,2.487-.789,4.677-.962,6.494-1.5,15.7-8.968,25.412-11.96,30.644-1.262,2.215-2.4,9.272-3.436,17.077a9.626,9.626,0,0,1-3.419-2.589c-4.246-4.961-4.307-10.887-2.441-16.436,1.845-5.479,6.568-6.65,8.853-10.916,3.169-5.914-2.178-13.164,2.137-18.721C1204.388,1100.636,1209.517,1098.725,1213.652,1097.615Z"
        transform="translate(-886.342 -836.805)"
      />
    </SVG>
  )
}