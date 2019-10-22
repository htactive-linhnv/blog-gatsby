import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby"

export default ({ data, pageContext }) => {
  const { category } = pageContext;
  const posts = data.allMarkdownRemark.edges.filter( item => item.node.frontmatter.categories.includes(category))
  return (
    <Layout>
      <div>
        { posts.map(({ node }, index) =>
          <div>
            <Link to={node.fields.slug}>
              <div>{node.frontmatter.title}</div>
            </Link>
            <div>{node.excerpt}</div>
          </div>
        )}
      </div>
    </Layout>
  );
};

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
          categories
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