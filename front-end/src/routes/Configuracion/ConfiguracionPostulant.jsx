import { CareerCard } from "../../components/CareerCard/CareerCard";
import styles from "./Configuracion.module.css";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useId } from "react";
import { IoIosSave } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";
import { TiUserDelete } from "react-icons/ti";
import { GrDocumentUpload } from "react-icons/gr";
export const ConfiguracionPostulant = () => {
  const id = useId();
  return (
    <div className={styles.contenedorHome}>
      <div className={styles.contenedorTitulo1}>
        <h2 className={styles.titulo2}>Datos del Postulante</h2>
      </div>
      <form className={styles.Tabladatos}>
        <table className="table">
          <tbody>
            <tr>
              <td>Nombre y apellidos:</td>
              <td>
                <input
                  type="text"
                  id="${id}-nombres"
                  className="form-control input-name1"
                  placeholder="Nombre"
                />
              </td>
            </tr>
            <tr>
              <td>DNI:</td>
              <td>
                <input
                  type="text"
                  id="${id}-dni"
                  class="form-control input-dni"
                  placeholder="78459612"
                />
              </td>
            </tr>
            <tr>
              <td>Domicilio:</td>
              <td>
                <input
                  type="text"
                  id="${id}-domicilio"
                  class="form-control input-domicilio"
                  placeholder="Calle Los Cedros 123, San Isidro, Lima, Perú."
                />
              </td>
            </tr>
            <tr>
              <td>Profesión:</td>
              <td>
                <input
                  type="text"
                  id="${id}-profesion"
                  class="form-control input-profesion"
                  placeholder="Ingeniero de Software"
                />
              </td>
            </tr>
            <tr>
              <td>Educación:</td>
              <td>
                <input
                  type="text"
                  id="${id}-educacion"
                  class="form-control input-educacion"
                  placeholder="Desarrollador Backend-Redata"
                />
              </td>
            </tr>
            <tr>
              <td>Intereses Profesionales:</td>
              <td>
                <input
                  type="text"
                  id="${id}-interesesprofesionales"
                  class="form-control input-intereses"
                  placeholder="----"
                />
              </td>
            </tr>
            <tr>
              <td>Proyectos pasados:</td>
              <td>
                <input
                  type="text"
                  id="${id}-proyectospasados"
                  class="form-control input-proyectos"
                  placeholder="Como ingeniero de software, me apasiona el desarrollo de tecnología, la resolución de problemas y la innovación en el campo de la informática."
                />
              </td>
            </tr>
            <tr>
              <td>Certificaciones:</td>
              <td>
                <input
                  type="text"
                  id="${id}-certificaciones"
                  class="form-control input-certificados"
                  placeholder="Desarrollo app movistar"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className={`btn ${styles.btnConfi1}`}>
          <IoIosSave />
          Guardar
        </button>
      </form>
      <form className={`container ${styles.contenedorCam}`}>
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
              <button className={`btn ${styles.btnConfi}`}>
                <BsPencilSquare />
                Modificar
              </button>
            </div>
          </div>
        </div>
      </form>
      <form className={`container ${styles.contenedorCam}`}>
        <div className={styles.contenedorTitulo1}>
          <h3 className={styles.titulo1}>Subir Curriculum</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.checkboxContent}>
            <p>
              Usted Ingresa su curriculum con el que podrá ser presentado a las
              empresas
            </p>
            <div className={styles.btnContainer}>
              <label htmlFor="${id}-file" className={`btn ${styles.btnConfi}`}>
              <GrDocumentUpload />
                Subir CV
                <input type="file" id="${id}-file" />
              </label>
            </div>
          </div>
        </div>
      </form>
      <form className={`container ${styles.contenedorCam}`}>
        <div className={styles.contenedorTitulo1}>
          <h3 className={styles.titulo1}>Eliminar cuenta</h3>
        </div>
        <div className={styles.content}>
          <div className={styles.checkboxContent}>
            <p>
              <input type="checkbox" id="${id}-eliminar"/>
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
              <button className={`btn ${styles.btnConfi}`}>
                <TiUserDelete />
                Eliminar cuenta
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
