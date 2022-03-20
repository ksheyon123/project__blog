import React from 'react';
import styled from "styled-components";
import {
  Input
} from "./index";

const StyledHeader = styled.header`
  position : fixed;
  top : 0;
  display : flex;
  justify-content: flex-end;
  align-items: center;
  padding : 0px 10px;
  width : 100vw;
  height :60px;
  border-bottom: 1px solid #EBEBEB;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Input type="Search" />
    </StyledHeader>
  )
}

export { Header };