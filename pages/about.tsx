import Link from "next/link";
import { NextPage } from "next";
import Layout from "../components/Layout/Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <h2>About text</h2>
      <img
        alt="Жолдошев М."
        src="https://hhcdn.ru/photo/610649356.jpeg?t=1617283602&h=YOIZv2Mm7jPHBWXM7OuK8Q"    
        style={{ width: "150px" }}
      />
      <p>Задачу выполнил для Genesix: Жолдошев М.</p>
    </Layout>
  );
};
export default About;
