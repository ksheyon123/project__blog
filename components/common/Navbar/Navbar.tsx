import React from 'react';
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import {
  navigationState,
} from "../../../states/atom";
import {
  NAV__NAME
} from "../../../constants/index";
import {
  NavigationType
} from "../../../constants/types";
import {
  Input
} from "../index";
import {
  NavDrawer,
  NavName,
  NavLogo
} from "./index";

const StyledNavbar = styled.nav<{ isActive: boolean }>`
  position : absolute;
  top : 0px;
  left : 0;
  width : ${props => props.isActive ? "200px" : "0px"};
  height : 100vh;
  border-right : 1px solid #EBEBEB;
  background-color: #FFF;
  ${props => props.isActive ? `display : block;` : `display : none`}
`;

const Navbar: React.FC = () => {
  const isActive = useRecoilValue(navigationState);

  return (
    <>
      <NavDrawer />
      <StyledNavbar isActive={isActive}>
        <NavLogo />
        <Input type="Search" handleOnChange={() => { }} value="0" />
        {
          NAV__NAME.map((el: NavigationType, idx: number) => {
            return (
              <NavName key={idx.toString()} {...el} />
            )
          })
        }
      </StyledNavbar>
    </>
  )
}

export { Navbar };