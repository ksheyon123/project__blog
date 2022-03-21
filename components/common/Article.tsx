import React from 'react';
import styled from "styled-components";

import { ArticleType } from "../../constants/types";

interface Props extends ArticleType {

}

const StyledArticle = styled.article`
  width : 100%;
  height : 200px;
  border : 1px solid #EBEBEB;
  margin-bottom : 15px;
  text-align: center;
  padding : 20px 0px;
  &:last-of-type  {
    margin-bottom : 0px;
  }
  & span {
    margin-bottom : 5px;
    &:last-of-type {
      margin-bottom: 0px;
    }
    &:nth-child(1) {
      ${props => props.theme.h1}
    }
  }
`;

const Article: React.FC<Props> = (props) => {

  const {
    title,
    subtitle,
    desc,
    category,
    fId
  } = props;

  return (
    <StyledArticle>
      <span>{title}</span><br />
      {!!subtitle && (<><span>{subtitle}</span><br /></>)}
      <span>{category}</span><br />
      {desc}
    </StyledArticle>
  )
}

export { Article };