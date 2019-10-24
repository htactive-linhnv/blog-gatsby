import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import { Button } from 'antd'
import styled from 'styled-components'

const IndexPage = styled.div`
  & .image {
    max-width: 300px;
    margin-bottom:1.45rem;
  }
  & .post--wrapper {
    border: 1px solid gray;
    padding: 30px;
    margin-bottom: 30px;
  }
  & .post--title {
    color: red;
    text-decoration: none;
    font-size: 1.3em;
  }
  & .post--content {
    margin-bottom:20px;
  }
`

export default (props) => {
  return (
    <Layout>
      <SEO title="Home" />
      <IndexPage>
        <div className='image'>
          <Image />
        </div>
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
        limit: 1000
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