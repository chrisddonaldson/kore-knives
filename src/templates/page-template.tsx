import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { parse } from "@wordpress/block-serialization-default-parser"
import { LazyBlock } from "../components/LazyBlocks/LazyBlocks"

interface PageTemplateInterface {
  data: any
  location: string
}

const pageTemplate = ({ data, location }: PageTemplateInterface) => {
  const page = data.wpPage
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const parsedWordpress = parse(page.lazy_data)
  // console.log(parsedWordpress)

  const stuff = parsedWordpress.map(v => {
    try {
      return LazyBlock[v.blockName](v)
    } catch (e) {
      console.error(e)
      return (
        <div className={"max-w-md mx-auto p-5"}>
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
const Follower = styled.div`
  /* border: 1px solid blue; */
  color: white;
  margin-top: 60px;
  position: sticky;
  top: 0;
`
const PageLayout = styled.div`
  max-width: 1440px;
  /* border: 1px solid red; */
  margin: 0px auto;
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  @media only screen and (max-width: 1480px) {
    grid-template-columns: 1fr;
  }
  /* column-gap: 30px; */
`

const AfterBack = styled.div`
  display: inline-block;
`

const PageBody = styled.div`
  background-color: white;
  padding: 16px;
  flex: 1;
`
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
