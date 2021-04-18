import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const NotFoundPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
   <>
      <SEO title="404: Not Found" />
      <PageLike>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... that's my bad.</p>
      </PageLike>
</>
  )
}

const PageLike = styled.div`
  height: 700px;
  max-width: 1140px;
  margin: 0 auto;
`

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
