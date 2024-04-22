import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import styles from "./Login.module.css";

export const Login = ({ titulo, tipo }) => {
  return (
    <div className={styles.contenedorLogin}>
      <div className={styles.contenedorTitulo}>
        <h1>{titulo}</h1>
      </div>
      <form className={styles.formLogin}>
        {/* <div className={styles.contenedorInputs}>
          
        </div> */}
        <div className={styles.contenedorInput}>
          <Input
            label="Correo"
            type="text"
            placeholder="Tucorreo@ejemplo.com"
            className="inputRegistro"
            id="inputCorreo"
          />
        </div>

        <div className={styles.contenedorInput}>
          <Input
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            className="inputRegistro"
            id="inputContra"
          />
        </div>

        <div className={styles.contenedorBoton}>
          <button className="btn btn-danger">Ingresar</button>
        </div>

        <div>
          {/* Por ahora será un <a>, luego será <Link /> */}
          <a href="#">Olvide mi contraseña</a>
        </div>

        <div>
          <p>
            ¿No estás registrado?,{" "}
            <Link
              to={
                tipo === "postulante"
                  ? "/registro-postulante"
                  : "/registro-empresa"
              }
            >
              Registrate aquí
            </Link>
          </p>
        </div>

        <div className="contenedor-inputs"></div>
      </form>
    </div>
  );
};
