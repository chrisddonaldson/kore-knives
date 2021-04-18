import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import PageTemplate from "../templates/page-template"

interface WorkoutPostInterface {
  data: any
  location: string
}

const WorkoutPost = ({ data, location }: WorkoutPostInterface) => {
  return <PageTemplate location={location} data={data} />
}

export default WorkoutPost
export const pageQuery = graphql`
  query WorkoutPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wpPage: wpWorkoutPost(id: { eq: $id }) {
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
