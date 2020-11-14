import styles from "./index.module.css";

import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>The Footer</p>
      <Logo src="/vercel.svg" alt="Vercel Logo" />
    </footer>
  );
}
