import React from 'react';
import styled from "styled-components";

import { ArticleType } from "../../constants/types";

interface Props extends ArticleType {

}

const StyledArticle = styled.article`
  width : 100%;
  height : 200px;
  border : 1px solid #EBEBEB;
  border-radius : 10px;
  margin-bottom : 15px;
  &:last-of-type  {
    margin-bottom : 0px;
  }
`;

const Article: React.FC<Props> = (props) => {

  const {
    title,
    desc,
    fId
  } = props;

  return (
    <StyledArticle>
      {title}
      {desc}
    </StyledArticle>
  )
}

export { Article };