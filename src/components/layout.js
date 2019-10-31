
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Sidebar from './sidebar'
import Header from "./header"
import "./layout.css"
import styled from 'styled-components'

const Layout = styled.div`
margin: 0 auto;
max-width: 80%;
padding-top: 0;
& .ant-typography {
  font-size:2.3em;
}

& .ant-menu-item, .ant-menu-submenu-title {
  padding: 0 0 0 40px;
}

@media only screen and (max-width:1200px) {
  .content {
    width:100% !important;
  }
  .sidebar {
    display:none;
    width:0;
  }
   .ant-typography {
    font-size:1.5em;
  }
}
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
    <Layout>
      <Header>
        <SEO title="Home" />
      </Header>
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

  )
}

