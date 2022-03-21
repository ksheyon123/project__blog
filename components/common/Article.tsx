import React from 'react';
import styled from "styled-components";

import { ArticleType } from "../../constants/types";
import { theme } from '../../styles/theme';

interface Props extends ArticleType {

}

const StyledArticle = styled.article`
  width : 100%;
  height : 200px;
  border : 1px solid #EBEBEB;
  margin-bottom : 15px;
  text-align: center;
  padding : 20px 0px;
  cursor : pointer;
  &:last-of-type  {
    margin-bottom : 0px;
  }
  & span {
    margin-bottom : 5px;
    &:last-of-type {
      margin-bottom: 0px;
    }
    &.title {
      ${props => props.theme.h1};
      color : ${theme.mono01};
      font-weight : ${theme.medium};
    }
    &.type {
      ${props => props.theme.b1};
      color : ${theme.mono03};
      font-weight : ${theme.demiLight};
    }
    &.about {
      ${props => props.theme.t1};
      color : ${theme.mono03};
      font-weight : ${theme.regular};
    }
  }
`;

const Article: React.FC<Props> = (props) => {

  const {
    title,
    type,
    about,
    fId
  } = props;

  const goTo = (id: number) => {

  }

  return (
    <StyledArticle onClick={() => goTo(fId)}>
      <span className="title">{title}</span><br />
      {!!type && (<><span className="type">{type}</span><br /></>)}
      {!!about && (<><span className="about">{about}</span><br /></>)}
    </StyledArticle>
  )
}

export { Article };