import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from "gatsby";

const IndexPage = (props) => {
  return (

    <Layout>
      <SEO title="Home" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      {props.data.allMarkdownRemark.edges.map(({ node }, index) =>
        <div>
          <Link to={node.fields.slug}>
            <div>{node.frontmatter.title}</div>
          </Link>
          <div>{node.excerpt}</div>
        </div>
      )}


    </Layout>
  )
}

export default IndexPage

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