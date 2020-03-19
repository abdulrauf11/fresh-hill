import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 90%;
  margin: 4rem auto;
`

const CheckoutInfo = styled.div`
  .info {
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    span:first-child {
      font-family: "Lora";
      font-weight: 700;
    }
  }
`

const CheckoutButton = styled.a`
  margin-top: 2rem;
  display: block;
  width: 100%;
  color: var(--white);
  text-align: center;
  background: var(--black);
  padding: 1rem 0;
  font-weight: 700;
`

export default function Checkout({ checkout }) {
  return (
    <Wrapper>
      <CheckoutInfo>
        <div className="total info">
          <span>Total</span>
          <span>Rs. {checkout.totalPrice}</span>
        </div>
        <div className="shipping info">
          <span>Shipping</span>
          <span>Free shipping</span>
        </div>
      </CheckoutInfo>
      <CheckoutButton href={checkout.webUrl}>Checkout</CheckoutButton>
    </Wrapper>
  )
}
