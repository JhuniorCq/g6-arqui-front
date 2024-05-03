import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useContext } from "react";
import styles from  "./Navbar.module.css";

export const NavbarCompany = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.lista}>
          <div className={styles.leftItems}>
            {/* De ahí cambio este ESTILO */}
            <li style={{color: "white"}}>
              <Link to="/publicar-ofertas" className={styles.enlace}>
                Logo
              </Link>
            </li>
            <li className={styles.itemNavbar}>
              <NavLink to="/publicar-ofertas" className={({ isActive }) => isActive ? `${styles.activo} ${styles.enlace}`: `${styles.enlace}`}>Publicar Oferta</NavLink>
            </li>
            <li className={styles.itemNavbar}>
              <NavLink to="/mis-publicaciones" className={({ isActive }) => isActive ? `${styles.activo} ${styles.enlace}`: `${styles.enlace}`}>Mis Publicaciones</NavLink>
            </li>
          </div>

          <div className={styles.rightItems}>
            <li>
              <Dropdown 
                userOptions={true}
                nombre={user.name}
              />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};
