import React from 'react';
import styled from "styled-components";

const StyledWrapper = styled.div`
  display : block;
  width : 100%;
`

const Wrapper: React.FC = ({ children }) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
}

export { Wrapper };