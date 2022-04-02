import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { navigationParamsState } from "../../../states/atom";
import { theme } from '../../../styles/theme';
import { ARTICLE } from "../../../constants/articles";
import {
  ArticleType,
  NavigationType
} from "../../../constants/types";

const StyledNavName = styled.div < { isSelected: boolean }> `
  ${props => props.theme.b3};
  color : ${props => props.isSelected ? theme.mono00 : theme.mono03};
  margin-bottom : 10px;
`;

const NavName: React.FC<NavigationType> = ({ pId, name }) => {
  const [navIdx, setNavIdx] = useRecoilState(navigationParamsState);
  const totalCnt = ARTICLE.length;
  const cnt: number = ARTICLE.reduce((cnt: number, el: ArticleType) => (pId === el.fId) ? cnt + 1 : cnt + 0, 0);
  const isSelected: boolean = pId === navIdx;

  const jsx = pId === 0 ? (<div>{name} ({totalCnt})</div>) : <div>{name} ({cnt})</div>

  return (
    <StyledNavName isSelected={isSelected} onClick={() => setNavIdx(pId)}>
      {jsx}
    </StyledNavName>
  )

}

export { NavName }