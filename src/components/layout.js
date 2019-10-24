
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from './sidebar'
import Header from "./header"
import "./layout.css"
import styled from 'styled-components'

const Layout = styled.div`
margin: 0 auto;
max-width: 80%;
padding: 0px 1.0875rem 1.45rem;
padding-top: 0;
`
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ({ children }) => {
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Layout>
        <main style={{
          display: 'flex',
          width: '100%'
        }}>
          <div className="content">{children}</div>
          <div className="sidebar"><Sidebar edges={data.topics.edges} /></div>
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Layout>
    </>
  )
}

