import React from 'react';
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import {
  Navbar,
  Header
} from "./index";

const StyledLayout = styled.main`
  width : 100vw;
  height : 100vh;
  overflow: scroll;
  background-color: ${props => props.theme.mono06Div};
`;

const Layout: React.FC = ({ children }) => {

  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <StyledLayout>
        {children}
      </StyledLayout>
    </>
  )
}

export { Layout };