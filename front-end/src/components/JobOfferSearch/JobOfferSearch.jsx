import { FaSearch } from "react-icons/fa";
import { Input } from "../Input/Input";
import styles from "./JobOfferSearch.module.css";
import { useId } from "react";

export const JobOfferSearch = ({ idPrefijo, enviarForm, manejarCambiosForm }) => {

  return (
    <form onSubmit={enviarForm} className={styles.formulario}>
      <div className={styles.contenedorInput}>
        <Input
          label={null}
          type="text"
          placeholder="Ingresa tu Carrera"
          classInput="inputCarrera anchoTotal"
          name={`${idPrefijo}-input-busqueda`}
          id={`${idPrefijo}-input-busqueda`}
          onChange={manejarCambiosForm}
        />
      </div>

      <div className={styles.contenedorSelect}>
        <select
          name={`${idPrefijo}-select-lugar`}
          id={`${idPrefijo}-select-lugar`}
          className={`anchoTotal ${styles.inputLugar}`}
          onChange={manejarCambiosForm}
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
        <button className={`btn btn-danger anchoTotal ${styles.btnBuscar}`}>
          Buscar Prácticas
        </button>
      </div>
    </form>
  );
};
