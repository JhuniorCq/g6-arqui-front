import { useId } from "react";
import { Input } from "../../components/Input/Input";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

export const RegisterPostulant = () => {
  const id = useId();

  return (
    <div className={styles.contenedorRegistro}>
      <div className={styles.contenedorTitulo}>
        <h1>Registro - Postulante</h1>
      </div>

      <div className={styles.contenedorParrafo}>
        <p>
          ¡Bienvenido!, regístrate y encuentra convocatorias para poder realizar
          prácticas
        </p>
      </div>

      <form className={styles.formRegistro}>
        <div className={styles.contenedorInput}>
          <Input
            label="Nombres"
            classLabel="labelRegistro"
            type="text"
            placeholder="Ingrese sus nombres"
            classInput="inputRegistro"
            name={`${id}-nombres`}
            id={`${id}-nombres`}
          />
        </div>

        <div className={styles.contenedorInput}>
          <Input
            label="Apellidos"
            classLabel="labelRegistro"
            type="text"
            placeholder="Ingrese sus apellidos"
            classInput="inputRegistro"
            name={`${id}-apellidos`}
            id={`${id}-apellidos`}
          />
        </div>

        <div className={styles.contenedorInput}>
          <Input
            label="Correo"
            classLabel="labelRegistro"
            type="email"
            placeholder="Tucorreo@ejemplo.com"
            classInput="inputRegistro"
            name={`${id}-correo`}
            id={`${id}-correo`}
          />
        </div>

        <div className={styles.contenedorInput}>
          <Input
            label="Contraseña"
            classLabel="labelRegistro"
            type="password"
            placeholder="Ingrese su contraseña"
            classInput="inputRegistro"
            name={`${id}-password`}
            id={`${id}-password`}
          />
        </div>

        <div className={styles.contenedorInput}>
          <Input
            label="Repetir contraseña"
            classLabel="labelRegistro"
            type="password"
            placeholder="Repita su contraseña"
            classInput="inputRegistro"
            name={`${id}-rep-password`}
            id={`${id}-rep-password`}
          />
        </div>

        <div className={styles.contenedorBoton}>
          <button className={`btn btn-danger ${styles.botonRegistrar}`}>
            Registrarse
          </button>
        </div>

        <div className={styles.contenedorBoton}>
          <button className={`btn btn-dark ${styles.botonGoogle}`}>
            <FcGoogle />
            Continuar con Google
          </button>
        </div>
      </form>

      <div className={styles.contenedorTextoBajo}>
        <p>¿Ya tiene una cuenta? </p>
        <Link to={"/login-postulante"}>Inicia Sesión aquí</Link>
      </div>
    </div>
  );
};

// TENER CUIDADO CON LOS ESTILOS -> Como React crea SPA's, cuando creo un className para usarlo en un Componente, y luego en otro Componente creo un className del mismo nombre, al final los Estilos de estos 2 className se van a FUSIONAR

//ERA PROBLEMA del USO de CSS GLOBAL -> Se debe usar CSS Modules -> NombreComponente.module.css
