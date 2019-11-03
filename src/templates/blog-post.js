import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Link } from "gatsby"
const slug = require(`slug`);

export default (props) => {
  const post = props.data.markdownRemark
  const cate = post.frontmatter.categories || []
  return (
    <Layout>
      <div style={{ fontSize: '16px', lineHeight: "25px", letterSpacing: "0.2px",fontFamily: `"Noto Sans",sans-serif` }}>
        <div style={{ marginBottom: "15px" }}>
          {cate.map((item, index) => {
            let colon = index === post.frontmatter.categories.length - 1 ? "" : ", "
            return <Link key={index}
              className="category"
              style={{ fontSize: '13px'}}
              to={`/category/${slug(item.replace(/\s+/g, '-').toLowerCase())}`} >
              {item.toUpperCase()}{colon}
            </Link>
          }
          )}
        </div>
        <h1 style={{ fontSize: '30px',marginBottom:"10px" }}>{post.frontmatter.title.toUpperCase()} </h1>
        <p style={{color:'gray',marginBottom:"20px",fontSize:"13px" }}>{post.frontmatter.date.toString()} | Linh Nguyễn</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
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
    }
  }
`
