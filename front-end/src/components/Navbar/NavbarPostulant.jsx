import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Dropdown } from "../Dropdown/Dropdown";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useContext, useId, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useForm } from "../../hooks/useForm";
import { Input } from "../Input/Input";
export const NavbarPostulant = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const id = useId();
  const navigate= useNavigate();
  //Funcion para validar que el input de busqueda tenga un texto (probando la funcion)
  const { manejarCambiosForm, state } = useForm({
    [`${id}-busqueda`]: "hh",
  });
  const mifuncion = (event) => {
    event.preventDefault();
    console.log(state);
    const valorBusqueda= state[`${id}-busqueda`]
    valorBusqueda? navigate("/ofertas-empleo"):alert("Ingrese una busqueda ps sonso")
  };
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
            <div className="busque">
              <form onSubmit={mifuncion} className="contenedor-input1">
                //Es el className para el input className=
                {`${styles.inputCarrera1} ${styles.anchoTotal1}`}
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
                <button>
                  <FaSearch />
                </button>
                {/* <Link onClick={mifuncion} to="/" className={styles.iconoBoton}></Link> */}
              </form>
              <div className="contenedor-select1">
                <select
                  name=""
                  id="input-lugar1"
                  className="input-lugar1 ancho-total2"
                >
                  <option value="">Lugar</option>
                  <option value="">Lima</option>
                  <option value="">Ica</option>
                  <option value="">Huancayo</option>

                  <option value="">Puno</option>
                  <option value="">Cusco</option>
                </select>
              </div>
            </div>
          </li>
          <li className="derecha">
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
            <Dropdown
              className="derecha"
              userOptions={true}
              nombre={user.name}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
