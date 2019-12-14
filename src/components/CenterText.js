import React from "react"
import styled, { css } from "styled-components"
const CenterText = styled.div`
  width: 400px;
  text-align: center;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.4em;
  font-weight: 500;
  font-family: Google Sans, georgia, serif;
  letter-spacing: 0.04rem;
`
export default ({ text, color }) => {
  return (
    <CenterText
      css={css`
        color: ${color};
      `}
    >
      {text}
    </CenterText>
  )
}
