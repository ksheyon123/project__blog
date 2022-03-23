import type { ReactElement } from "react";
import { useRouter } from 'next/router';
import styled from "styled-components";
import {
  Layout
} from "../../components/common/index";
import { theme } from "../../styles/theme";

const StyledKeyword = styled.div`
display: flex;
  width: 100vw;
  height : 100%;
  padding : 15px 0px;
  background-color: ${theme.mono06Div};
  overflow: scroll;
`;

const Keyword = () => {

  const router = useRouter();

  const { keyword } = router.query;

  console.log(keyword)

  return (
    <StyledKeyword>

    </StyledKeyword>
  )
}


const getLayout = (page: ReactElement) => {

  return (
    <Layout>
      {page}
    </Layout>
  )
}

Keyword.getLayout = getLayout

export const getServerSideProps = async () => {

  return {
    props: {

    }
  }
}


export default Keyword;