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
  ArticleType,
  NavigationType
} from "../../constants/types";
import {
  ARTICLE
} from "../../constants/articles";
import { theme } from '../../styles/theme';

const StyledNavbar = styled.nav<{ isActive: boolean }>`
  position : absolute;
  top : 60px;
  left : 0;
  width : ${props => props.isActive ? "120px" : "0px"};
  height : calc(100vh - 60px);
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
  position : absolute;
  z-index : 999;
  top : 60px;
  ${props => props.isActive ? `
  left : 100px;
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

const StyledNavName = styled.div`
  ${props => props.theme.b3};
  color : ${theme.mono03};
  margin-bottom : 10px;
`;

const NavNameWrapper: React.FC<NavigationType> = ({ pId, name }) => {

  const cnt: number = ARTICLE.reduce((cnt: number, el: ArticleType) => (pId === el.fId) ? cnt + 1 : cnt + 0, 0);

  return (
    <StyledNavName>
      {name} ({cnt})
    </StyledNavName>
  )
}

export { Navbar };