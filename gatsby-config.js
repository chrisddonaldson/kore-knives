module.exports = {
  siteMetadata: {
    title: `Kore Knives`,
    author: {
      name: `Jean Software`,
      summary: `Jean Software Limited is a Software company founded in 2019 by CEO Chris Donaldson. Jean aims to bring simple software solutions to enhance businesses perfomance and enable content creators.`,
    },
    description: `Northumbrian bladesmith`,
    siteUrl: `https://kore-knives.com/`,
    social: {
      Instagram: `@kore_knives`,
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["JetBrains Mono", "Roboto"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        remarkPlugins: [require("remark-slug")],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `G-0X17R2GB7K`,
      },
    },

    `gatsby-plugin-styled-components`,
    `gatsby-plugin-purgecss`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jean Beta Homepage`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#39353B`,
        theme_color: `#00DA9C`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://cms.kore-knives.com/graphql`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
