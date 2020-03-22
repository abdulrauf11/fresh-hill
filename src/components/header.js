import React, { useContext } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { StoreContext } from "../context/store"
import device from "./device"
import cowImage from "../images/cow.svg"
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
  border: 0.0063rem solid var(--black);
  border-radius: 50%;
  padding: 0.19rem;
  ${device.small`margin-bottom: 1rem;`}
  a {
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: inherit;
    background: ${({ theme }) => theme.fg};
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 70%;
      margin: 0 auto;
      filter: ${({ theme }) => theme.filter};
    }
  }
`

const Pages = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${device.small`width: 100%;`}
  button {
    color: ${({ theme }) => theme.fg};
    font-family: "Lora";
    font-weight: 400;
    font-size: 0.9rem;
    margin-left: 3rem;
    text-transform: uppercase;
    ${device.small`margin-left: 0;`}
    position: relative;
    &.link:after {
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
    &.link:hover:after {
      transform: scaleX(1);
    }
    svg {
      width: 1.56rem;
      height: 1.56rem;
      filter: ${({ theme }) => theme.filter};
    }
  }
`

const Header = ({ setActiveSection }) => {
  const { toggleCartOpen } = useContext(StoreContext)

  return (
    <Navbar>
      <Logo>
        <Link to="/">
          <img src={cowImage} alt="Cow" />
        </Link>
      </Logo>

      <Pages>
        <button className="link" onClick={() => setActiveSection("about")}>
          About
        </button>
        <button className="link" onClick={() => setActiveSection("products")}>
          Products
        </button>
        <button className="link" onClick={() => setActiveSection("contact")}>
          Contact
        </button>
        <button onClick={toggleCartOpen}>
          <Bucket />
        </button>
      </Pages>
    </Navbar>
  )
}

export default Header
