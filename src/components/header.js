import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { StoreContext } from "../context/store"
import device from "./device"
import cowImage from "../images/logo.svg"
import Bucket from "./svg/bucket"

const Navbar = styled.nav`
  padding: 1.5rem 0;
  width: var(--spread);
  max-width: var(--limit);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${device.small`flex-direction: column;`}
`
const Logo = styled.div`
  a {
    display: block;
    width: 4rem;

    img {
      display: block;
      width: 100%;
    }
  }
`

const Pages = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${device.small`width: 100%; margin-top: 1rem;`}
  .link {
    color: ${({ theme }) => theme.fg};
    font-family: "Lora";
    font-weight: 400;
    font-size: 0.9rem;
    margin-left: 3rem;
    text-transform: uppercase;
    ${device.small`margin-left: 0;`}
    position: relative;
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: -1;
      width: 100%;
      height: 5px;
      backface-visibility: none;
      background: var(--yellow);
      transform: scaleX(0);
      transform-origin: 0 0;
      transition: transform 0.3s;
    }
    &:hover:after {
      transform: scaleX(1);
    }
  }

  button {
    margin-left: 3rem;
    svg {
      width: 1.56rem;
      height: 1.56rem;
      filter: ${({ theme }) => theme.filter};
    }
  }
`

const Header = () => {
  const { toggleCartOpen } = useContext(StoreContext)

  return (
    <Navbar>
      <Logo>
        <Link to="/">
          <img src={cowImage} alt="Cow" />
        </Link>
      </Logo>

      <Pages>
        <Link className="link" to="/#about">
          About
        </Link>
        <Link className="link" to="/#products">
          Products
        </Link>
        <Link className="link" to="/#contact">
          Contact
        </Link>
        <button onClick={toggleCartOpen} aria-label="Cart">
          <Bucket />
        </button>
      </Pages>
    </Navbar>
  )
}

export default Header
