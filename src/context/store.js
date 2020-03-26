import React, { createContext, useState, useEffect } from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: "fresh-hill.myshopify.com",
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
})

const defaultValues = {
  isCartOpen: false,
  toggleCartOpen: () => {},
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  client,
  checkout: {
    lineItems: [],
  },
}

export const StoreContext = createContext(defaultValues)

// Check if it's a browser
const isBrowser = typeof window !== "undefined"

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(defaultValues.checkout)
  const [isCartOpen, setCartOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const toggleCartOpen = () => setCartOpen(!isCartOpen)

  useEffect(() => {
    const initializeCheckout = async () => {
      try {
        // Check if id exists
        const currentCheckoutId = isBrowser
          ? localStorage.getItem("checkout_id")
          : null

        let newCheckout = null

        if (currentCheckoutId) {
          // If id exists, fetch checkout from Shopify
          newCheckout = await client.checkout.fetch(currentCheckoutId)
          if (newCheckout.completedAt) {
            newCheckout = await getNewId()
          }
        } else {
          // If id does not, create new checkout
          newCheckout = await getNewId()
        }
        // Set checkout to state
        setCheckout(newCheckout)
      } catch (e) {
        console.error(e)
      }
    }
    initializeCheckout()
  }, [])

  const getNewId = async () => {
    try {
      const newCheckout = await client.checkout.create()
      if (isBrowser) {
        localStorage.setItem("checkout_id", newCheckout.id)
      }
      return newCheckout
    } catch (e) {
      console.error(e)
    }
  }

  const addProductToCart = async (variantId, quantity) => {
    try {
      setLoading(true)
      const lineItems = [
        {
          variantId,
          quantity,
        },
      ]
      const newCheckout = await client.checkout.addLineItems(
        checkout.id,
        lineItems
      )
      // Buy Now Button Code
      // window.open(addItems.webUrl, "_blank")
      setCheckout(newCheckout)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.error(e)
    }
  }

  const removeProductFromCart = async lineItemId => {
    try {
      setLoading(true)
      const newCheckout = await client.checkout.removeLineItems(checkout.id, [
        lineItemId,
      ])
      setCheckout(newCheckout)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.error(e)
    }
  }

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        checkout,
        addProductToCart,
        toggleCartOpen,
        isCartOpen,
        removeProductFromCart,
        isLoading,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
