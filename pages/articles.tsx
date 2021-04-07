import axios from "axios";
import Layout from "../components/Layout/Layout";
import Article, { ArticleType } from "../components/Article/Article";
import style from "./articlesBox.module.scss";
import { NextPage } from "next";

type PropsType = {
  articles: ArticleType[];
};
const Articles: NextPage<PropsType> = ({ articles }) => {
  return (
    <Layout>
      <h2>Articless {articles.length}</h2>
      <div className={style.articlesBox}>
        {articles.map((el) => (
          <Article el={el} key={el.id} />
        ))}
      </div>
    </Layout>
  );
};
export default Articles;

Articles.getInitialProps = async (a) => {
  console.log('c')
  let host = "localhost:3000";

  if (a.req) {
    host = a.req.headers.host;
  } else {
    host = window.location.host;
  }

  const res = await axios.get(`http://${host}/api/articles`);
  return { articles: res.data.articles };
};
