import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import Icon from "../Icon"
import { getDisplayedValue } from "./Select.helpers"

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <SelectWrapper>
      <TextWrapper>{displayedValue}</TextWrapper>
      <Icon id="chevron-down" strokeWidth="2"></Icon>
      <RealSelect value={value} onChange={onChange}>
        {children}
      </RealSelect>
    </SelectWrapper>
  )
}

const RealSelect = styled.select`
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 100%;
`

const SelectWrapper = styled.div.attrs((props) => ({
  tabIndex: 0,
}))`
  position: relative;
  height: 43px;
  background-color: ${COLORS.transparentGray15};
  width: fit-content;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const TextWrapper = styled.div`
  margin-right: 24px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1rem;
`

export default Select
