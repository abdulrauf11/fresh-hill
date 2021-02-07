import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProductSingle from "../../components/sections/product-single/product-single"

export default function Product({ data }) {
  const product = data.shopifyProduct
  return (
    <Layout border={true}>
      <SEO title={`${product.title} | Bin Aziz`} />
      <ProductSingle product={product} />
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
      variants {
        shopifyId
      }
      title
      description
      descriptionHtml
      images {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
        }
      }
    }
  }
`
