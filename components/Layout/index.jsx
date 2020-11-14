import PropTypes from "prop-types";

import styles from "./index.module.css";

import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};
