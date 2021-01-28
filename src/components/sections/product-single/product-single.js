import React from "react"
import styled from "styled-components"

import Form from "./form"
import Description from "./description"
import device from "../../device"

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  ${device.small`height: auto; padding: 3rem 0;`}
  img {
    height: 20rem;
    ${device.medium`height: 12rem;`}
    ${device.small`height: 10rem;`}
  }

  .middle {
    width: 70%;
    ${device.medium`width: 80%;`}
    ${device.small`width: var(--spread);`}

    .title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`

export default function ProductSingle({ product }) {
  return (
    <>
      <Container
        isImage={true}
        style={{ background: `var(--${product.color}` }}
      >
        <img src={product.image} alt="Product" />
      </Container>
      <Container>
        <div className="middle">
          <h3 className="title">{product.title}</h3>
          <Form product={product} />
          <Description content={product.descriptionHtml} />
        </div>
      </Container>
    </>
  )
}
