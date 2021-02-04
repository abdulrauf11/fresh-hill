import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import Form from "./form"
import Description from "./description"
import device from "../../device"

const Wrapper = styled.section`
  margin-top: 4rem;
  display: flex;
  ${device.small`flex-direction: column;`}
  & > * {
    flex: 1;
  }

  .image-wrapper {
    text-align: center;
    .sticky {
      position: sticky;
      top: 8rem;
    }
    .image {
      width: 10rem;
      height: 14rem;
      width: clamp(calc(5rem * 2), calc(5vw * 4), calc(5rem * 4));
      height: clamp(calc(7rem * 2), calc(7vw * 4), calc(7rem * 4));
    }
    ${device.small`margin-bottom: 4rem;`}
  }

  h1 {
    font-size: 3rem;
  }
`

export default function ProductSingle({ product }) {
  return (
    <Wrapper>
      <div className="image-wrapper">
        {product.images.length && (
          <div className="sticky">
            <Img
              className="image"
              fixed={product.images[0].localFile.childImageSharp.fluid}
            />
          </div>
        )}
      </div>

      <div>
        <h1>{product.title}</h1>
        <Form product={product} />
        <Description content={product.descriptionHtml} />
      </div>
    </Wrapper>
  )
}
