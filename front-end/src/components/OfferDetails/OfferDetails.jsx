import styles from "./OfferDetails.module.css";
import { PiSealCheckFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import logoEmpresa from "/img/logo-empresa.png";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { Link } from "react-router-dom";

// Con el ID de la EMPRESA, podré hacer una petición al back para que me dé la INFO de dicha EMPRESA al dar CLICK en una EMPRESA (Nombre o Logo)
  // Creo que sería mejor hacerlo con useContext en vez de pasar el ID EMPRESA entre las "props"
export const OfferDetails = ({ tituloOferta, calificacion, nombreEmpresa, cantPostulaciones, ubicacion, tiempoExistenciaOferta, mensajeOferta, idEmpresa  }) => {

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const loginActivo = () => {
    !!user.id ? alert("Su CV ha sido enviado exitosamente."): alert("Inicie Sesión antes de realizar esta acción.");
  }

  return (
    <div className={`${styles.detalleOferta} ${styles.flexColumn}`}>
      <div
        className={`${styles.flexRow} ${styles.alignItemsCenter} ${styles.gap20px}`}
      >
        <h1 className={styles.fontItalic}>{tituloOferta}</h1>
        <Link to="/perfil-empresa">
          <img
            src={logoEmpresa}
            alt={`Logo de ${tituloOferta}`}
            className={styles.logoEmpresa}
          />
        </Link>
      </div>

      <div className={styles.segundaFila}>
        <p>
          <span className={`${styles.calificacion} ${styles.fontWeight400}`}>
            {calificacion}
          </span>
          <FaStar style={{ color: "yellow" }} />
        </p>
        <p>
          <Link to="/perfil-empresa" className={`${styles.nombreEmpresa} ${styles.enlace}`}>{nombreEmpresa}</Link>
          <PiSealCheckFill style={{ color: "blue" }} />
        </p>
      </div>

      <p className={styles.fontWeight400}>
        {cantPostulaciones} Postulaciones
      </p>

      <p className={styles.fontWeight}>{ubicacion}</p>

      <p>{tiempoExistenciaOferta}</p>

      <div className={styles.cajaBoton}>
        <button className={`btn btn-success ${styles.botonPostular}`} onClick={loginActivo}>
          Postularme
        </button>
      </div>
      <hr />

      <div>
        <p>{mensajeOferta}</p>
      </div>
    </div>
  );
};
