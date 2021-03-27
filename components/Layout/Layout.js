import Link from "next/link";
import styles from "./Layout.module.scss";
const Layout = ({ children }) => {
  return (
    <>
      <nav className={styles.nav}>
        <div>
          <div className={styles.logo}>
            <Link href={"/"}>
              <a>
                <b>Logo</b>
              </a>
            </Link>
          </div>
          <ul>
            <li>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/articles"}>
                <a>Articles</a>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <a>About</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
