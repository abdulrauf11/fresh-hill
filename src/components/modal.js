import React, { useState, useContext, useEffect } from "react"
import { createPortal } from "react-dom"
import { useTransition, animated } from "react-spring"

import styled from "styled-components"
import device from "./device"
import { StoreContext } from "../context/store"
import ProductSingle from "./sections/product-single"
import crossImage from "../images/close.svg"
import Bucket from "./svg/bucket"

const Wrapper = styled(animated.div)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.bg};
  ${device.small`display: block; overflow-y: scroll;`}
`

const Header = styled.div`
  position: absolute;
  width: 100%;
  padding: 2rem 0;
  .container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button {
    cursor: pointer;
  }
  img,
  svg {
    display: block;
    width: 1.56rem;
    height: 1.56rem;
  }
  svg {
    filter: ${({ theme }) => theme.filter};
    ${device.small`
      filter: ${props =>
        props.color === "green" ? "brightness(0) invert(1)" : "none"};
    `}
  }
  .cross {
    filter: ${props =>
      props.color === "green" ? "brightness(0) invert(1)" : "none"};
    transition: transform 0.4s;
    &:hover {
      transform: rotate(90deg);
    }
  }
`

const ModalInner = ({ setIsModalActive, product }) => {
  const { toggleCartOpen } = useContext(StoreContext)
  return (
    <>
      <Header color={product.color}>
        <div className="container">
          <button className="cross" onClick={() => setIsModalActive(false)}>
            <img src={crossImage} alt="Close" />
          </button>
          <button className="cart" onClick={toggleCartOpen}>
            <Bucket />
          </button>
        </div>
      </Header>
      <ProductSingle product={product}></ProductSingle>
    </>
  )
}

const Modal = ({ product, setProduct }) => {
  const [isModalActive, setIsModalActive] = useState(false)

  useEffect(() => {
    setIsModalActive(!!product)
  }, [product])

  useEffect(() => {
    if (isModalActive) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalActive])

  const transitions = useTransition(isModalActive, null, {
    from: { transform: "translate3d(0,-100%,0) rotate(-20deg)", opacity: 1 },
    enter: { transform: "translate3d(0,0,0) rotate(0)", opacity: 1 },
    leave: { transform: "translate3d(0,-100%,0) rotate(-20deg)", opacity: 0 },
  })

  return transitions.map(
    ({ item, key, props }) =>
      item &&
      createPortal(
        <Wrapper key={key} style={props}>
          <ModalInner product={product} setIsModalActive={setIsModalActive} />
        </Wrapper>,
        document.body
      )
  )
}
export default Modal
