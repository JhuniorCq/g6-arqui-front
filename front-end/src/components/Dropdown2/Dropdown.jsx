import { NavLink } from "react-router-dom";
import './Dropdown.css';
import imagen from "/img/iconousuario.png";

export const Dropdown2 = ({ datosDropdown }) => {

  const { nombre, opcion1, opcion2,opcion3, ruta1, ruta2,ruta3 } = datosDropdown;

  return (
    <div className="dropdown">
      <button
        className="btn btn-custom"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
       <img src={imagen} alt="Ingeniería de Software" /> {nombre}
      </button>
      <ul className="dropdown-menu dropdown-menu-primary">
        <li>
          <NavLink
            to={ruta1}
            className={({ isActive }) =>
              isActive ? "dropdown-item activo" : "dropdown-item"
            }
          >
            {opcion1}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ruta2}
            className={({ isActive }) =>
              isActive ? "dropdown-item activo" : "dropdown-item"
            }
          >
            {opcion2}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ruta3}
            className={({ isActive }) =>
              isActive ? "dropdown-item activo" : "dropdown-item"
            }
          >
            {opcion3}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
