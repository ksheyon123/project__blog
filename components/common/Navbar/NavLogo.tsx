import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

const StyledNavLogo = styled.div`
  display : flex;
  width : 100%;
  padding : 15px;
  & > div {
    ${theme.h2}
    position : relative;
    bottom : 0px;
    padding : 5px;
    border : 1px solid ${theme.primary};
    border-radius: 10px;
    box-shadow: 0px 3px 5px 0px rgba(52, 188, 249, 0.6);
    font-weight: ${theme.medium};
    color : ${theme.primary};
    &:hover {
      bottom :3px;
      cursor: pointer;
    }
  }
`

const NavLogo: React.FC = () => {

  const handleOnClick = () => {
    window.location.href = "/";
  }
  return (
    <StyledNavLogo onClick={() => handleOnClick()}>
      <div>
        Devojs
      </div>
    </StyledNavLogo>
  )
}

export { NavLogo }