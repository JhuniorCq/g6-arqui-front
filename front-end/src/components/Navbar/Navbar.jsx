import { NavLink, Link } from "react-router-dom";
import { Dropdown } from "../Dropdown/Dropdown";
import "./Navbar.css";

export const Navbar = () => {
  return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Logo</Link>
            </li>
            <li>
              <Dropdown
                datosDropdown={{
                  nombre: "Registrarse",
                  opcion1: "Postulante",
                  opcion2: "Empresa",
                  ruta1: "/registro-postulante",
                  ruta2: "/registro-empresa",
                }}
              />
            </li>
            <li>
              <Dropdown
                datosDropdown={{
                  nombre: "Iniciar Sesión",
                  opcion1: "Postulante",
                  opcion2: "Empresa",
                  ruta1: "/inicio-postulante",
                  ruta2: "/inicio-empresa",
                }}
              />
            </li>
          </ul>
        </nav>
      </header>
  );
};
