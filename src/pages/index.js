import React from "react"
import Header from "../components/header"
import Image from "../images/boy.png"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import { Typography, Layout } from 'antd';
import styled from 'styled-components'
import '../pages/style.css'
const { Text } = Typography;

const Wrapper = styled.div`
 
`

export default (props) => {  
  return (
    <div className="wrapper">
      <Header data= {props.data.allMarkdownRemark.edges} >
        <SEO title="Home" />
      </Header>
      <p className="text" id="first-text">hey,i'm</p>
      <Text className="welcome" code>  Linh </Text>
      <div className='image'>
        <img src ={Image}></img>
      </div>
      <p className="text">front-end developer @unemployed</p>
      <p className="text">coding | blog | travel </p>
    </div>


  )
}

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