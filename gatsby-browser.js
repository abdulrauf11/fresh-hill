import React from "react"
import { Helmet } from "react-helmet"
import { StoreProvider } from "./src/context/store"
import { ThemeProvider } from "./src/context/theme"
import "intersection-observer"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <StoreProvider>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Lora:400,700|Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {element}
    </StoreProvider>
  </ThemeProvider>
)
