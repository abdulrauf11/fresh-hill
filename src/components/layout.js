import React, { useContext } from "react"
import Header from "./header"
import Footer from "./footer"
import Cart from "./cart/cart"
import { ThemeProvider } from "styled-components"

import { ThemeContext } from "../context/theme"
import { lightTheme, darkTheme } from "../global/theme"
import { GlobalStyles } from "../global/global"

const Layout = ({ children, setActiveSection }) => {
  const { theme, componentMounted } = useContext(ThemeContext)

  if (!componentMounted) return null

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header setActiveSection={setActiveSection} />
      <Cart />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
