import PropTypes from "prop-types";

import styles from "./index.module.css";

export default function Logo({ src, alt }) {
  return <img className={styles.logo} src={src} alt={alt} />;
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
