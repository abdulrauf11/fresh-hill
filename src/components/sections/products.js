import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { useSpring, animated as a } from "react-spring"

import Modal from "../modal"
import device from "../device"
import gheeImage from "../../images/products/ghee.svg"
import makhanImage from "../../images/products/makhan.svg"
import Makhan from "../svg/makhan"
import Ghee from "../svg/ghee"

const Wrapper = styled.section``

const Grid = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3.13rem;
  ${device.small`grid-template-columns: 1fr;`}
  .grid-item {
    cursor: pointer;
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
    &.green {
      color: var(--white);
      background: var(--green);
    }
    &.yellow {
      color: var(--black);
      background: var(--yellow);
    }
    svg {
      width: 100%;
      margin: 4rem 0;
      height: 12.5rem;
      ${device.small`height: 8.5rem; margin: 3rem 0;`}
      ${device.large`margin-top: 6rem;`}
    }

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
  }
`

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
]
const trans = (x, y) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg)`

const Products = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct {
        edges {
          node {
            variants {
              shopifyId
            }
            title
            description
            priceRange {
              minVariantPrice {
                amount
              }
            }
            handle
          }
        }
      }
    }
  `)
  let ghee = data.allShopifyProduct.edges.find(
    ({ node }) => node.handle === "ghee"
  ).node
  ghee = { ...ghee, image: gheeImage, color: "yellow" }
  let makhan = data.allShopifyProduct.edges.find(
    ({ node }) => node.handle === "makhan"
  ).node
  makhan = { ...makhan, image: makhanImage, color: "green" }

  // springs
  const [props1, set1] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  const [props2, set2] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 5, tension: 350, friction: 40 },
  }))
  //

  const [activeProduct, setActiveProduct] = useState(null)

  return (
    <Wrapper>
      <h2>Our Products</h2>
      <Grid>
        <a.div
          className="grid-item yellow"
          onClick={() => setActiveProduct(ghee)}
          onMouseMove={({ clientX: x, clientY: y }) => set1({ xy: calc(x, y) })}
          onMouseLeave={() => set1({ xy: [0, 0] })}
          style={{ transform: props1.xy.interpolate(trans) }}
        >
          <Ghee />
          <h3>{ghee.title}</h3>
          <p>{ghee.description}</p>
        </a.div>
        <a.div
          className="grid-item green"
          onClick={() => setActiveProduct(makhan)}
          onMouseMove={({ clientX: x, clientY: y }) => set2({ xy: calc(x, y) })}
          onMouseLeave={() => set2({ xy: [0, 0] })}
          style={{ transform: props2.xy.interpolate(trans) }}
        >
          <Makhan />
          <h3>{makhan.title}</h3>
          <p>{makhan.description}</p>
        </a.div>
      </Grid>
      {activeProduct && (
        <Modal product={activeProduct} setProduct={setActiveProduct} />
      )}
    </Wrapper>
  )
}

export default Products
