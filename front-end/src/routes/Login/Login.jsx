import { Link, Navigate, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import { useForm } from "../../hooks/useForm";
import { usePost } from "../../hooks/usePost";
import styles from "./Login.module.css";
import { useContext, useId } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";

export const Login = ({ titulo, typeUser }) => {

  const id = useId();
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const { user, login, logout } = authContext;

  const { manejarCambiosForm, state } = useForm({
    [`${id}-correo`]: "",
    [`${id}-password`]: "",
  });

  const URL = typeUser === "postulante" ? '': '';

  const { axiosPost, statePost, setStatePost } = usePost(URL); // Acá le paso como parámetro una URL del back
  const { responsePost, loading, error } = statePost;

  const enviarForm = (event) => {
    event.preventDefault();

    //Actualizo el ESTADO de la solicitud POST para que el "loading" ahora sea "true"
    setStatePost({
      ...statePost,
      loading: false, //Si pongo esto a false, ya no se mostrará el Cargando indefinidamente
    });

    //Llamo a axiosPost para enviar los datos al back / Como axiosPost está comentado se mostrará "Cargando..." indefinidamente
    // axiosPost({});

    // Si las credenciales son válidas -> llamamos a la Función "login" del Contexto Auth
    alert("Inicio de Sesión Exitoso");
    login();

    // Con eso lo redireccionamos al "Home" si es Postulante o al "PublicarOfertas" si es Empresa, pero ya con credenciales de Usuario
    user.rol.includes("postulant") ? navigate("/"): navigate("/publicar-ofertas"); 
  };

  return loading ? (
    <p>Cargando ...</p>
  ) : (
    <div className={styles.contenedorLogin}>
      <div className={styles.contenedorTitulo}>
        <h1>{titulo}</h1>
      </div>
      <form className={styles.formLogin} onSubmit={enviarForm}>
        <div className={styles.contenedorInput}>
          <Input
            label="Correo"
            type="email"
            placeholder="Tucorreo@ejemplo.com"
            className="inputRegistro"
            name={`${id}-correo`}
            id={`${id}-correo`}
            onChange={manejarCambiosForm}
          />
        </div>

        <div className={styles.contenedorInput}>
          <Input
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            className="inputRegistro"
            name={`${id}-password`}
            id={`${id}-password`}
            onChange={manejarCambiosForm}
          />
        </div>

        <div className={styles.contenedorBoton}>
          <button className="btn btn-danger">Ingresar</button>
        </div>

        <div>
          <a href="#">Olvide mi contraseña</a>
        </div>

        <div>
          <p>
            ¿No estás registrado?,{" "}
            <Link
              to={
                typeUser === "postulante"
                  ? "/registro-postulante"
                  : "/registro-empresa"
              }
            >
              Registrate aquí
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
