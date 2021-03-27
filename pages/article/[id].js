import Layout from "../../components/Layout/Layout";
import axios from "axios";

const Article = ({ article }) => {
  if (typeof article != "object") {
    return <Layout>{article}</Layout>;
  }
  return (
    <Layout>
      <h1>{article.title}</h1>
      <img src={article.image} />
      <p>{article.description}</p>
    </Layout>
  );
};
export default Article;

Article.getInitialProps = async ({ query }) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/article/${query.id}`
  );
  return { article: data.article };
};
