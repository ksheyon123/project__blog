import React from 'react';
import styled from "styled-components";

import {
  DirectionType,
  ArticleType
} from "../../constants/types";
import { Article } from "./index";

interface Props extends DirectionType {
  data: ArticleType[];
}

const StyledCard = styled.article`

`;

const StyledListView = styled.section<DirectionType>`
  display : flex;
  flex-direction: column;
  padding : 15px;
`;

const ListView: React.FC<Props> = (props) => {

  const {
    direction,
    data
  } = props

  return (
    <StyledListView direction={direction}>
      {
        data.map((el: ArticleType, idx: number) => {
          return (
            <Article key={idx.toString()} {...el} />
          )
        })
      }
    </StyledListView>
  )
}

export { ListView };