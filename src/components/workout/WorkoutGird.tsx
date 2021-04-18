import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { colours } from "../../colours"

export const WorkoutGridItem = ({ post }: any) => {
  console.log(post.frontmatter.type)
  const title = post.frontmatter.title || post.fields.slug
  return (
    <LinkWrapper to={post.fields.slug} key={post.fields.slug}>
      <small style={{ color: "white", marginBottom: 4 }}>
        {post.frontmatter.date}
      </small>
      <PageHeader>
        <h2>{title}</h2>
      </PageHeader>

      <PageBody>{post.frontmatter.description}</PageBody>
    </LinkWrapper>
  )
}

const LinkWrapper = styled(Link)`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
`

const PageBody = styled.div`
  background-color: white;
  padding: 16px;
  flex: 1;
`

const PageHeader = styled.div`
  padding: 16px;
  background-color: ${colours.green};
  color: white;
  min-height: 50px;

  & > h2 {
    padding: 0px;
    margin: 0px;
    line-height: 28px;
    color: ${colours.darkblue};
  }
`
