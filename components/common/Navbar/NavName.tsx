import React from "react";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { navigationParamsState, subdirectoryParamsState } from "../../../states/atom";
import { theme } from '../../../styles/theme';
import {
  MenuType,
  NavigationType
} from "../../../constants/types";
import { SubNavName } from "./index";
import { ARTICLE } from "../../../constants/articles";

const StyledNavName = styled.div < { isSelected: boolean }> `
  ${props => props.theme.b3};
  color : ${props => props.isSelected ? theme.mono00 : theme.mono03};
  padding : 0px 10px;
  margin-bottom : 10px;
`;

const NavName: React.FC<MenuType> = ({ mId, name, subdirectory }) => {
  const [navIdx, setNavIdx] = useRecoilState(navigationParamsState);
  const reset = useSetRecoilState(subdirectoryParamsState);

  const isSelected: boolean = mId === navIdx;

  const handleOnClick = () => {
    setNavIdx(mId);
  }

  return (
    <StyledNavName isSelected={isSelected} onClick={() => handleOnClick()}>
      <div>{name} </div>
      { (!!subdirectory && isSelected) && (
        subdirectory.map((el: NavigationType, idx: number) => {
          return (
            <SubNavName list={ARTICLE} key={idx.toString()} {...el} />
          )
        })
      )}
    </StyledNavName>
  )

}

export { NavName }