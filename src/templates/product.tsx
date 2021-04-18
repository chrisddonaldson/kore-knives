import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import PageTemplate from "../templates/page-template"

interface WorkoutPostInterface {
  data: any
  location: string
}

const Product = ({ data, location }: WorkoutPostInterface) => {
  return <PageTemplate location={location} data={data} />
}

export default Product
export const pageQuery = graphql`
  query ProductBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wpPage: wpProduct(id: { eq: $id }) {
      id
      title
      lazy_data
    }
    wpMenu(name: { eq: "default" }) {
      menuItems {
        nodes {
          id
          childItems {
            nodes {
              id
              label
              path
            }
          }
          label
          path
          parentId
        }
      }
    }
  }
`
