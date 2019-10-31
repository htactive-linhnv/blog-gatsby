// import React from "react";
// import { graphql, Link } from "gatsby";
// import Layout from "../components/layout";
// import StyledBlog from '../templates/posts-style'
// import PostLayout from '../templates/PostLayout'
// import SEO from '../components/seo'
// import Paginate from '../templates/Paginate'
// import Search from "../components/SearchContainer";
import makePostPage from '../templates/makePostPage'

export default makePostPage(props)
//   const { currentPage, numPages } = props.pageContext
//   const isFirst = currentPage === 1
//   const isLast = currentPage === numPages
//   const prevPage = currentPage - 1 === 1 ? "blog/" : "blog/" + (currentPage - 1).toString()
//   const nextPage = "blog/" + (currentPage + 1).toString()
//   let posts =  props.data.allMarkdownRemark.edges;
//   return (
//     <Layout>
//       <SEO title="Home" />
//       <Search/>
//       <StyledBlog>
//         {
//           posts.map(({ node }, index) =>
//             <PostLayout node={node} />
//           )}
//         <Paginate isFirst={isFirst} isLast={isLast} prevPage={prevPage}
//           nextPage={nextPage} currentPage={currentPage} numPages={numPages} />
//       </StyledBlog>
//     </Layout>
//   )
// }

// export const query = graphql`
// query blogPageQuery($skip: Int!, $limit: Int!){
//   allMarkdownRemark(
//       sort: {order: DESC, fields: [frontmatter___date] }
//       limit: $limit
//       skip: $skip
//     ) {
//     edges {
//       node {
//         frontmatter {
//           title
//           date(formatString: "DD/MM/YYYY")
//           tags
//           categories
//         }
//         excerpt(pruneLength: 280)
//         fields {
//           slug
//         }
//       }
//     }
//   }
// }
// `
