import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import cow from "../images/logo.svg"

const Container = styled.footer`
  width: var(--spread);
  max-width: var(--limit);
  margin: 0 auto;
  text-align: center;
  font-size: 0.8rem;
  padding: 3rem 0;
  .rauftech {
    font-weight: 700;
    text-transform: none;
    color: var(--green);
    font-family: "Open Sans";
  }
`
const Logo = styled.div`
  margin: 2rem 0;
  display: inline-block;
  a {
    display: block;
    width: calc(4.44rem * 0.79);
    height: calc(4.44rem * 0.79);
    img {
      display: block;
      width: 100%;
    }
  }
`

const Footer = () => (
  <Container>
    <div>
      Website by{" "}
      <a
        className="rauftech"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.rauftech.com"
      >
        Rauf Tech
      </a>
    </div>
    <Logo>
      <Link to="/">
        <img src={cow} alt="Cow" />
      </Link>
    </Logo>
    <div className="copyright">
      © Copyright {new Date().getFullYear()} Bin Aziz. All rights reserved
    </div>
  </Container>
)

export default Footer
