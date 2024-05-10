import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Dropdown } from "../Dropdown/Dropdown";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useContext, useId } from "react";
import { FaSearch } from "react-icons/fa";
import { useForm } from "../../hooks/useForm";
import { Input } from "../Input/Input";
import { JobOfferSearch } from "../JobOfferSearch/JobOfferSearch";

export const NavbarPostulant = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const id = useId();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  //Funcion para validar que el input de busqueda tenga un texto (probando la funcion)
  const { manejarCambiosForm, state } = useForm({
    [`${id}-input-busqueda`]: "",
    [`${id}-select-lugar`]: "",
  });

  const enviarForm = (event) => {
    event.preventDefault();
    console.log(state);

    navigate("/ofertas-empleo", {
      state: {
        stateBusqueda: state,
        idBusqueda: `${id}-input-busqueda`
      },
    });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.lista}>
          <div className={styles.leftItems}>
            <li>
              <Link to="/" className={styles.enlace}>
                Logo
              </Link>
            </li>
          </div>

          {pathname === "/" ? null : (
            <div className={styles.centerItems}>
              <li className="anchoTotal">
                <form onSubmit={enviarForm} className={styles.formulario}>
                  <div className={styles.contenedorInput}>
                    <Input
                      type="text"
                      placeholder="Ingresa tu carrera"
                      classInput={`anchoTotal ${styles.inputCarrera}`}
                      name={`${id}-input-busqueda`}
                      id={`${id}-input-busqueda`}
                      onChange={manejarCambiosForm}
                    />
                  </div>

                  <div className={styles.contenedorSelect}>
                    <select
                      name={`${id}-select`}
                      id={`${id}-select`}
                      className={`anchoTotal ${styles.inputLugar}`}
                    >
                      <option value="">Lugar</option>
                      <option value="">Lima</option>
                      <option value="">Ica</option>
                      <option value="">Huancayo</option>
                      <option value="">Puno</option>
                      <option value="">Cusco</option>
                    </select>
                  </div>

                  <div className={styles.contenedorBoton}>
                    <button
                      className={`btn btn-danger anchoTotal ${styles.botonBuscar}`}
                    >
                      Buscar
                      <FaSearch />
                    </button>
                  </div>
                </form>
              </li>
            </div>
          )}

          <div className={styles.rightItems}>
            <li>
              <NavLink
                to="/ofertas-empleo"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.activo} ${styles.enlace}`
                    : `${styles.enlace}`
                }
              >
                Ofertas de Empleo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mis-postulaciones"
                className={({ isActive }) =>
                  isActive
                    ? `${styles.activo} ${styles.enlace}`
                    : `${styles.enlace}`
                }
              >
                Mis Postulaciones
              </NavLink>
            </li>
            <li>
              <Dropdown userOptions={true} nombre={user.username} />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};
