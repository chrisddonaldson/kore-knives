import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { colours } from "../colours"
// normalize CSS across browsers
import "../normalize.css"
// custom CSS styles
import "../style.scss"
import { MDXProvider } from "@mdx-js/react"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import { ConversationExample } from "./chinese/ConversationExample"
import { GoldenLayout } from "./Layout/GoldenLayout"
import { GatsbyImage } from "gatsby-plugin-image"
import { Footer } from "./Layout/Footer"
import { CurvedHeader } from "./Layout/CurvedHeader"
import { NavBar } from "./Layout/NavBar"
import { parse } from "@wordpress/block-serialization-default-parser"
import { LazyBlock } from "./LazyBlocks/LazyBlocks"

interface LayoutInterface {
  title: string
  children: any
  nav: any
}

const Layout = ({ title, children, nav }: LayoutInterface) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const shortcodes = {
    ConversationExample,
    GoldenLayout,
    GatsbyImage,
    CurvedHeader,
  }

  const { wpPage } = useStaticQuery(
    graphql`
      query {
        
  wpPage(title: {eq: "Footer"}) {
    id
    lazy_data
  }


      }
    `
  )


console.log(wpPage)
const parsedWordpress = parse(wpPage.lazy_data)
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

  return (
    <React.Fragment>
      <MDXProvider components={shortcodes}>
      <NavBar title={title} nav={nav} />
        <div  className={"h-full mt-10"}>
       
            <div className={"h-full w-full"}>
              {children}
              {/* <footer>© {new Date().getFullYear()}</footer> */}
          
            </div>
            <footer>
              {stuff.map(v=>v)}
           </footer>
          </div>
      </MDXProvider>
    </React.Fragment>
  )
}

export default Layout


