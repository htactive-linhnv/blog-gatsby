import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const Header = (props) => (
  <div
    style={{
      background: "rebeccapurple",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: '80%',
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          {props.siteTitle}
        </Link>
        <ul style={{ listStyle: "none", float: "right" }}>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "x-large"
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "x-large"
              }}
              to="/page-2"
            >
              Page 2
            </Link>
          </li>
          <li style={{ display: "inline-block", marginRight: "1rem" }}>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "x-large"
              }}
              to="/page-3"
            >
              Page 3
            </Link>
          </li>
        </ul>
      </h1>
    </div>
  </div>
);
 
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
