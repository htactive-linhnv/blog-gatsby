import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Link } from "gatsby"
import { Button, Tag } from 'antd'
import StyledBlog from '../templates/posts-style'

export default ({ data, pageContext }) => {
  const { category } = pageContext;
  const posts = data.allMarkdownRemark.edges.filter(item => item.node.frontmatter.categories.includes(category))
  return (
    <Layout>
      <StyledBlog>
        {posts.map(({ node }, index) =>
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