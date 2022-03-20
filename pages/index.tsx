import { ReactElement } from "react";
import styled from "styled-components";
import {
  Layout,
  ListView
} from "../components/common/index";
import { ArticleType } from "../constants/types";

interface Props {
  data: ArticleType[];
}
// Typescript에서 default App.tsx Component는 NextPage Type인것 같은데, 
// getLayout 적용시 Props를 가져오지 못한다. (ex, Home : NextPage = () => 의 경우 )
const Home = ({ data }: Props) => {

  return (
    <ListView direction={"column"} data={data}>
    </ListView >
  )
}

export const getServerSideProps = async () => {

  // Send Initial Data to Home Component

  return {
    props: {
      data: [
        {
          title: "What is the Multichain?",
          desc: "",
          fId: 0,
        },
        {
          title: "About IDO",
          desc: "",
          fId: 0,
        }
      ]
    }
  }
}

const getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

Home.getLayout = getLayout;

export default Home
