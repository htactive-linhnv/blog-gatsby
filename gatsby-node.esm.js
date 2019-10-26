import { paginate } from 'gatsby-awesome-pagination';
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
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-import',
    options: {
      libraryName: 'antd',
      style: true
    }
  })
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
      let tags = [];
      let categories = [];

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        tags = Array.from(new Set([...tags, ...node.frontmatter.tags]));
        categories = Array.from(new Set([...categories, ...node.frontmatter.categories]))
      })

      const postsPerPage = 4;
      const numPages = Math.ceil(result.data.allMarkdownRemark.edges.length / postsPerPage);
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
          component: path.resolve('./src/templates/blog.js'),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          }
        });
      });

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      })

      tags.forEach((tag) => {
        createPage({
          path: `/tag/${slug(tag).toLowerCase()}/`,
          component: path.resolve(`./src/templates/tag.js`),
          context: {
            tag
          },
        })
      })

      categories.forEach((category) => {
        createPage({
          path: `/category/${slug(category).toLowerCase()}/`,
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

