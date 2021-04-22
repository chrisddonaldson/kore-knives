import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { TestScene } from "../components/3d/TestScene"

const threeD = ({ data }) => {
//   const siteTitle = data.site.siteMetadata.title

  return (
   <>
      <SEO title="3d" />
      {/* <PageLike> */}
     <TestScene/>
      {/* </PageLike> */}
</>
  )
}

const PageLike = styled.div`
  height: 700px;
  max-width: 1140px;
  margin: 0 auto;
`

export default threeD

