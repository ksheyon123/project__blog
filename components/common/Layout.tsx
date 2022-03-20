import React from 'react';
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import {
  Navbar,
  Header
} from "./index";
import {
  navigationState
} from "../../states/atom";

const StyledLayout = styled.main`
width : 100vw;
height : 100vh;
padding : 60px 0px 0px 120px;
  
`;

const Layout: React.FC = ({ children }) => {

  const isNavigationActivated = useRecoilValue(navigationState);

  return (
    <>
      <Navbar isActive={isNavigationActivated} />
      <Header />
      <StyledLayout>
        {children}
      </StyledLayout>
    </>
  )
}

export { Layout };