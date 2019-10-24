import React from "react";
import "./sidebar.css";
import { Link } from "gatsby"
import { Tag } from 'antd';
import styled from 'styled-components'

const slug = require(`slug`);
const Wrap = styled.div`
margin-bottom:20px
`
const Aside = styled.div`
  margin-left: 25%;
  border: 1px solid gray;
  padding: 20px 10px 20px 25px;
  position:fixed;
  right:13%;
`
export default (props) => {
  const { edges } = props;
  let tags = [];
  let categories = [];

  edges.forEach(({ node }) => {
    tags = Array.from(new Set([...tags, ...node.frontmatter.tags]));
    categories = Array.from(new Set([...categories, ...node.frontmatter.categories]))
  });

  const tagList = tags.map((item, index) =>
    <Tag key={index}
      color={'#' + (Math.random() * 0xFFFFFF << 0).toString(16)}>
      <Link to={`/tag/${slug(item).toLowerCase()}/`}>
        {item}
      </Link>
      &nbsp;
    </Tag>
  )

  const categoryList = categories.map((item, index) =>
    <div key={index}>
      <Link to={`/category/${slug(item).toLowerCase()}/`}>
        {item}
      </Link>
    </div>
  )

  return (
    <Aside>
      <Wrap>
        <p>Tags</p>
        {tagList}
      </Wrap>
      <Wrap>
        <p>Categories</p>
        {categoryList}
      </Wrap>
    </Aside>
  )
}