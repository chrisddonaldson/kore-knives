const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const pageTemplate = path.resolve(`./src/templates/page-template.tsx`)
  const workoutTemplate = path.resolve(`./src/templates/workout-post.tsx`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
    {
      allMdx {
        nodes {
          frontmatter {
            type
          }
          slug
          id
        }
      }

      allWpPage {
        edges {
          node {
            id
            slug
          }
        }
      }
    
    allWpWorkoutPost {
      edges {
        node {
          id
          uri
        }
      }
    }
    allWpWorkoutPost {
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
      createPage({
        path: post.slug,
        component: pageTemplate,
        context: {
          id: post.id,
        },
      })
    })
  }

  const WorkoutPost = result.data.allWpWorkoutPost.edges
  const workoutPosts = WorkoutPost.map(v => v.node)
  if (workoutPosts.length > 0) {
    workoutPosts.forEach((post, index) => {
      createPage({
        path: post.uri,
        component: workoutTemplate,
        context: {
          id: post.id,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
