import React from 'react';
import styled from "styled-components";
import {
  theme
} from "../../styles/theme";


const StyledDivider = styled.div`
  width : calc(100% - 40px);
  height : 10px;
  border-bottom : 1px solid ${theme.mono06Div};
  margin : 0px auto 10px;
`;

const Divider: React.FC = () => {
  return (
    <StyledDivider />
  )
}

export { Divider };