import styles from '../styles/Estiloso.module.css';
import NavBar from './NavBar';

const Estiloso = () => (
  <div className={styles.vermelho}>
    <NavBar />
    <h1>Estilo usando CSS Módulos</h1>
  </div>
);

export default Estiloso;
