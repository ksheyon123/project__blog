import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from "styled-components";
import Image from 'next/image';
import {
  ComboBoxType
} from "../../constants/types";
import icArrowUp from "../../assets/ic_arrow_up.png";
import icArrowDown from "../../assets/ic_arrow_down.png";
import { theme } from "../../styles/theme";
interface Props {
  width?: string;
  list: ComboBoxType[];
  handleOnChange: Dispatch<SetStateAction<number | string>>;
  initialValue: string | number;
}

const StyledComboBox = styled.div<{ width: string; isActive: boolean; }>`
  position : relative;
  display : flex;
  align-items: center;
  width : ${props => props.width};
  height : 40px;
  padding : 5px 40px 5px 15px;
  background-color: ${theme.mono100};
  background-position: center left 0px;
  background-repeat: no-repeat;
  background-size: 100px 100px;
  border : 1px solid ${theme.mono06Div};
  ${props => {
    const img: StaticImageData = props.isActive ? icArrowUp : icArrowDown;
    return `
    background-image: url("${img}");
    `;
  }}
  & > ul {
    position: absolute;
    width : ${props => props.width};
    top : 40px;
    left : -1px;
    background-color: ${theme.mono100};
    border : 1px solid ${theme.mono06Div};
    ${props => props.isActive ? `
     display : block;
    ` : `
      display : none;
    `};
    & > li {
      padding : 0px 5px;
      margin-bottom : 5px;
      &:last-of-type {
      margin-bottom : 0px;

      }
    }
  }
  
`;

const ComboBox: React.FC<Props> = (props) => {
  const {
    width,
    list = [],
    handleOnChange = () => { },
    initialValue = 0,
  } = props;
  const [value, setValue] = useState<string | number>(initialValue);
  const [isActive, setIsActive] = useState<boolean>(false);

  const _width = !!width ? width : "120px";

  return (
    <StyledComboBox width={_width} isActive={isActive} onClick={() => setIsActive(!isActive)}>
      <div >{value}</div>
      <ul>
        {
          list.map(({ value, name }: ComboBoxType, idx: number) => {
            return (
              <li
                key={idx.toString()}
                onClick={() => {
                  handleOnChange(value)
                  setValue(name);
                }}
              >
                {name}
              </li>
            )
          })
        }
      </ul>
    </StyledComboBox>
  )
}

export { ComboBox };