import { useId } from "react";
import { Input } from "../../components/Input/Input";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

export const RegisterCompany = () => {
  const id = useId();

  return (
    <div className={styles.contenedorRegistro}>
      <div className={styles.contenedorTitulo}>
        <h1>Registro - Empresa</h1>
      </div>

      <div className={styles.contenedorParrafo}>
        <p>
        ¡Bienvenido! Ingresa y publica gratis tu convocatoria de prácticas.
        </p>
      </div>

      <form className={styles.formRegistro}>
        <div className={styles.contenedorInput}>
          <Input
            label="Nombres"
            type="text"
            placeholder="Ingrese sus nombres"
            className=""
            name={`${id}-nombres`}
            id={`${id}-nombres`}
          />
        </div>

        <div className={styles.contenedorInput}>
          <Input
            label="Apellidos"
            type="text"
            placeholder="Ingrese sus apellidos"
            className=""
            name={`${id}-apellidos`}
            id={`${id}-apellidos`}
          />
        </div>

        <div className={styles.contenedorInput}>
          <Input
            label="Correo"
            type="email"
            placeholder="Tucorreo@ejemplo.com"
            className=""
            name={`${id}-correo`}
            id={`${id}-correo`}
          />
        </div>

        <div className={styles.contenedorInput}>
          <Input
            label="RUC"
            type="text"
            placeholder="12345678901"
            className=""
            name={`${id}-ruc`}
            id={`${id}-ruc`}
          />
        </div>

        <div className={styles.contenedorInput}>
          <Input
            label="Teléfono"
            type="text"
            placeholder="987654321"
            className=""
            name={`${id}-telefono`}
            id={`${id}-telefono`}
          />
        </div>

        <div className={styles.contenedorInput}>
          <Input
            label="Contraseña"
            type="password"
            placeholder="Ingrese su contraseña"
            className=""
            name={`${id}-password`}
            id={`${id}-password`}
          />
        </div>

        <div className={styles.contenedorInput}>
          <Input
            label="Repetir contraseña"
            type="password"
            placeholder="Repita su contraseña"
            className=""
            name={`${id}-rep-password`}
            id={`${id}-rep-password`}
          />
        </div>

        <div className={styles.contenedorBoton}>
          <button className="btn btn-danger">Registrarse</button>
        </div>
      </form>

      <div>
        <p>¿Ya tiene una cuenta? </p>
        <Link to={"/login-empresa"}>Inicia Sesión aquí</Link>
      </div>
    </div>
  );
};
