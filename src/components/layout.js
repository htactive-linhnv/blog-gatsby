import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import Sidebar from './sidebar'
import Header from './header'
import './layout.css'



 const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      },
      topics: allMarkdownRemark(sort : {order : DESC, fields: [frontmatter___date]}){
        edges {
          node {
            frontmatter {
              categories
              tags
            }
          }
        }
      }
    }
  `)

  return (
    <div className='layout'>
      <Header data={data.topics.edges}>
        <SEO title='Home' />
      </Header>
      <main style={{
        display: 'flex',
        width: '100%'
      }}>
        <div className='content'>{children}</div>
        <div className='sidebar'><Sidebar edges={data.topics.edges} /></div>
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {' '}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </footer>
    </div>

  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired
}
export default Layout