import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from "gatsby"
const slug = require(`slug`);

export default (props) => {
  const { data } = props
  const post = data.markdownRemark
  const cate = post.frontmatter.categories || []
  console.log(props);

  const allPost = data.allPost.edges
  let position
  allPost.forEach((item, index) => {
    if (item.node.fields.slug === post.fields.slug) position = index;
  }
  )
  let next, prev
  next = position === allPost.length - 1 ? allPost.length - 2 : position
  prev = position === 0 ? 1 : position
  const nextPost = allPost[next + 1].node.fields.slug, prevPost = allPost[prev - 1].node.fields.slug
  return (
    <Layout>
      <div style={{ fontSize: '16px', lineHeight: "25px", letterSpacing: "0.2px", fontFamily: `"Noto Sans",sans-serif` }}>
        <div style={{ marginBottom: "15px" }}>
          {cate.map((item, index) => {
            let colon = index === post.frontmatter.categories.length - 1 ? "" : ", "
            return <Link key={index}
              className="category"
              style={{ fontSize: '13px' }}
              to={`/category/${slug(item.replace(/\s+/g, '-').toLowerCase())}`} >
              {item.toUpperCase()}{colon}
            </Link>
          }
          )}
        </div>
        <h1 style={{ fontSize: '30px', marginBottom: "10px" }}>{post.frontmatter.title.toUpperCase()} </h1>
        <p style={{ color: 'gray', marginBottom: "20px", fontSize: "13px" }}>{post.frontmatter.date.toString()} | Linh Nguyễn</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <Link to={prevPost}>Previous Post &nbsp; &nbsp;  </Link>
      <Link to={nextPost}>Next Post</Link>

    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        title
        categories
        tags
      }
      fields {
        slug
      }
    },
    allPost: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            tags
            categories
            thumbnail
          }
          excerpt(pruneLength: 280)
          fields {
            slug
          }  
          }
          
        }}
  }
`
