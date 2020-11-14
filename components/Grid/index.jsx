import PropTypes from "prop-types";

import styles from "./index.module.css";

export default function Grid({ children }) {
  return <div className={styles.grid}>{children}</div>;
}

Grid.propTypes = { children: PropTypes.any.isRequired };
