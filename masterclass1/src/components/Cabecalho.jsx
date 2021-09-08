import styles from '../styles/Cabecalho.module.css';

const Cabecalho = ({ titulo }) => (
  <header>
    <h1 className={styles.titulo}>{titulo ? titulo : 'Sem título'}</h1>
  </header>
);

export default Cabecalho;
