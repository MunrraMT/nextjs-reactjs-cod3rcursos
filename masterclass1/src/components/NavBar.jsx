import styles from '../styles/NavBar.module.css';

import Navegador from './Navegador';

const NavBar = () => (
  <nav className={styles.nav}>
    <Navegador destino="/" texto="Home" />
    <Navegador destino="/estiloso" texto="Estiloso" />
    <Navegador destino="/jsx" texto="JSX" />
    <Navegador destino="/exemplo" texto="Exemplo" />
    <Navegador destino="/navegacao/" texto="Navegação S" />
    <Navegador destino="/cliente/sp/campinas" texto="Navegação D" />
    <Navegador destino="/estado" texto="Componente com Estado" />
    <Navegador destino="/integracao" texto="Integração" />
  </nav>
);

export default NavBar;
