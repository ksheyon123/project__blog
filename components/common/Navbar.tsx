import React from 'react';
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  navigationState
} from "../../states/atom";

const StyledNavbar = styled.nav<{ isActive: boolean }>`
  position : absolute;
  top : 60px;
  left : 0;
  width : ${props => props.isActive ? "120px" : "0px"};
  height : calc(100vh - 60px);
  border-right : 1px solid #EBEBEB;
  background-color: #FFF;
`;

const StyledNavDrawer = styled.div<{ isActive: boolean }>`
  position : relative;
  top : 0px;
  ${props => props.isActive ? `
  left : 0px;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 20px solid #323232;
  ` : `
  right : 0px;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 20px solid #323232;
  `}
  &:hover {
    cursor: pointer;
  }
`;

const NavDrawer: React.FC = () => {
  const [isActive, setIsActive] = useRecoilState(navigationState);

  return (
    <StyledNavDrawer isActive={isActive} onClick={() => setIsActive(!isActive)} />
  )
}

const Navbar: React.FC = () => {
  const isActive = useRecoilValue(navigationState);


  return (
    <>
      <StyledNavbar isActive={isActive}>
        <NavDrawer />
      </StyledNavbar>
    </>
  )
}

export { Navbar };