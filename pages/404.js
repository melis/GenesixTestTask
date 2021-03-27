import Link from "next/link";
import Layout from "../components/Layout/Layout";

const ErrorPage = () => {
  return (
    <Layout>
      <h2>Error page</h2>
      Press
      <Link href="/">
        <a style={{ color: "blue" }}> home </a>
      </Link>
      to back
    </Layout>
  );
};

export default ErrorPage;
