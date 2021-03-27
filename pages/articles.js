import axios from "axios";
import Layout from "../components/Layout/Layout";
import Article from "../components/Article/Article";
import style from "./articlesBox.module.scss";

const Articles = ({ articles }) => {
  return (
    <Layout>
      <h1>Articless {articles.length}</h1>
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
  console.log(a);
  const res = await axios.get("http://localhost:3000/api/articles");
  return { articles: res.data.articles };
};
