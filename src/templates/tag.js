// import React from "react";
// import { graphql } from "gatsby";
// import Layout from "../components/layout";
// import StyledBlog from '../templates/posts-style'
// import PostLayout from '../templates/PostLayout'
// import SEO from '../components/seo'

// export default ({ data, pageContext }) => {
//   const { tag } = pageContext;
//   const posts = data.allMarkdownRemark.edges.filter(item => item.node.frontmatter.tags.includes(tag))
//   return (
//     <Layout>
//        <SEO title="Home" />
//       <StyledBlog>
//         {posts.map(({ node }, index) =>
//           <PostLayout node = {node}/>
//         )}
//       </StyledBlog>
//     </Layout>
//   );
// };

// export const query = graphql`
// query tagPageQuery($skip: Int!, $limit: Int!){
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
// }`

import makePostPage from '../templates/makePostPage'
export default makePostPage(props)