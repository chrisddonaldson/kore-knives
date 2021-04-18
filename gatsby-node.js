const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  
  const pageTemplate = path.resolve(`./src/templates/page-template.tsx`)
  const postTemplate = path.resolve(`./src/templates/post.tsx`)
  const productTemplate = path.resolve(`./src/templates/product.tsx`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
    {

      allWpPage {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
      allWpPost {
        edges {
          node {
            id
            uri
          }
        }
      }
      allWpProduct {
        edges {
          node {
            id
            uri
          }
        }
      }
  }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  //const posts = result.data.allMdx.nodes
  const pages1 = result.data.allWpPage.edges
  const pages = pages1.map(v => v.node)

  if (pages.length > 0) {
    pages.forEach((post, index) => {

      if(post.title !== "Footer"){

      createPage({
        path: post.slug,
        component: pageTemplate,
        context: {
          id: post.id,
        },
      })}
    })
  }
  //const posts = result.data.allMdx.nodes
  const posts1 = result.data.allWpPost.edges
  const posts = posts1.map(v => v.node)

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      createPage({
        path: post.uri,
        component: postTemplate,
        context: {
          id: post.id,
        },
      })
    })
  }

  const products1 = result.data.allWpProduct.edges
  const products = products1.map(v => v.node)

  if (products.length > 0) {
    products.forEach((product, index) => {
      createPage({
        path: product.uri,
        component: productTemplate,
        context: {
          id: product.id,
        },
      })
    })
  }

}
