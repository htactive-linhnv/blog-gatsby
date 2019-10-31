import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import StyledBlog from '../templates/posts-style'
import PostLayout from '../templates/PostLayout'
import SEO from '../components/seo'
import Paginate from '../templates/Paginate'
// import Search from "../components/SearchContainer";

export default (props) => {
    console.log(props,props.pageContext.tag);
    
    const { currentPage, numPages } = props.pageContext
    const path = currentPage>1 ? props.path.substring(1).slice(0,props.path.substring(1).length-1) : props.path.substring(1)
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? path : path + (currentPage - 1).toString()
    const nextPage = path + (currentPage + 1).toString()
    const posts = props.data.allMarkdownRemark.edges;
    let newPosts
    if ( path.includes('tag'))  newPosts = posts.filter(item => item.node.frontmatter.tags.includes(props.pageContext.tag))
    else if ( path.includes('category')) newPosts = posts.filter(item => item.node.frontmatter.categories.includes(props.pageContext.category))
    else newPosts = posts
    console.log(path);
    
    return (
        <Layout>
            <SEO title="Home" />
            {/* <Search /> */}
            <StyledBlog>
                {
                    newPosts.map(({ node }, index) =>
                        <PostLayout node={node} />
                    )}
                <Paginate isFirst={isFirst} isLast={isLast} prevPage={prevPage}
          nextPage={nextPage} currentPage={currentPage} numPages={numPages} path={path} />
            </StyledBlog>
        </Layout>
    )
}

export const query = graphql`
query ($skip: Int!, $limit: Int!){
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
          thumbnail
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
