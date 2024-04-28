import { Link } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";
import styles from "./Navbar.module.css";
import { NavbarNoLogin } from "./NavbarNoLogin";
import { NavbarPostulant } from "./NavbarPostulant";
import { NavbarCompanny } from "./NavbarCompany";

export const Navbar = ({ usuario }) => {
  return usuario === null ? (
    <NavbarNoLogin />
  ) : usuario === "postulante" ? (
    <NavbarPostulant />
  ) : (
    <NavbarCompanny />
  );


  // <header className={styles.header}>
  //   <nav>
  //     <ul className={styles.lista}>
  //       <li>
  //         <Link to="/" className={styles.enlace}>Logo</Link>
  //       </li>
  //       <li>
  //         <Dropdown
  //           datosDropdown={{
  //             nombre: "Registrarse",
  //             opcion1: "Postulante",
  //             opcion2: "Empresa",
  //             ruta1: "/registro-postulante",
  //             ruta2: "/registro-empresa",
  //           }}
  //         />
  //       </li>
  //       <li>
  //         <Dropdown
  //           datosDropdown={{
  //             nombre: "Iniciar Sesión",
  //             opcion1: "Postulante",
  //             opcion2: "Empresa",
  //             ruta1: "/login-postulante",
  //             ruta2: "/login-empresa",
  //           }}
  //         />
  //       </li>
  //     </ul>
  //   </nav>
  // </header>
};
