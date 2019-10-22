const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')
const slug = require(`slug`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                categories
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      })
      let tags = [];
      let categories = [];
    
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        tags = Array.from(new Set([...tags, ...node.frontmatter.tags]));
        categories = Array.from(new Set([...categories, ...node.frontmatter.categories]))
      })

      tags.forEach((tag) => {
        createPage({
          path:  `/tag/${slug(tag).toLowerCase()}/`,
          component: path.resolve(`./src/templates/tag.js`),
          context: {
            tag
          },
        })
      })

      categories.forEach((category) => {
        createPage({
          path:  `/category/${slug(category).toLowerCase()}/`,
          component: path.resolve(`./src/templates/category.js`),
          context: {
            category
          },
        })
      })

      resolve()
    })
  })
};

