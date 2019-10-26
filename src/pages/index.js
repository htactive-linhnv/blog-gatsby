import React from "react"
import Header from "../components/header"
import Image from "../images/boy.png"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import { Typography, Layout } from 'antd';
import styled from 'styled-components'
const { Text } = Typography;

const Wrapper = styled.div`
  width:80%;
  margin: 0 auto;

  & .image {
    max-width: 150px;
    margin: 0 auto
    margin-bottom:1.65rem;
    margin-top:40px;
  }

  & .ant-typography {
      font-size:2.3em;
  }
  & .welcome {
    width: 350px;
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  & .text {
    margin: 0 auto;
    text-align:center;
    margin-bottom:15px;
    font-size:1.4em;
    font-weight:500;
    font-family: Google Sans,georgia,serif;
    letter-spacing: .04rem;
  }
  & #first-text {
    margin-top:80px;
  }
`

export default (props) => {
  return (
    <Wrapper>
      <Header >
        <SEO title="Home" />
      </Header>
      <p className="text" id="first-text">hey,i'm</p>
      <Text className="welcome" code>  Linh </Text>
      <div className='image'>
        <img src ={Image}></img>
      </div>
      <p className="text">front-end developer @unemployed</p>
      <p className="text">coding | blog | travel </p>
    </Wrapper>


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