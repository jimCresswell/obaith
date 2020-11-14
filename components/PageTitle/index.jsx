import PropTypes from "prop-types";

import styles from "./index.module.css";

export default function PageTitle({ children }) {
  return <h1 className={styles.title}>{children}</h1>;
}

PageTitle.propTypes = {
  children: PropTypes.any.isRequired,
};
