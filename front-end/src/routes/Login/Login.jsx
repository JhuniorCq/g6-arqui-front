import { Link, Navigate, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import { useForm } from "../../hooks/useForm";
import { usePost } from "../../hooks/usePost";
import styles from "./Login.module.css";
import { useContext, useEffect, useId } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { Loader } from "../../components/Loader/Loader";
import axios from "axios";

export const Login = ({ titulo, typeUser }) => {

  const id = useId();
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const { user, login, logout } = authContext;

  const { manejarCambiosForm, state } = useForm({
    [`${id}-correo`]: "",
    [`${id}-password`]: "",
  });

  // const URL = typeUser === "postulante" ? '': 'https://practicasya-api.onrender.com/api/public/login';
  const URL_LOGIN = 'https://practicasya-api.onrender.com/api/public/login';

  const { axiosPost, statePost, setStatePost } = usePost(URL); // Acá le paso como parámetro una URL del back
  const { responsePost, loadingPost, errorPost } = statePost;

  const enviarForm = async (event) => {
    event.preventDefault();

    //Actualizo el ESTADO de la solicitud POST para que el "loading" ahora sea "true" -> Con esto se RE-RENDERIZA el Componente y se mostrará el LOADER en este Componente -> Luego de recibir la respuesta el LOADER se va y el sistema nos mandará a la siguiente vista
    setStatePost({
      ...statePost,
      loadingPost: true, //Si pongo esto a false, ya no se mostrará el Cargando indefinidamente
    });

    //Llamo a axiosPost para enviar los datos al back / Como axiosPost está comentado se mostrará "Cargando..." indefinidamente
        // Dato: el username "admin" con password "admin" es un Usuario por Defecto que tiene acceso a todas las funcionalidades
    axiosPost(URL_LOGIN, {
      username: "admin",
      password: "admin"
    });
    // console.log(statePost)
    //CREO que esta Función Login irá dentro del useEffect
    // Si las credenciales son válidas -> llamamos a la Función "login" del Contexto Auth y le pasamos como argumento a "responsePost" -> login(responsePost)
    
  };

  // useEffect para el ESTADO -> statePost
  useEffect(() => {
    const { responsePost } = statePost;
    console.log(responsePost)

    if(responsePost) login(responsePost, true);

  }, [statePost]);

  // useEffecr para el ESTADO -> user
  useEffect(() => {
    if(user.isExisting) {
      console.log("Este usuario existe", user)
      // alert("Inicio de Sesión Exitoso");
      user.roles.includes("APPLICANT") ? navigate("/"): user.roles.includes("COMPANY") ? navigate("/publicar-ofertas"): alert("Ha ocurrido un ERROR");
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
            classLabel="labelRegistro"
            type="email"
            placeholder="Tucorreo@ejemplo.com"
            classInput="inputRegistro"
            name={`${id}-correo`}
            id={`${id}-correo`}
            onChange={manejarCambiosForm}
          />
        </div>

        <div className={styles.contenedorInput}>
          <Input
            label="Contraseña"
            classLabel="labelRegistro"
            type="password"
            placeholder="Contraseña"
            classInput="inputRegistro"
            name={`${id}-password`}
            id={`${id}-password`}
            onChange={manejarCambiosForm}
          />
        </div>

        <div className={styles.contenedorBoton}>
          <button className={`btn btn-danger ${styles.botonIngresar}`}>Ingresar</button>
        </div>

        <div>
          <a href="#" className={styles.fontSize}>Olvide mi contraseña</a>
        </div>

        <div>
          <p className={styles.fontSize}>
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
