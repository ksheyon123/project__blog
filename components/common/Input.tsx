import React, { Dispatch, SetStateAction } from 'react';
import styled from "styled-components";
import {
  InputType
} from "../../constants/types";

interface Props extends InputType {
  value: string | number;
  handleOnChange: Dispatch<SetStateAction<number | string>>;
}

const StyledInput = styled.div<InputType>`
  width : 100%;
  height : 40px;
  box-sizing: border-box;
  & > input {
    padding : 10px;
    width : 100%;
    height : 100%;
    border : none;
  }
  ${props => props.type === "Normal" && `
  `}
  ${props => props.type === "Search" && `
  padding-left : 40px;
  `}
`;

const Input: React.FC<Props> = (props) => {

  const {
    type,
    value,
    handleOnChange
  } = props;

  return (
    <StyledInput type={type}>
      <input value={value} onChange={(e) => handleOnChange(e.target.value)} />
    </StyledInput>
  )
}

export { Input };