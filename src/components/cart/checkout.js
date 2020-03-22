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
  width: 100%;
  text-align: center;
  font-weight: 700;
  display: block;
  padding: 1rem 0;
  background: ${({ theme }) => theme.fg};
  color: ${({ theme }) => theme.bg};

  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.fg};
  }
  &:hover:after {
    animation: fade-out 0.5s ease-out;
  }
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
