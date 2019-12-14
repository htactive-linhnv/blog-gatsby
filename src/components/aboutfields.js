import React from "react"
import styled from "styled-components"

const AboutFields = styled.div`
  display: flex;
  width: 50%;
  & img {
    width: 50px;
    margin-right: 20px;
    max-width: 50px;
  }
  & .title {
    font-size: 1.26em;
    margin-bottom: 5px;
  }
  & .detail {
    font-size: 0.9em;
    color: #6d6d6d;
    width: 200px;
  }
  & .title:after {
    content: "";
    width: 30px;
    height: 1.5px;
    background: #fac921;
  }
`
export default ({ img, title, detail }) => {
  return (
    <AboutFields>
      <div className="img">
        <img src={img}></img>
      </div>
      <div>
        <p className="title">{title}</p>
        <p className="detail">{detail}</p>
      </div>
    </AboutFields>
  )
}
