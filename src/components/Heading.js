import React from "react"
import styled from "styled-components"

const Heading = styled.div`
font-size:2.2em;
text-align:center;
padding-top:70px;
`

export default  () => {
    return (
      <Heading>
        MY <span className="text--yellow text--lightbold">AWESOME</span> JOURNEY
      </Heading>
    )
  }
