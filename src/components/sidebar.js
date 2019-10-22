import React from "react";
import "./sidebar.css";
import { Link } from "gatsby"
const slug = require(`slug`);

export default (props) => {
  const { edges } = props;
  let tags = [];
  let categories = [];

  edges.forEach(({ node }) => {
    tags = Array.from(new Set([...tags, ...node.frontmatter.tags]));
    categories = Array.from(new Set([...categories, ...node.frontmatter.categories]))
  });

  return (
    <aside>
      <div>
        <p>Tags</p>
        {tags.map((item, index) => <span key={index}>
          <Link to={`/tag/${slug(item).toLowerCase()}/`}>
          {/* <Link to=""> */}
            {item}
          </Link>
           &nbsp;
        </span>)
        }
      </div>
      <div>
        <p>Categories</p>
        {categories.map((item, index) => <div key={index}>
          <Link to={`/category/${slug(item).toLowerCase()}/`}>
          {/* <Link to=""> */}
            {item}
          </Link>
        </div>)}
      </div>
    </aside>
  )
}