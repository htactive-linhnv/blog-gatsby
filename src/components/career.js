import React from "react"
import styled from "styled-components"
import { Steps, Divider } from "antd"
import Heading from "./Heading"
const { Step } = Steps
const Career = styled.div`
  height: 100%;
  background: #2a2a2e;
  & .ant-steps {
    color: white;
    width: 250px;
    margin: 0 auto;
    padding-top: 80px;
    padding-left: 2%;
  }
  .ant-steps-item-title {
    color: #fac921 !important;
  }
  .ant-steps-item-description {
    color: white !important;
  }
  .ant-steps-item-container {
    height: 150px;
  }
  .ant-steps-item-tail::after {
    background-color: #fac921 !important;
  }
  .ant-steps-item-process .ant-steps-item-icon {
    background: #fac921 !important;
  }
  .ant-steps-item-finish .ant-steps-item-icon {
    border-color: #fac921 !important;
  }
  .ant-steps-item-subtitle {
    display: block;
    color: white;
    margin: 0;
  }
  .ant-steps-vertical .ant-steps-item-content:nth-child(2),
  .ant-steps-vertical .ant-steps-item-content:nth-child(4) {
    position: absolute !important;
    left: -65% !important;
  }
`
const steps = [
  { title: "FPT Software", detail: "Front end Developer" },
  { title: "FPT Software", detail: "Front end Developer" },
  { title: "FPT Software", detail: "Front end Developer" },
  { title: "FPT Software", detail: "Front end Developer" },
  // { title: "FPT Software", subTitle: "Front end Developer",detail:"2019-2020"  },
  // { title: "FPT Software", subTitle: "Front end Developer",detail:"2019-2020"  },
  // { title: "FPT Software", subTitle: "Front end Developer",detail:"2019-2020"  },
]
const stepsMap = steps.map(item => (
  <Step
    title={item.title}
    description={item.detail}
    subTitle={item.subTitle}
    status="finish"
  />
))
export default () => {
  return (
    <Career>
      <Heading/>
      <Steps direction="vertical" size="big">
        {stepsMap}
      </Steps>
    </Career>
  )
}
