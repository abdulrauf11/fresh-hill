import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/hero/hero"
import About from "../components/sections/about"
import Process from "../components/sections/process"
import Products from "../components/sections/products"
import Contact from "../components/sections/contact/contact"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />

      <div id="about">
        <About />
      </div>
      <Process />
      <div id="products">
        <Products />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Layout>
  )
}

export default IndexPage
