import React from 'react';
import styled from "styled-components";
import Link from "next/link";
import { ArticleType } from "../../constants/types";
import { theme } from '../../styles/theme';
import { Divider } from "./index";
interface Props extends ArticleType {

}

const StyledArticle = styled.article`
  width : 100%;
  height : 200px;
  border : 1px solid #EBEBEB;
  margin-bottom : 15px;
  text-align: center;
  padding : 20px 0px;
  background-color: ${props => props.theme.mono100};
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
    id,
    title,
    type,
    about,
    relation,
    fId
  } = props;

  const goTo = (id: number) => {

  }

  return (
    <Link href={`/details/${id}`} passHref={true}>
      <StyledArticle onClick={() => goTo(fId)}>
        <span className="title">{title}</span><br />
        {!!type && (<><span className="type">{type}</span><br /></>)}
        {!!about && (<><span className="about">{about}</span><br /></>)}
        <Divider />
        <div>
          {!!relation && relation.map((el, idx) => {
            return (
              <span className="relation" key={"#" + idx}>#{el}</span>
            )
          })}
        </div>
      </StyledArticle>
    </Link>

  )
}

export { Article };