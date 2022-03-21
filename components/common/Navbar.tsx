import React from 'react';
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  navigationState
} from "../../states/atom";
import {
  NAV__NAME
} from "../../constants/index";
import {
  NavigationType
} from "../../constants/types";
import { theme } from '../../styles/theme';

const StyledNavbar = styled.nav<{ isActive: boolean }>`
  position : absolute;
  top : 60px;
  left : 0;
  width : ${props => props.isActive ? "120px" : "0px"};
  height : calc(100vh - 60px);
  border-right : 1px solid #EBEBEB;
  background-color: #FFF;
  /* ${props => props.isActive ? `display : block;` : `display : none`} */
`;

const Navbar: React.FC = () => {
  const isActive = useRecoilValue(navigationState);

  return (
    <>
      <StyledNavbar isActive={isActive}>
        <NavDrawer />
        {
          NAV__NAME.map((el: NavigationType, idx: number) => {
            return (
              <NavNameWrapper key={idx.toString()} {...el} />
            )
          })
        }
      </StyledNavbar>
    </>
  )
}

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

const StyledNavName = styled.div`
  ${props => props.theme.b3};
  color : ${theme.mono03};
  margin-bottom : 10px;
`;

const NavNameWrapper: React.FC<NavigationType> = ({ pId, name }) => {
  return (
    <StyledNavName>
      {name}
    </StyledNavName>
  )
}

export { Navbar };