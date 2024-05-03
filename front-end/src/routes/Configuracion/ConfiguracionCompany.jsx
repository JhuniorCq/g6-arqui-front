import { CareerCard } from "../../components/CareerCard/CareerCard";
import styles from "./Configuracion.module.css";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useId } from "react";
import { IoIosSave } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";
import { TiUserDelete } from "react-icons/ti";

export const ConfiguracionCompany = () => {
  const id = useId();
  return (
    <div className={styles.contenedorHome}>
      <div className={styles.contenedorTitulo1}>
        <h2 className={styles.titulo2}> Datos de la Empresa</h2>
      </div>
      <div className={styles.Tabladatos}>
        <table className="table">
          <tbody>
            <tr>
              <td>Nombre fiscal de la empresa:</td>
              <td>
                <input
                  type="text"
                  id="${id}-nombreEmpre"
                  className="form-control input-name1"
                  placeholder="Empresita"
                />
              </td>
            </tr>
            <tr>
              <td>RUC:</td>
              <td>
                <input
                  type="text"
                  id="${id}-ruc"
                  class="form-control input-dni"
                  placeholder="20114023303"
                />
              </td>
            </tr>
            <tr>
              <td>Direccion completa de la empresa:</td>
              <td>
                <input
                  type="text"
                  id="${id}-direccion"
                  class="form-control input-domicilio"
                  placeholder="Calle Los Cedros 123, San Isidro, Lima, Perú."
                />
              </td>
            </tr>
            <tr>
              <td>Nombre de la persona de contacto:</td>
              <td>
                <input
                  type="text"
                  id="${id}-reclutador"
                  class="form-control input-profesion"
                  placeholder="Jose Barrios"
                />
              </td>
            </tr>
            <tr>
              <td>Telefóno de persona de contacto:</td>
              <td>
                <input
                  type="text"
                  id="${id}-numReclutador"
                  class="form-control input-educacion"
                  placeholder="957846315"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className={`${styles.btnConfi1}`}>
          <IoIosSave />
          Guardar
        </button>
      </div>

      <div className={`container ${styles.contenedorCam}`}>
        <div className={styles.contenedorTitulo1}>
          <h3 className={styles.titulo1}>Modificar e-mail y clave</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.checkboxContent}>
            <p>
              Estás registrado con el e-mail{" "}
              <input
                type="text"
                id="${id}-email"
                class="form-control"
                placeholder="josebarrios@gmail.com"
              />
              A este e-mail te enviaremos las notificaciones sobre nuestros
              avisos y postulaciones
            </p>
            <div className={styles.btnContainer}>
              <button className={`${styles.btnConfi}`}>
                <BsPencilSquare />
                Modificar
              </button>
            </div>
          </div>
        </div>

        <div className={styles.contenedorTitulo1}>
          <h3 className={styles.titulo1}>Eliminar cuenta</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.checkboxContent}>
            <p>
              <input type="checkbox" />
              Eliminar cuenta <br /> Esta opción hace que tu cuenta{" "}
              <input
                type="text"
                id="${id}-email"
                className="form-control"
                placeholder="josebarrios@gmail.com"
              />{" "}
              se elimine de manera definitiva junto con toda tu actividad en
              Computrabajo y todos los servicios contratados hasta la fecha.
            </p>
            <div className={styles.btnContainer}>
              <button className={`${styles.btnConfi}`}>
                <TiUserDelete />
                Eliminar cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
