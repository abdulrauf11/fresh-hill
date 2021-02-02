import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import device from "../device"
import ProductCard from "./product-card"

const Wrapper = styled.section``

const Grid = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3.13rem;
  ${device.medium`grid-template-columns: 1fr;`}
`

const Products = () => {
  const data = useStaticQuery(graphql`
    {
      allShopifyProduct {
        edges {
          node {
            variants {
              shopifyId
            }
            title
            descriptionHtml
            priceRange {
              minVariantPrice {
                amount
              }
            }
            handle

            productPath: gatsbyPath(
              filePath: "/products/{ShopifyProduct.title}"
            )
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <h2>Our Products</h2>
      <Grid>
        {data.allShopifyProduct.edges.map(({ node }, index) => (
          <ProductCard className={index % 2 ? "yellow" : "green"} node={node} />
        ))}
      </Grid>
    </Wrapper>
  )
}

export default Products
