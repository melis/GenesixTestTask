import Link from "next/link";
import { NextPage } from "next";
import Layout from "../components/Layout/Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <h2>About text</h2>
      <p>Выполнил: Жолдошев М.</p>
    </Layout>
  );
};
export default About;
