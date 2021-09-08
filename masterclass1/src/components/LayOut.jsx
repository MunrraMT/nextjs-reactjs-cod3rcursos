import styles from '../styles/Layout.module.css';

import Cabecalho from './Cabecalho';
import NavBar from './NavBar';

const LayOut = ({ children, titulo }) => {
  return (
    <>
      <Cabecalho titulo={titulo} />
      <NavBar />
      <main className={styles.conteudo}>{children}</main>
    </>
  );
};

export default LayOut;
