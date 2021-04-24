import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { v4 as uuidv4 } from 'uuid';
// normalize CSS across browsers
import "../normalize.css"
// custom CSS styles
import "../style.scss"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import { NavBar } from "./Layout/NavBar"
import { parse } from "@wordpress/block-serialization-default-parser"
import { LazyBlock } from "./LazyBlocks/LazyBlocks"

interface LayoutInterface {
  title: string
  children: any
  nav: any
}

const Layout = ({ title, children, nav }: LayoutInterface) => {
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



const parsedWordpress = parse(wpPage.lazy_data)


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

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default Layout


