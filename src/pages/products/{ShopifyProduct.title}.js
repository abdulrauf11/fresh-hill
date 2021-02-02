import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default function Product({ data }) {
  const product = data.shopifyProduct
  return (
    <Layout>
      <SEO title={`${product.title} | Bin Aziz`} />
      <section>
        <h1>{product.title}</h1>
      </section>
    </Layout>
  )
}

// This is the page query that connects the data to the actual component. Here you can query for any and all fields
// you need access to within your code. Again, since Gatsby always queries for `id` in the collection, you can use that
// to connect to this GraphQL query.
export const query = graphql`
  query($id: String) {
    shopifyProduct(id: { eq: $id }) {
      title
    }
  }
`
