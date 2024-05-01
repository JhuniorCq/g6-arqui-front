import { Link, NavLink } from "react-router-dom";
import styles from  "./Navbar.module.css";
import { Dropdown } from "../Dropdown/Dropdown";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useContext } from "react";

export const NavbarCompany = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.lista}>
          <li>
            <Link to="/" className={styles.enlace}>
              Logo
            </Link>
          </li>
          <li>
            <NavLink to="/publicar-ofertas" className={({ isActive }) => isActive ? `${styles.activo} ${styles.enlace}`: `${styles.enlace}`}>Publicar Oferta</NavLink>
          </li>
          <li>
            <NavLink to="/mis-publicaciones" className={({ isActive }) => isActive ? `${styles.activo} ${styles.enlace}`: `${styles.enlace}`}>Mis Publicaciones</NavLink>
          </li>
          <li>
            <Dropdown 
              userOptions={true}
              nombre={user.name}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
