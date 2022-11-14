import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import Icon from "../Icon"
import { getDisplayedValue } from "./Select.helpers"

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children)

  return (
    <Wrapper>
      <RealSelect value={value} onChange={onChange}>
        {children}
      </RealSelect>
      <SelectWrapper>
        <TextWrapper>{displayedValue}</TextWrapper>
        <Icon id="chevron-down" strokeWidth={2} size={24}></Icon>
      </SelectWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`

const RealSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  height: 100%;
  width: 100%;
  -webkit-appearance: none;
`

const SelectWrapper = styled.div`
  height: 43px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};

  padding: 12px 16px;
  display: flex;
  align-items: center;

  ${RealSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${RealSelect}:hover + & {
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
