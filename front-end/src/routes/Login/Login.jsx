import { Link, Navigate, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import { useForm } from "../../hooks/useForm";
import { usePost } from "../../hooks/usePost";
import styles from "./Login.module.css";
import { useContext, useEffect, useId } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { Loader } from "../../components/Loader/Loader";

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

  const { axiosPost, statePost, setStatePost } = usePost(); // Acá le paso como parámetro una URL del back
  const { responsePost, loadingPost, errorPost } = statePost;

  const enviarForm = (event) => {
    event.preventDefault();

    //Actualizo el ESTADO de la solicitud POST para que el "loading" ahora sea "true" -> Con esto se RE-RENDERIZA el Componente y se mostrará el LOADER en este Componente -> Luego de recibir la respuesta el LOADER se va y el sistema nos mandará a la siguiente vista
    setStatePost({
      ...statePost,
      loadingPost: true, //Si pongo esto a false, ya no se mostrará el Cargando indefinidamente
    });

    //Llamo a axiosPost para enviar los datos al back / Como axiosPost está comentado se mostrará "Cargando..." indefinidamente
    // const { responsePost, loadingPost, errorPost } = axiosPost(URL, {});

    // Si las credenciales son válidas -> llamamos a la Función "login" del Contexto Auth y le pasamos como argumento a "responsePost" -> login(responsePost)
    login();
  };

  useEffect(() => {

    // Tengo que hacer que esto NO se ejecute NI BIEN INGRESO al LOGIN de EMPRESA -> Por ahora se arregla si hago ese IF
    //Es decir que por ahora se arregla si lo CONDICIONO a que se ejecute el alert y el Navigate solo cuando EXISTA un "user.id"
    // Esta condicional es para que NO se ejecute el alert y el navigate en el PRIMER RENDERIZADO del Componente "Login"
    if(user.id) { 
      alert("Inicio de Sesión Exitoso");
      user.rol.includes("postulant") ? navigate("/"): user.rol.includes("company") ? navigate("/publicar-ofertas"): alert("Ha ocurrido un ERROR");
    }
  }, [user]);

  return loadingPost ? (
    // Porque un loading acá? , si el loading debe ser desues del Inicio de Sesion, NO antes
    // Este Loading tiene sentido acá, porque cuando el LOADING cambie se hará una RE-RENDERIZACIÓN del Componente, y el Loading se mostrará
    <Loader />
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
