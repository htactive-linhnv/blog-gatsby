import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import  './posts-style.css'
import PostLayout from './PostLayout'
import SEO from '../components/seo'
import Paginate from './Paginate'

export default (props) => {
  const { path, pageContext, data, } = props
  const { currentPage, numPages } = pageContext
  const pagePath = currentPage > 1 ? path.substring(1).slice(0, path.substring(1).length - 1) : path.substring(1)
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? pagePath : pagePath + (currentPage - 1).toString()
  const nextPage = pagePath + (currentPage + 1).toString()
  let newPosts
  if (pagePath.includes('tag')) newPosts = data.tagList.edges
  else if (pagePath.includes('category')) newPosts = data.categoryList.edges
  else newPosts = data.blogList.edges
  
  return (
    <Layout>
      <SEO title='Home' />
      <div className='StyledBlog'>
        {
          newPosts.map(({ node }, index) =>
            <PostLayout node={node} />
          )}
        <Paginate
          isFirst={isFirst} isLast={isLast}
          prevPage={prevPage} nextPage={nextPage}
          currentPage={currentPage} numPages={numPages}
          path={pagePath} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($skip: Int!, $limit: Int!, $tag: String, $category:String){
  blogList: allMarkdownRemark  (
      sort: {order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip,
     
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
  ,
  tagList: allMarkdownRemark  (
      sort: {order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip,
      filter  : {
        frontmatter : {
          tags:{
            in:[$tag]
          }
        }
      }
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
    },
    categoryList: allMarkdownRemark  (
      sort: {order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip,
      filter  : {
        frontmatter : {
          categories:{
            in:[$category]
          }
        }
      }
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
    },
    allCategory: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            categories
          }
          }
          
        }
    }
  }

`
