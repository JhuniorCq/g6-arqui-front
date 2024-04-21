import { NavLink } from "react-router-dom";
import './Dropdown.css';

export const Dropdown = ({ datosDropdown }) => {

  const { nombre, opcion1, opcion2, ruta1, ruta2 } = datosDropdown;

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
      </ul>
    </div>
  );
};
