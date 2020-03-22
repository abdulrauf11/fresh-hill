import React from "react"
import styled, { keyframes } from "styled-components"
import device from "../device"
import crossImage from "../../images/close.svg"

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`

const SkeletonCart = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.cartBorder};
  .item-wrapper {
    width: 90%;
    margin: 0 auto;
    display: flex;
    position: relative;
    .cross {
      cursor: auto;
      position: absolute;
      right: 0;
      top: 0;
      opacity: 0.5;
      img {
        width: 0.75rem;
        display: block;
      }
    }
  }
  .image-wrapper {
    width: 7.5rem;
    height: 7.5rem;
    ${device.small`width: 5rem; height: 5rem;`}
  }
  .product-wrapper {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${device.small`padding: 0.8rem;`}
    .title {
      width: 50%;
      padding: 0.5rem 0;
      ${device.small`padding: 0.3rem 0;`}
    }
    .flex-container {
      display: flex;
      justify-content: space-between;
      & > * {
        padding: 0.5rem 0;
        width: 40%;
        ${device.small`padding: 0.3rem 0;`}
      }
    }
  }

  .skelement {
    background-color: var(--skeleton);
    position: relative;
    overflow: hidden;
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.2) 20%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0)
      );
      animation: ${shimmer} 2s infinite;
      content: "";
    }
  }
`

const SkeletonCheckout = styled.div`
  width: 90%;
  margin: 4rem auto;
  .checkout-info {
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
  }
  .checkout-button {
    cursor: auto;
    margin-top: 2rem;
    display: block;
    width: 100%;
    color: var(--white);
    text-align: center;
    padding: 1rem 0;
    font-weight: 700;
    background: ${({ theme }) => theme.fg};
    color: ${({ theme }) => theme.bg};
    opacity: 0.2;
  }
`

function CartItem() {
  return (
    <SkeletonCart>
      <div className="item-wrapper">
        <button className="cross">
          <img src={crossImage} alt="remove cart item" />
        </button>
        <div className="image-wrapper skelement"></div>
        <div className="product-wrapper">
          <div className="title skelement"></div>
          <div className="flex-container">
            <div className="amount skelement"></div>
            <div className="price skelement"></div>
          </div>
        </div>
      </div>
    </SkeletonCart>
  )
}

function Checkout() {
  return (
    <SkeletonCheckout>
      <div className="checkout-info">
        <div className="total info">
          <span>Total</span>
          <span></span>
        </div>
        <div className="shipping info">
          <span>Shipping</span>
          <span> </span>
        </div>
      </div>
      <button className="checkout-button">Updating</button>
    </SkeletonCheckout>
  )
}

export default function Skeleton({ checkout }) {
  return (
    <>
      {!checkout.lineItems.length ? (
        <CartItem />
      ) : (
        checkout.lineItems.map(item => <CartItem key={item.id} />)
      )}
      <Checkout />
    </>
  )
}
