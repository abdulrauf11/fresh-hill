import React from "react"
import styled from "styled-components"
import device from "../device"
import crossImage from "../../images/close.svg"

const Wrapper = styled.div`
  padding: 2rem 0;
  background: ${({ theme }) => theme.cartBg};
  border-bottom: 1px solid ${({ theme }) => theme.cartBorder};
  .item-wrapper {
    width: 90%;
    margin: 0 auto;
    display: flex;
    position: relative;
    .cross {
      position: absolute;
      right: 0;
      top: 0;
      opacity: 0.5;
      img {
        width: 0.75rem;
        display: block;
        filter: ${({ theme }) => theme.filter};
      }
    }
  }
  .image-wrapper {
    width: 7.5rem;
    height: 7.5rem;
    ${device.small`width: 5rem; height: 5rem;`}
    img {
      display: block;
      width: 100%;
    }
  }
  .product-wrapper {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${device.small`padding: 0.8rem;`}
    .title {
      font-size: 1.2rem;
      ${device.small`font-size: 1rem;`}
    }
    .flex-container {
      font-weight: 700;
      display: flex;
      justify-content: space-between;
      ${device.small`font-size: 0.9rem;`}
    }
  }
`
export default function CartItem({ item, removeProductFromCart }) {
  function handleRemoveFromCart() {
    removeProductFromCart(item.id)
  }

  return (
    <Wrapper color={item.title === "Ghee" ? "yellow" : "green"}>
      <div className="item-wrapper">
        <button className="cross" onClick={handleRemoveFromCart}>
          <img src={crossImage} alt="remove cart item" />
        </button>
        <div className="image-wrapper">
          <img src={item.variant.image.src} alt="Product" />
        </div>
        <div className="product-wrapper">
          <h4 className="title">{item.title}</h4>
          <div className="flex-container">
            <div className="amount">{item.quantity}kg</div>
            <div className="price">
              Rs. {item.quantity * item.variant.price}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
