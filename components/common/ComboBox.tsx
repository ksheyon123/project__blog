import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from "styled-components";
import Image from 'next/image';
import {
  ComboBoxType
} from "../../constants/types";
import icArrowUp from "../../assets/ic_arrow_up.png";
import icArrowDown from "../../assets/ic_arrow_down.png";

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
  background-color: ${props => props.theme.mono100};
  background-position: center left 0px;
  background-repeat: no-repeat;
  background-size: 100px 100px;
  ${props => {
    const img: StaticImageData = props.isActive ? icArrowUp : icArrowDown;
    return `
    background-image: url("${img}");
    `;
  }}
  & > ul {
    position: absolute;
    top : 40px;
    background-color: ${props => props.theme.mono100};
    ${props => props.isActive ? `
     display : block;
    ` : `
    display : none;
    `};
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