import React from 'react';
import styled from "styled-components";
import {
  InputType
} from "../../constants/types";

interface Props extends InputType {

}

const StyledInput = styled.div<Props>`
  width : 180px;
  height : 40px;
  box-sizing: border-box;
  ${props => props.type === "Normal" && `
  `}
  ${props => props.type === "Search" && `
  padding-left : 40px;
  `}
`;

const Input: React.FC<Props> = (props) => {

  const {
    type
  } = props;

  return (
    <StyledInput type={type}>
    </StyledInput>
  )
}

export { Input };