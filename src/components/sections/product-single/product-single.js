import React from "react"
import styled from "styled-components"

import Form from "./form"
import Description from "./description"
import device from "../../device"

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  ${device.small`padding: 3rem 0;`}

  &.image-wrapper {
    min-height: 300px;
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    ${device.small`position: static;`}
    img {
      align-self: center;
      height: 20rem;
      ${device.medium`height: 12rem;`}
      ${device.small`height: 10rem;`}
    }
  }

  &.product-wrapper {
    margin: 10rem 0;
    ${device.small`margin: 5rem 0;`}
  }

  .middle {
    width: 70%;
    ${device.medium`width: 80%;`}
    ${device.small`width: var(--spread);`}

    .title {
      font-size: 2.5rem;
    }
  }
`

export default function ProductSingle({ product }) {
  return (
    <>
      <Container
        className="image-wrapper"
        style={{ background: `var(--${product.color}` }}
      >
        <img src={product.image} alt="Product" />
      </Container>
      <Container className="product-wrapper">
        <div className="middle">
          <h3 className="title">{product.title}</h3>
          <Form product={product} />
          <Description content={product.descriptionHtml} />
        </div>
      </Container>
    </>
  )
}
