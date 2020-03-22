import React, { useState, useEffect, useContext } from "react"
import { useTransition, animated } from "react-spring"
import styled, { ThemeProvider } from "styled-components"

import Header from "./header"
import Footer from "./footer"
import Cart from "./cart/cart"
import { ThemeContext } from "../context/theme"
import { lightTheme, darkTheme } from "../global/theme"
import { GlobalStyles } from "../global/global"

const Fixed = styled(animated.div)`
  position: fixed;
  z-index: 500;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.bg};
`

const Layout = ({ children, setActiveSection }) => {
  const { theme, componentMounted } = useContext(ThemeContext)

  const [prevScroll, setPrevScroll] = useState(0)
  const [fixed, setFixed] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  })
  function handleScroll() {
    let currScroll = window.pageYOffset || document.documentElement.scrollTop
    if (prevScroll > currScroll && currScroll > 0) {
      setFixed(true)
    } else {
      setFixed(false)
    }
    setPrevScroll(currScroll <= 0 ? 0 : currScroll)
  }
  const transitions = useTransition(fixed, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  if (!componentMounted) return null

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header setActiveSection={setActiveSection} />
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Fixed key={key} style={props}>
              <Header setActiveSection={setActiveSection}></Header>
            </Fixed>
          )
      )}
      <Cart />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
