import React from 'react';
import styled from "styled-components";

interface Props {
  isActive: boolean;
}

const StyledNavbar = styled.nav<Props>`
  position : fixed;
  top : 60px;
  left : 0;
  width : 120px;
  height : calc(100vh - 60px);
  border-right : 1px solid #EBEBEB;
`;

const Navbar: React.FC<Props> = (props) => {

  const {
    isActive
  } = props;

  return (
    <StyledNavbar isActive={isActive}>
    </StyledNavbar>
  )
}

export { Navbar };