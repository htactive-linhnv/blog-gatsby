import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import StyledBlog from '../templates/posts-style'
import PostLayout from '../templates/PostLayout'
import SEO from '../components/seo'

export default ({ data, pageContext }) => {
  const { category } = pageContext;
  const posts = data.allMarkdownRemark.edges.filter(item => item.node.frontmatter.categories.includes(category))
  return (
    <Layout>
       <SEO title="Home" />
      <StyledBlog>
        {posts.map(({ node }, index) =>
          <PostLayout node = {node}/>
        )}
      </StyledBlog>
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
          tags
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