import PropTypes from "prop-types";

import styles from "./index.module.css";

export default function GridCard({ children, title, href }) {
  const content = (
    <>
      <h3>{title}</h3>
      {children}
    </>
  );

  const card = href ? (
    <a href={href} className={styles.card}>
      {content}
    </a>
  ) : (
    <div className={styles.card}>{content}</div>
  );

  return card;
}

GridCard.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
  href: PropTypes.string,
};
