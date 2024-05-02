import { CareerCard } from "../../components/CareerCard/CareerCard";
import styles from "./Configuracion.module.css";
import { AuthContext } from "../../context/Auth/AuthContext";
import { useId } from "react";
export const ConfiguracionPostulant = () => {
  const id = useId();
  return (
    <div className={styles.contenedorHome}>
      <div className={styles.contenedorTitulo1}>
        <h2 className={styles.titulo2}>Datos del Postulante</h2>
      </div>
      <div className={styles.Tabladatos}>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-floppy"
            viewBox="0 0 16 16"
          >
            <path d="M11 2H9v3h2z" />
            <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
          </svg>
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
              <button className={`btn ${styles.btnConfi}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
                Modificar
              </button>
            </div>
          </div>
        </div>

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
              <button className={`btn ${styles.btnConfi}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-file-earmark-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z" />
                </svg>
                Subir CV
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
              <button className={`btn ${styles.btnConfi}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-dash"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                </svg>
                Eliminar cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
