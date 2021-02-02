import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring, animated as a } from "react-spring"

import device from "../device"

const Item = styled(a.div)`
  height: 90vh;
  max-height: 40rem;
  text-align: center;
  position: relative;
  will-change: transform;
  ${device.small`height: 30rem;`}
  &:after {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    content: "100% Pure";
    font: Italic 0.8rem Lora;
  }

  color: var(--black);
  background: var(--yellow);
  &.green {
    color: var(--white);
    background: var(--green);
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  svg {
    width: 100%;
    margin: 4rem 0;
    height: 12.5rem;
    ${device.small`height: 8.5rem; margin: 3rem 0;`}
    ${device.large`margin-top: 6rem;`}
  }
`

const Text = styled.div`
  h3 {
    font-size: 1.5rem;
  }
  p {
    font-size: 0.9rem;
    width: 65%;
    margin: 0.5rem auto;
    ${device.small`width: 80%;`}
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
]
const trans = (x, y) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg)`

const ProductCard = ({ node, className }) => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 8, tension: 350, friction: 40 },
  }))

  return (
    <Item
      className={`grid-item ${className}`}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      onMouseLeave={() => set({ xy: [0, 0] })}
      style={{ transform: props.xy.interpolate(trans) }}
    >
      <Link to={node.productPath}>
        <Text>
          <h3>{node.title}</h3>
          <p>{node.description}</p>
        </Text>
      </Link>
    </Item>
  )
}

export default ProductCard
