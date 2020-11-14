import PropTypes from "prop-types";

import styles from "./index.module.css";

export default function Section({ children, title }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.any.isRequired,
};
