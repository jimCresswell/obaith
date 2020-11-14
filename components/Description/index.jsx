import PropTypes from "prop-types";

import styles from "./index.module.css";

export default function Description({ children }) {
  return <p className={styles.description}>{children}</p>;
}

Description.propTypes = {
  children: PropTypes.any.isRequired,
};
