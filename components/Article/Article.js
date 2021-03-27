import Link from "next/link";
import style from "./Article.module.scss";
const Article = ({ el }) => {
  return (
    <Link href={`/article/${el.id}`}>
      <a className={style.articleBox}>
        <div className={style.articleInBox}>
          <div>{el.title}</div>
          <img src={el.image} />
          <div>{el.description}</div>
        </div>
      </a>
    </Link>
  );
};

export default Article;
