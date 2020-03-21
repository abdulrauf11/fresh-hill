import React, { createContext, useState, useEffect } from "react"

const defaultValues = {
  theme: "light",
  toggleTheme: () => {},
  componentMounted: false,
}

export const ThemeContext = createContext(defaultValues)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")
  const [componentMounted, setComponentMounted] = useState(false)

  const setMode = mode => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    if (localTheme) {
      setTheme(localTheme)
    } else {
      setMode("light")
    }
    setComponentMounted(true)
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        ...defaultValues,
        theme,
        toggleTheme,
        componentMounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
