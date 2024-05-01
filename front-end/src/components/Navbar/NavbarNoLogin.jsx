import { Link } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";
import styles from  "./Navbar.module.css";

export const NavbarNoLogin = () => {
  return (
      <header className={styles.header}>
        <nav>
          <ul className={styles.lista}>
            <li>
              <Link to="/" className={styles.enlace}>Logo</Link>
            </li>
            {/* Agregue esto solo para PROBAR que la RUTA "/publicar-ofertas" está PROTEGIDA */}
            {/* <li>
              <Link to="/publicar-ofertas">Publicar Oferta</Link>
            </li> */}
            <li>
              <Dropdown
                nombre="Registrarse"
                ruta1="/registro-postulante"
                ruta2="/registro-empresa"
              />
            </li>
            <li>
              <Dropdown
                nombre="Iniciar Sesión"
                ruta1="/login-postulante"
                ruta2="/login-empresa"
              />
            </li>
          </ul>
        </nav>
      </header>
  );
};
