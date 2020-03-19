import React from "react"
import { StoreProvider } from "./src/context/store"
import "intersection-observer"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)
