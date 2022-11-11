/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import VisuallyHidden from "../VisuallyHidden"

const ProgressBar = ({ value, size }) => {
  const SIZE = {
    large: {
      height: 24,
      padding: 4,
      borderRadius: 8,
    },
    medium: {
      height: 12,
      padding: 0,
      borderRadius: 4,
    },
    small: {
      height: 8,
      padding: 0,
      borderRadius: 4,
    },
  }
  const style = SIZE[size]
  return (
    <Wrapper style={style}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <Progress
        role="meter"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
        value={value}
      ></Progress>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 370px;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px hsla(0, 0%, 50%, 0.35);
`

const Progress = styled.div`
  background: ${COLORS.primary};
  width: ${(props) => props.value + "%"};
  height: 100%;
  border-radius: ${(props) => (props.value < 100 ? "4px 0 0 4px " : "4px")};
`

export default ProgressBar
