import type { ReactElement } from "react";
import { useState } from "react";
import Head from 'next/head';
import styled from "styled-components";
import { useRouter } from 'next/router';
import { Layout } from "../../components/common/index";
import {
  ARTICLE
} from "../../constants/articles";
import { ArticleType } from "../../constants/types";

const StyledDetail = styled.section`
  display: flex;
  width: 100vw;
  padding : 15px 0px;
  background-color: ${props => props.theme.mono06Div};
  overflow: scroll;
`;

const StyledWrapper = styled.article`
  width : 800px;
  margin : 0px auto;
  background-color: ${props => props.theme.mono100};
`

const Details = () => {

  const router = useRouter();

  const { id } = router.query;

  const item = ARTICLE.find(el => {
    if (!!id) {
      const _id: string = id[0];
      return el.id === parseInt(_id)
    }
  });

  const {
    title,
    desc,
    type,
    about,
    relation
  } = item as ArticleType

  return (
    <StyledDetail>
      <StyledWrapper>
        <div>{title}</div>
        <div>{type}</div>
        <div>{about}</div>
        {relation?.map((el: any) => {
          return (
            <>
              {el}
            </>
          )
        })}
        <div className="main-content" dangerouslySetInnerHTML={{
          __html: desc
        }}>
        </div>
      </StyledWrapper>
    </StyledDetail>
  )
}

const getLayout = (page: ReactElement) => {

  return (
    <Layout>
      {page}
    </Layout>
  )
}

Details.getLayout = getLayout

export const getServerSideProps = async () => {

  return {
    props: {

    }
  }
}


export default Details;