import { ReactElement } from "react";
import {
  Layout,
  ListView,
  ComboBox,
  Wrapper
} from "../components/common/index";
import { ArticleType } from "../constants/types";
import {
  ARTICLE
} from "../constants/articles";
interface Props {
  data: ArticleType[];
}
// Typescript에서 default App.tsx Component는 NextPage Type인것 같은데, 
// getLayout 적용시 Props를 가져오지 못한다. (ex, Home : NextPage = () => 의 경우 )

const Home = ({ data }: Props) => {

  return (
    <>
      <ComboBox list={[{ value: 0, name: "최신순" }, { value: 1, name: "옛날순" }]} handleOnChange={() => { }} initialValue={"최신순"} />
      <ListView direction={"column"} data={data} />
    </>
  )
}

export const getServerSideProps = async () => {

  // Send Initial Data to Home Component

  return {
    props: {
      data: ARTICLE
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
