import styles from '../styles/NavBar.module.css';

import Navegador from './Navegador';

const NavBar = () => (
  <nav className={styles.nav}>
    <Navegador destino="/" texto="Home" />
    <Navegador destino="/estiloso" texto="Estiloso" />
    <Navegador destino="/jsx" texto="JSX" />
    <Navegador destino="/exemplo" texto="Exemplo" />
  </nav>
);

export default NavBar;
