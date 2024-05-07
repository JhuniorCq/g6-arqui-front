import { Link } from "react-router-dom";
import "./Dropdown.css";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

export const Dropdown = ({ userOptions = false, nombre, ruta1, ruta2 }) => {
  
  const authContext = useContext(AuthContext);
  const { user, login, logout } = authContext;

  return (
    <div className="dropdown">
      <button
        className="btn btn-danger dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {nombre}
      </button>
      <ul className="dropdown-menu dropdown-menu-primary">
        {userOptions ? (
          <>
            <li>
              <Link to={ user.rol.includes("APPLICANT") ? "/": "/publicar-ofertas" } className="dropdown-item">Inicio</Link>
            </li>
            <li>
              <Link to={ user.rol.includes("APPLICANT") ? "/configuracion-postulante": "/configuracion-empresa" } className="dropdown-item">Configuración</Link>
            </li>
            <li>
              <Link className="dropdown-item" onClick={logout}>Cerrar Sesión</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={ruta1} className="dropdown-item">Postulante</Link>
            </li>
            <li>
              <Link to={ruta2} className="dropdown-item">Empresa</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
