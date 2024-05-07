import { FaSearch } from "react-icons/fa";
import { Input } from "../Input/Input";
import styles from "./JobOfferSearch.module.css";
import { useId } from "react";

export const JobOfferSearch = () => {

  const id = useId();

  return (
    <form className={styles.formulario}>
      <div className={styles.contenedorInput}>
        <Input
          label={null}
          type="text"
          placeholder="Ingresa tu Carrera"
          classInput="inputCarrera anchoTotal"
          name={`${id}-input-busqueda`}
          id={`${id}-input-busqueda`}
          onChange={``}
        />
      </div>

      <div className={styles.contenedorSelect}>
        <select
          name={`${id}-select-lugar`}
          id={`${id}-select-lugar`}
          className={`anchoTotal ${styles.inputLugar}`}
          onChange={``}
        >
          <option value="">Lugar</option>
          <option value="Lima">Lima</option>
          <option value="Ica">Ica</option>
          <option value="Huancayo">Huancayo</option>
          <option value="Puno">Puno</option>
          <option value="Cusco">Cusco</option>
        </select>
      </div>

      <div className={styles.contenedorBoton}>
        <FaSearch />
      </div>
    </form>
  );
};
