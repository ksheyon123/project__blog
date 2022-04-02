import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { navigationState } from "../../../states/atom";

const StyledNavDrawer = styled.div<{ isActive: boolean }>`
  position : absolute;
  z-index : 999;
  top : 40px;
  ${props => props.isActive ? `
  left : 180px;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 20px solid #323232;
  ` : `
  left : 0px;
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

export { NavDrawer };