import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"

import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"

const STYLES = {
  small: {
    fontSize: `${14 / 16}rem`,
    iconSize: 16,
    borderThickness: 1 + "px",
    height: `${24 / 16}rem`,
  },
  large: {
    fontSize: `${18 / 16}rem`,
    iconSize: 24,
    borderThickness: 2 + "px",
    height: `${36 / 16}rem`,
  },
}

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size]
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          "--width": width + "px",
          "--height": styles.height,
          "--fontSize": styles.fontSize,
          "--thickness": styles.borderThickness,
        }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-size: var(--fontSize);
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

export default IconInput
