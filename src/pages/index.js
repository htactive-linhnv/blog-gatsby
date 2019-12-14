import React from "react"
import Header from "../components/header"
import Image from "../images/boy.png"
import HomeLayout from "../components/HomeLayout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Typography, Layout } from "antd"
import styled from "styled-components"
import "../pages/style.css"
import About from "../components/about"
import Career from "../components/career"
const { Text } = Typography
const Home1st = styled.div`
  background: #2a2a2e;
  padding-top: 25vh;
  height: 90vh;
`
export default props => {
  return (
    <HomeLayout>
      <Home1st>
        <Text className="welcome" code>
          {" "}
          Linh{" "}
        </Text>
        <div className="image">
          <img src={Image}></img>
        </div>
        <p className="text">front-end developer @fpt software</p>
        <p className="text">coding | blog | travel </p>
      </Home1st>
      <About></About>
      <Career></Career>
    </HomeLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
            categories
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
