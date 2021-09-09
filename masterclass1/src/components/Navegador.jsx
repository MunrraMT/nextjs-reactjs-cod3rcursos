/* eslint-disable @next/next/link-passhref */

import Link from 'next/link';

import styles from '../styles/Navegador.module.css';

const Navegador = ({ destino, texto }) => (
  <Link href={destino}>
    <span className={styles.a}>{texto}</span>
  </Link>
);

export default Navegador;
