import styles from '../styles/NavBar.module.css';

import Link from 'next/link';

const NavBar = () => (
  <nav className={styles.nav}>
    <Link href="/">Home</Link>
    <Link href="/estiloso">Estiloso</Link>
    <Link href="/jsx">JSX</Link>
    <Link href="/exemplo">Exemplo</Link>
  </nav>
);

export default NavBar;
