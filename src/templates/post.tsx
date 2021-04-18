import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import PageTemplate from "../templates/page-template"

interface WorkoutPostInterface {
  data: any
  location: string
}

const Post = ({ data, location }: WorkoutPostInterface) => {
  return <PageTemplate location={location} data={data} />
}

export default Post
export const pageQuery = graphql`
  query PostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wpPage: wpPost(id: { eq: $id }) {
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
