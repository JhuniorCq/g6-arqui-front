import styles from "./JobOfferCard.module.css";
import { HiDotsVertical } from "react-icons/hi";
import { PiSealCheckFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

export const JobOfferCard = ({ urgenciaOferta, tituloOferta, nombreEmpresa, calificacion, ubicacion, tiempoExistenciaOferta, onClick }) => {
  return (
    <div className={styles.contenedorCard} onClick={onClick}>
      <div className={styles.primeraFila}>
        <p className={`${styles.textoRojo} ${styles.fontWeight400}`}>{urgenciaOferta}</p>
        <HiDotsVertical />
      </div>

      <h2 className={styles.fontItalic}>
        {tituloOferta}
      </h2>

      <div className={styles.terceraFila}>
        <p>
          <span className={`${styles.calificacion} ${styles.fontWeight400}`}>{calificacion}</span>
          <FaStar style={{ color: "yellow" }} />
        </p>
        <p>
          <span className={styles.nombreEmpresa}>{nombreEmpresa}</span>
          <PiSealCheckFill style={{ color: "blue"}} />
        </p>
      </div>

      <p className={styles.fontWeight400}>{ubicacion}</p>

      <p>{tiempoExistenciaOferta}</p>
    </div>
  );
};
