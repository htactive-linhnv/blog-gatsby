import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import { Button } from 'antd'
import styled from 'styled-components'

const IndexPage = styled.div`

& .post--wrapper {
  border-bottom: 1px solid #e8e8e8;
  padding: 30px;
  margin-top:1rem;
  margin-bottom: 30px;
}
& .post--title {
  color:black;
  text-decoration: none;
  font-size: 2em;
}
& .post--content {
  margin-bottom:20px;
}
& .post-category {
  padding:3px 10px;
  font-size:0.55em;
  margin-bottom:10px;
  border-radius:3px;
}
`

export default (props) => {

  return (
    <Layout>
      <SEO title="Home" />
      <IndexPage>
        {props.data.allMarkdownRemark.edges.map(({ node }, index) =>
          <div className='post--wrapper'>
            <Link className='post--title' to={node.fields.slug}>
              <div className='post--content' >{node.frontmatter.title}</div>
            </Link>
            <div className='post--content' >{node.excerpt}</div>
            <Button type="Primary">
              <Link to={node.fields.slug}>
                Read more
              </Link>
            </Button>
          </div>
        )}
      </IndexPage>



    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
        sort: {order: DESC, fields: [frontmatter___date] }
        
      ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
          }
          excerpt 
          fields {
            slug
          }
        }
      }
    }
  }
`