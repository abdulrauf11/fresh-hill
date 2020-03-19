import React from "react"
import Header from "./header"
import Footer from "./footer"
import Cart from "./cart/cart"
import "../global/layout.css"

const Layout = ({ children, setActiveSection }) => {
  return (
    <>
      <Header setActiveSection={setActiveSection} />
      <Cart />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
