import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring, animated as a } from "react-spring"
import Img from "gatsby-image"

import device from "../device"

const Item = styled(a.div)`
  text-align: center;
  position: relative;
  will-change: transform;
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

  .image {
    margin: 4rem 0;
    width: calc(5rem * 2);
    height: calc(7rem * 2);
  }
`

const Text = styled.div`
  margin-bottom: 8rem;
  h3 {
    font-size: 1.5rem;
  }
  p {
    text-transform: none;
    font-family: "Open Sans", sans-serif;
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
        {node.images.length && (
          <Img
            className="image"
            fluid={node.images[0].localFile.childImageSharp.fluid}
          />
        )}
        <Text>
          <h3>{node.title}</h3>
          <p>{node.description}</p>
        </Text>
      </Link>
    </Item>
  )
}

export default ProductCard
