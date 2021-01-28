import React, { useState, useContext } from "react"
import styled from "styled-components"

import { StoreContext } from "../../../context/store"

const Form = styled.div`
  margin: 4rem 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  .field {
    display: flex;
    align-items: center;
  }
  button {
    color: ${({ theme }) => theme.fg};
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
      background: transparent;
      color: ${({ theme }) => theme.fg};
      border-bottom: 0.0063rem solid ${({ theme }) => theme.fg};
      width: 3.13rem;
      padding: 0.1rem;
    }
    .kg {
      padding: 0.1rem;
      font-size: 1.2rem;
      border-bottom: 0.0063rem solid ${({ theme }) => theme.fg};
    }
  }
  .price {
    font-weight: 700;
    font-size: 1.2rem;
  }
`

const AddButton = styled.button`
  margin-top: 4rem;
  width: 100%;
  display: block;
  padding: 1rem 0;
  background: ${props =>
    props.color === "green" ? "var(--green)" : "var(--yellow)"};
  color: ${props =>
    props.color === "green" ? "var(--white)" : "var(--black)"};
  position: relative;
  border: 2px solid
    ${props => (props.color === "green" ? "var(--green)" : "var(--yellow)")};
  transition: all 0.2s;
  &:hover {
    color: ${({ theme }) => theme.fg};
    background: transparent;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid
      ${props => (props.color === "green" ? "var(--green)" : "var(--yellow)")};
  }
  &:hover:after {
    animation: fade-out 0.5s ease-out;
    animation-fill-mode: forwards;
  }
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
      <AddButton onClick={handleAddToCart} color={product.color}>
        Buy Now
      </AddButton>
    </>
  )
}
