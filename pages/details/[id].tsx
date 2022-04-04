import type { ReactElement } from "react";
import styled from "styled-components";
import { useRouter } from 'next/router';
import { Layout } from "../../components/common/index";
import {
  ARTICLE
} from "../../constants/articles";
import { ArticleType } from "../../constants/types";
import {
  theme
} from "../../styles/theme";
import { getDateAndMonth } from "../../utils/utils";
const StyledDetail = styled.section`
  display: flex;
  width: 100vw;
  height : 100%;
  padding : 15px 0px;
  background-color: ${theme.mono06Div};
  overflow: scroll;
`;

const StyledWrapper = styled.article`
  width : 800px;
  margin : 0px auto;
  border-radius: 5px;
  background-color: ${theme.mono100};
  & > div.main-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > div.content-title {
      ${theme.h1};

    }
  }
  & > div.desc-content {
    ${theme.b1};
    background-color: ${theme.mono100};
    color : ${theme.mono03};
    line-height: 32px;
    padding : 10px;
    & p {
      ${theme.b3};
      & > span.murmur {
        ${theme.b3};
      }
      & > span.str {
        font-weight: ${theme.medium};
      }
      & > span.italic {
        font-style : italic;
      }
      & > span.underline {
        text-decoration: underline;
      }
      & a {
        ${theme.b3};
        color : ${theme.mono03};
        padding : 5px 10px;
        border : 1px solid ${theme.mono06Div};
        border-radius : 10px;
      }
    }
    & > div.img-box {
        width : 100%;
        height : auto;
        & img {
          width : 100%;
          height : 100%;
        }
    }
    & pre {
        ${theme.b2}
        color : ${theme.mono01}
      }
  }
  & > div.tap {
    padding : 10px;
    justify-content: space-between;
  }
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
    relation,
    createdAt
  } = item as ArticleType

  const _dateString = getDateAndMonth(new Date(createdAt));

  return (
    <StyledDetail>
      <StyledWrapper>
        <div className="tap flex">
          <div>
            <span className="date">
              {_dateString}
            </span>
          </div>
          <div>
            <span><img /></span>
          </div>
        </div>
        <div className="main-content">
          <div className="content-title">{title}</div>
          <div>{type}</div>
          <div>{about}</div>
          {relation?.map((el: any) => {
            return (
              <>
                {el}
              </>
            )
          })}
        </div>
        <div className="desc-content" dangerouslySetInnerHTML={{
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