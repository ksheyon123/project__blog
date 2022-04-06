import React, { MouseEvent } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { subdirectoryParamsState } from "../../../states/atom";
import { NAV__NAME } from "../../../constants/index";
import { NavigationType, ArticleType } from "../../../constants/types";
import { theme } from "../../../styles/theme";

const StyledSubNavName = styled.div<{ isSelected: boolean }>`
${props => props.theme.b3};
  color : ${props => props.isSelected ? theme.mono00 : theme.mono03};
padding : 5px 10px 5px; 
`;

interface Props extends NavigationType {
  list: any[];
}

const SubNavName: React.FC<Props> = (props) => {
  const {
    pId,
    name,
    list
  } = props;

  const [navIdx, setNavIdx] = useRecoilState(subdirectoryParamsState);

  const totalCnt = list.length;
  const cnt: number = list.reduce((cnt: number, el: ArticleType) => (pId === el.fId) ? cnt + 1 : cnt + 0, 0);
  const isSelected: boolean = pId === navIdx;

  const jsx = pId === 0 ? (<div>{name} ({totalCnt})</div>) : <div>{name} ({cnt})</div>

  const handleOnClick = (e: MouseEvent) => {
    e.preventDefault();
    setNavIdx(pId)
  }

  return (
    <StyledSubNavName isSelected={isSelected} onClick={(e) => handleOnClick(e)}>
      {jsx}
    </StyledSubNavName>
  )
}

export { SubNavName };