import React from "react"
import { Link } from "gatsby"
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
  return (
    <React.Fragment>
      <MDXProvider components={shortcodes}>
        <GlobalWrapper>
          <NavBar title={title} nav={nav} />
          {children}
          {/* <footer>© {new Date().getFullYear()}</footer> */}
          <Footer />
        </GlobalWrapper>
      </MDXProvider>
    </React.Fragment>
  )
}

export default Layout

const GlobalWrapper = styled.div`
  color: white;
  padding-top: 54px;
`
