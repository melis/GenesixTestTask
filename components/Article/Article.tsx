import Link from "next/link";
import style from "./Article.module.scss";
import { FC } from "react";

export type ArticleType = {
  id: number;
  title: string;
  description: string;
  image: string;
};
type PropsType = {
  el: ArticleType;
};

const Article: FC<PropsType> = ({ el }) => {
  return (
    <Link href={`/article/${el.id}`}>
      <a className={style.articleBox}>
        <div className={style.articleInBox}>
          <div>{el.title}</div>
          <img src={el.image} />
          <div>{el.description} </div>
        </div>
      </a>
    </Link>
  );
};

export default Article;
