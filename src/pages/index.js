import React, { useState, useRef, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/hero/hero"
import About from "../components/sections/about"
import Process from "../components/sections/process"
import Products from "../components/sections/products"
import Contact from "../components/sections/contact/contact"

const scrollToRef = (ref, offset) =>
  window.scrollTo(0, ref.current.offsetTop - offset) // General scroll to element function

const IndexPage = () => {
  const [activeSection, setActiveSection] = useState(null)

  const aboutRef = useRef(null)
  const productsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    if (activeSection === "about") {
      scrollToRef(aboutRef, 100)
    } else if (activeSection === "products") {
      scrollToRef(productsRef, 100)
    } else if (activeSection === "contact") {
      scrollToRef(contactRef, 0)
    }
    setActiveSection(null)
  }, [activeSection])

  return (
    <Layout setActiveSection={setActiveSection}>
      <SEO title="Home" />
      <Hero />
      <div ref={aboutRef}>
        <About />
      </div>
      <Process />
      <div ref={productsRef}>
        <Products />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </Layout>
  )
}

export default IndexPage
