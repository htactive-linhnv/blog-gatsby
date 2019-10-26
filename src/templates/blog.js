import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import SEO from "../components/seo"
import { graphql } from "gatsby";
import { Button, Tag } from 'antd'
import styled from 'styled-components'
import StyledBlog from '../templates/posts-style'


export default (props) => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "blog/" : "blog/" + (currentPage - 1).toString()
  const nextPage = "blog/" + (currentPage + 1).toString()
  return (
    <Layout>
      <SEO title="Home" />
      <StyledBlog>
        {
          props.data.allMarkdownRemark.edges.map(({ node }, index) =>
            <div className='post--wrapper'>
              <div className="post--image">
              </div>
              <div className="post--write">
                <Link className='post--category' to={node.fields.slug}>
                  {
                    node.frontmatter.categories.map((item, index) => {
                      let colon = index === node.frontmatter.categories.length - 1 ? "" : ", "
                      return <span className="category" >{item.toUpperCase()}{colon}</span>
                    }
                    )}
                  <div className='post--title' >
                    {node.frontmatter.title}

                  </div>
                </Link>
                {
                  node.frontmatter.tags.map(item =>
                    <Tag className='post--content' >#{item}</Tag>
                  )}

                <div className='post--content' >{node.excerpt}</div>
                <Button type="Primary">
                  <Link to={node.fields.slug}>
                    Read more
              </Link>
                </Button>
              </div>

            </div>
          )}
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
        </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link key={`pagination-number${i + 1}`} to={`blog/${i === 0 ? "" : i + 1}`}>
            {" "}{i + 1} {" "}
          </Link>
        ))}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
        </Link>
        )}
      </StyledBlog>



    </Layout>
  )
}

export const query = graphql`
query blogPageQuery($skip: Int!, $limit: Int!){
  allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          tags
          categories
        }
        excerpt(pruneLength: 280)
        fields {
          slug
        }
      }
    }
  }
}
`