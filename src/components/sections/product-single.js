import React, { useState, useContext } from "react"
import styled from "styled-components"

import device from "../device"
import { StoreContext } from "../../context/store"

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${device.small`
  height: ${props => (props.isImage ? "35%" : "65%")};
  align-items: ${props => !props.isImage && "flex-start"};
  `}
  img {
    height: 20rem;
    ${device.small`height: 10rem;`}
  }
  .wrapper {
    width: 70%;
    ${device.small`width: var(--spread);`}
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      ${device.small`font-size: 1.5rem; margin: 1rem 0;`}
    }
    p {
      ${device.small`font-size: 0.9rem;`}
    }
  }
`

const Form = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  .field {
    display: flex;
    align-items: center;
  }
  button {
    color: var(--black);
    font-size: 1.5rem;
    font-weight: 400;
    &.deactive {
      opacity: 0.5;
      pointer-events: none;
    }
  }
  .input-wrapper {
    margin: 0 1rem;
    input {
      font-size: 1.2rem;
      font-weight: 700;
      text-align: center;
      border: 0;
      border-bottom: 0.0063rem solid var(--black);
      width: 3.13rem;
      padding: 0.1rem;
    }
    .kg {
      padding: 0.1rem;
      font-size: 1.2rem;
      border-bottom: 0.0063rem solid var(--black);
    }
  }
  .price {
    font-weight: 700;
    font-size: 1.2rem;
  }
`

const AddButton = styled.button`
  margin-top: 4rem;
  display: block;
  width: 100%;
  color: var(--white);
  background: var(--black);
  padding: 1rem 0;
`

export default function ProductSingle({ product }) {
  const { addProductToCart, toggleCartOpen } = useContext(StoreContext)

  const [amount, setAmount] = useState("1")

  function handleChange(e) {
    setAmount(e.target.value)
  }

  function handleAddToCart() {
    addProductToCart(product.variants[0].shopifyId, parseInt(amount))
    toggleCartOpen()
  }

  return (
    <>
      <Container
        isImage={true}
        style={{ background: `var(--${product.color}` }}
      >
        <img src={product.image} alt="Product" />
      </Container>
      <Container>
        <div className="wrapper">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <Form>
            <div className="field">
              <button
                className={`minus ${parseInt(amount) <= 1 ? "deactive" : null}`}
                onClick={() => setAmount(parseInt(amount) - 1)}
              >
                -
              </button>
              <div className="input-wrapper">
                <input
                  name="amount"
                  type="text"
                  value={amount}
                  onChange={handleChange}
                />
                <span className="kg">kg</span>
              </div>
              <button
                className={`plus ${parseInt(amount) >= 5 ? "deactive" : null}`}
                onClick={() => setAmount(parseInt(amount) + 1)}
              >
                +
              </button>
            </div>
            <div className="price">
              Rs. {amount * product.priceRange.minVariantPrice.amount}
            </div>
          </Form>
          <AddButton onClick={handleAddToCart}>Buy Now</AddButton>
        </div>
      </Container>
    </>
  )
}
