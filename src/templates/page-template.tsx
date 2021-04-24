import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { parse } from "@wordpress/block-serialization-default-parser"
import { LazyBlock } from "../components/LazyBlocks/LazyBlocks"
import { v4 as uuidv4 } from 'uuid';
interface PageTemplateInterface {
  data: any
  location: string
}

const pageTemplate = ({ data, location }: PageTemplateInterface) => {
  const page = data.wpPage
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const parsedWordpress = parse(page.lazy_data)
  const stuff = parsedWordpress.map(v => {
    try {
      return LazyBlock[v.blockName](v)
    } catch (e) {
      console.error(e)
      return (
        <div className={"max-w-md mx-auto p-5"} key={uuidv4()}>
          <p className={"text-red-600"}>Lazy block error on: {v.blockName} </p>
        </div>
      )
    }
  })

  const menuItems = data.wpMenu.menuItems.nodes

  return (
    <Layout title={siteTitle} nav={menuItems}>
      <SEO title={siteTitle + " | " + page.title} description={"homepage"} />
      <div>{stuff.map(v => v)}</div>

    </Layout>
  )
}

export default pageTemplate
export const pageQuery = graphql`
  query PageTemplateBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wpPage(id: { eq: $id }) {
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
      name
    }
  }
`
