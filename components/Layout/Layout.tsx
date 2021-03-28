import Link from "next/link";
import { useState } from "react";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <a>
                <b>Logo</b>
              </a>
            </Link>
          </div>
          <div className={`${styles.menu} ${active ? styles.menuActive : ""}`}>
            <Link href={"/"}>
              <a>Home</a>
            </Link>

            <Link href={"/articles"}>
              <a>Articles</a>
            </Link>

            <Link href={"/about"}>
              <a>About</a>
            </Link>
          </div>
          <div
            className={`${styles.burger} ${active ? styles.activeBurger : ""}`}
            onClick={() => {
              console.log(active);
              setActive((a) => !a);
            }}
          ></div>
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
