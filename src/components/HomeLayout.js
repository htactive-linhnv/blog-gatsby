import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Sidebar from "./sidebar"
import Header from "./header"
import "./layout.css"
import "./homelayout.css"

const HomeLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      topics: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
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
    <div className="layout">
      <Header data={data.topics.edges}>
        <SEO title="Home" />
      </Header>
      <main
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div className="content">
          <div className="wrapper"> {children}</div>
        </div>
      </main>
      {/* <footer>
        ©Linh Nguyễn 
      </footer> */}
    </div>
  )
}

export default HomeLayout
