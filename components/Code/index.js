import PropTypes from "prop-types";

import styles from "./index.module.css";

export default function Code({ children }) {
  return <code className={styles.code}>{children}</code>;
}

Code.propTypes = {
  children: PropTypes.any.isRequired,
};
