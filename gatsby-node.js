const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')
const slug = require(`slug`);
const axios = require("axios")

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
      const edges = result.data.allMarkdownRemark.edges
      // createPage({
      //   path: "/search",
      //   component: path.resolve(`./src/templates/ClientSearchTemplate.js`),
      //   context: {
      //     bookData: {
      //       allBooks: edges,
      //       options: {
      //         indexStrategy: "Prefix match",
      //         searchSanitizer: "Lower Case",
      //         TitleIndex: true,
      //         AuthorIndex: true,
      //         SearchByTerm: true,
      //       },
      //     },
      //   },
      // })
      let tags = [];
      let categories = [];
      edges.forEach(({ node }) => {
        tags = Array.from(new Set([...tags, ...node.frontmatter.tags]));
        categories = Array.from(new Set([...categories, ...node.frontmatter.categories]))
      })

      const postsPerPage = 4;
      const numPages = Math.ceil(edges.length / postsPerPage);

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
          component: path.resolve('./src/templates/makePostPage.js'),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          }
        });
      });

      
      edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      })

      tags.forEach((tag) => {
        let numPagesTag = Math.ceil(edges.filter(item => item.node.frontmatter.tags.indexOf(tag) !== -1).length / postsPerPage);
        Array.from({ length: numPagesTag }).forEach((_, i) => {
          createPage({
            path:  i === 0 ? `/tag/${slug(tag).toLowerCase()}/` : `/tag/${slug(tag).toLowerCase()}/${i+1}`,
            component: path.resolve(`./src/templates/makePostPage.js`),
            context: {
              tag,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: numPagesTag,
              currentPage: i + 1,
            },
          })
        })

      })

      categories.forEach((category) => {
        let numPagesCategory = Math.ceil(edges.filter(item => item.node.frontmatter.categories.indexOf(category) !== -1).length / postsPerPage);
        Array.from({ length: numPagesCategory }).forEach((_, i) => {
          createPage({
            path:  i === 0 ? `/category/${slug(category).toLowerCase()}/` : `/category/${slug(category).toLowerCase()}/${i+1}`,
            component: path.resolve(`./src/templates/makePostPage.js`),
            context: {
              category,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: numPagesCategory,
              currentPage: i + 1,
            },
          })
        })

      })

      resolve()
    })
  })
};

    // tags.forEach((item,index) => {
      //   createPage({
      //     path:  `/blog/${item.toLowerCase()}`,
      //     component: path.resolve('./src/templates/blog.js'),
      //     context: {
      //       limit: postsPerPage,
      //       skip: index * postsPerPage,
      //       numPagesTag,
      //       currentPage: index+1,
      //       tag:item
      //     }
      //   });
      // });

      // categories.forEach((item,index) => {
      //   createPage({
      //     path:  `/blog/${item.toLowerCase()}`,
      //     component: path.resolve('./src/templates/blog.js'),
      //     context: {
      //       limit: postsPerPage,
      //       skip: index * postsPerPage,
      //       numPagesCategory,
      //       currentPage: index + 1,
      //       category:item
      //     }
      //   });
      // });