/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import VisuallyHidden from "../VisuallyHidden"

const ProgressBar = ({ value, size }) => {
  const SIZE = {
    large: {
      height: "16px",
      padding: "4px",
      borderRadius: "8px",
    },
    medium: {
      height: "12px",
      padding: 0,
      borderRadius: "4px",
    },
    small: {
      height: "8px",
      padding: 0,
      borderRadius: "4px",
    },
  }
  const styles = SIZE[size]
  return (
    <Wrapper
      role="meter"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        "--padding": styles.padding,
        "--radius": styles.borderRadius,
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <ProgressWrapper>
        <Progress
          style={{ "--width": `${value}%`, height: styles.height }}
        ></Progress>
      </ProgressWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`

const ProgressWrapper = styled.div`
  border-radius: 4px;
  /* For Progress's border-radius */
  overflow: hidden;
`

const Progress = styled.div`
  background: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
`

export default ProgressBar
