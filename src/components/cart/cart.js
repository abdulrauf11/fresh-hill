import React, { useContext } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"

import Skeleton from "./skeleton"
import CartItem from "./cart-item"
import Checkout from "./checkout"
import { StoreContext } from "../../context/store"
import arrowImage from "../../images/back.svg"

const Overlay = styled(animated.div)`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  background: ${({ theme }) => theme.overlay};
`

const Container = styled.div`
  overflow-y: scroll;
  height: 100%;
  width: 45%;
  min-width: 320px;
  background: ${({ theme }) => theme.bg};
  h3 {
    position: relative;
    text-align: center;
    padding: 1rem 0;
    font-size: 1.5rem;
    border-bottom: 0.13rem solid ${({ theme }) => theme.fg};
    .back {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(100%, -50%);
      img {
        width: 1.56rem;
        display: block;
        filter: ${({ theme }) => theme.filter};
      }
    }
  }
  ::-webkit-scrollbar-thumb {
    background: var(--black);
  }
  ::-webkit-scrollbar {
    width: 0.3rem;
  }
`

const Empty = styled.div`
  width: 90%;
  margin: 4rem auto;
  text-align: center;
  font-size: 1.2rem;
`

function FilledCart({ checkout, removeProductFromCart }) {
  return (
    <>
      {checkout.lineItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          removeProductFromCart={removeProductFromCart}
        />
      ))}
      <Checkout checkout={checkout} />
    </>
  )
}

function EmptyCart() {
  return (
    <Empty>
      <span>Your cart is currently empty.</span>
    </Empty>
  )
}

export default function Cart() {
  const {
    isCartOpen,
    checkout,
    toggleCartOpen,
    removeProductFromCart,
    isLoading,
  } = useContext(StoreContext)

  const transitions = useTransition(isCartOpen, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  let cart
  if (!isLoading && checkout.lineItems.length) {
    cart = (
      <FilledCart
        checkout={checkout}
        removeProductFromCart={removeProductFromCart}
      />
    )
  } else if (!isLoading && !checkout.lineItems.length) {
    cart = <EmptyCart />
  } else {
    cart = <Skeleton checkout={checkout} />
  }

  return transitions.map(
    ({ item, key, props }) =>
      item &&
      createPortal(
        <Overlay key={key} style={props}>
          <Container>
            <h3>
              <button
                aria-label="Close"
                className="back"
                onClick={toggleCartOpen}
              >
                <img src={arrowImage} alt="close cart" />
              </button>
              My Bucket
            </h3>
            {cart}
          </Container>
        </Overlay>,
        document.body
      )
  )
}
