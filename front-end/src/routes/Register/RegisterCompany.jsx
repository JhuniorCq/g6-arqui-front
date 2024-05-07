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
            label="Nombre de la Empresa"
            classLabel="labelRegistro"
            type="text"
            placeholder="Empresa S.A.C."
            classInput="inputRegistro"
            name={`${id}-nombre-empresa`}
            id={`${id}-nombre-empresa`}
          />
        </div>

        <div className={styles.contenedorInput}>
          <Input
            label="RUC"
            classLabel="labelRegistro"
            type="text"
            placeholder="12345678901"
            classInput="inputRegistro"
            name={`${id}-ruc`}
            id={`${id}-ruc`}
          />
        </div>

        <div className={styles.contenedorInput}>
          <Input
            label="Teléfono"
            classLabel="labelRegistro"
            type="text"
            placeholder="987654321"
            classInput="inputRegistro"
            name={`${id}-telefono`}
            id={`${id}-telefono`}
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
          <button className={`btn btn-danger ${styles.botonRegistrar}`}>Registrarse</button>
        </div>
      </form>

      <div className={styles.contenedorTextoBajo}>
        <p>¿Ya tiene una cuenta? </p>
        <Link to={"/login-empresa"}>Inicia Sesión aquí</Link>
      </div>
    </div>
  );
};
