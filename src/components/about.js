import React from "react"
import CenterText from "../components/CenterText"
import styled from "styled-components"
import AboutFields from "../components/aboutfields"
const About = styled.div`
  background: white;
  margin:100px 0 ;
  color: black;
  & .wrapper {
    display: flex;
    margin-top: 65px;
    justify-content: center;
  }
  & .wrapper:first-child {
    margin-bottom: 20px;
  }
  & .wrapper > div:nth-child(2) {
    border: none;
  }
`
const AboutFieldsWrap = styled.div`
  padding: 0 7%;
  border-right: 1.85px solid #fac921;
  & div:first-child {
    margin-bottom: 50px;
  }
`
const introText = (
  <p>
    I am passionate about{" "}
    <span className="text--yellow text--lightbold">coding</span>,{" "}
    <span className="text--yellow text--lightbold">making products</span> and
    eager to work with creative ideas.
  </p>
)
const fieldsLeft = [
  {
    img: "img/frontend.png",
    title: "Front-end Development",
    detail: "More than 6 years of experience in designer role.",
  },
  {
    img: "img/creative.png",
    title: "Creative Mindset",
    detail: "More than 6 years of experience in designer role.",
  },
]
const fieldsRight = [
  {
    img: "img/ui.png",
    title: "UI/UX",
    detail: "More than 6 years of experience in designer role.",
  },
  {
    img: "img/db.png",
    title: "Back end Developer",
    detail: "More than 6 years of experience in designer role.",
  },
]
const fieldsLeftMap = fieldsLeft.map(item => (
  <AboutFields
    img={item.img}
    title={item.title}
    detail={item.detail}
  ></AboutFields>
))
const fieldsRightMap = fieldsRight.map(item => (
  <AboutFields
    img={item.img}
    title={item.title}
    detail={item.detail}
  ></AboutFields>
))
export default () => {
  return (
    <About>
      <CenterText text={introText} color="black" />
      <div className="wrapper">
        <AboutFieldsWrap>{fieldsLeftMap}</AboutFieldsWrap>
        <AboutFieldsWrap>{fieldsRightMap}</AboutFieldsWrap>
      </div>
    </About>
  )
}
