import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Dropdown } from "../Dropdown/Dropdown";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useContext, useId } from "react";
import { FaSearch } from "react-icons/fa";
import { useForm } from "../../hooks/useForm";
import { Input } from "../Input/Input";

export const NavbarPostulant = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const id = useId();
  const navigate = useNavigate();
  
  //Funcion para validar que el input de busqueda tenga un texto (probando la funcion)
  const { manejarCambiosForm, state } = useForm({
    [`${id}-busqueda`]: "hh",
  });
  const mifuncion = (event) => {
    event.preventDefault();
    console.log(state);
    const valorBusqueda = state[`${id}-busqueda`];
    valorBusqueda
      ? navigate("/ofertas-empleo")
      : alert("Ingrese una busqueda ");
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
          {/* Para quitar el Buscador del Nav sería borrar todo el FORM */}
          <form className={styles.centerItems}>
            <li className={styles.busque}>
              <form onSubmit={mifuncion} className={styles.form}>
                {/* Es el className para el input className=
                {`${styles.inputCarrera1} ${styles.anchoTotal1}`} */}
                //No funciona
                {/* <Input 
                  type="text" 
                  placeholder="Ingresa tu carrera"
                  classInput= {styles.inputCarrera1}
                  name= {`${id}-busqueda`}
                  id= {`${id}-busqueda`}
                  onChange={manejarCambiosForm}
                  required
                />  */}
                //este funciona el otro no
                <input
                  type="text"
                  placeholder="Ingresa tu carrera"
                  name={`${id}-busqueda`}
                  id={`${id}-busqueda`}
                  className={styles.inputCarrera1}
                  onChange={manejarCambiosForm}
                />
                <button type="submit" className={styles.searchButton}>
                  <FaSearch />
                </button>
                {/* <Link onClick={mifuncion} to="/" className={styles.iconoBoton}></Link> */}
                <select
                  name={`${id}-select`}
                  id={`${id}-select`}
                  className={styles.inputLugar1}
                >
                  <option value="">Lugar</option>
                  <option value="">Lima</option>
                  <option value="">Ica</option>
                  <option value="">Huancayo</option>
                  <option value="">Puno</option>
                  <option value="">Cusco</option>
                </select>
              </form>
            </li>
          </form>

          <div className={styles.rightItems}>
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
              <Dropdown userOptions={true} nombre={user.name} />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};
