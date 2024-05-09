import { CareerCard } from "../../components/CareerCard/CareerCard";
import { Input } from "../../components/Input/Input";
import styles from "./Home.module.css";
import imgIngSoftware from "/img/ingenieria-software.jpg";
import imgContabilidad from "/img/contabilidad.jpg";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useId } from "react";
import { JobOfferSearch } from "../../components/JobOfferSearch/JobOfferSearch";

export const Home = () => {
  const id = useId();
  const navigate = useNavigate();

  const { state, setState, manejarCambiosForm } = useForm({
    [`${id}-input-busqueda`]: "",
    [`${id}-select-lugar`]: "",
  });

  const enviarForm = (event) => {
    event.preventDefault();
    // Ya tengo la info del INPUT y del SELECT, faltaría enviarlo al BACK -> Este debe devolver un ARRAY de OBJETOS (OFERTAS DE EMPLEO)
    console.log(state);

    // A través de este NAVIGATE le paso el ESTADO del INPUT de BUSQUEDA al Componente que renderiza la RUTA "/ofertas-empleo"
    navigate("/ofertas-empleo", {
      state: {
        stateBusqueda: state,
        idBusqueda: `${id}-input-busqueda`
      },
    });
  };

  return (
    <div className={styles.contenedorHome}>
      <div className={styles.contenedorTitulo}>
        <h1 className={styles.titulo}>
          Convocatorias 2024 de Prácticas en Perú
        </h1>
      </div>

      <div className={styles.contenedorParrafo}>
        <p className={styles.parrafo}>
          Encuentra en un solo lugar convocatorias para practicantes
          PreProfesionales y Profesionales
        </p>
      </div>

      {/* Acá tal vez pueda usar el Componente JobOfferSearch */}
      <div className={`${styles.contenedorBuscador} anchoTotal`}>
        <JobOfferSearch
          idPrefijo={id}
          enviarForm={enviarForm}
          manejarCambiosForm={manejarCambiosForm}
        />
      </div>

      {/* <form className={styles.formulario} onSubmit={enviarForm}>
        <div className={styles.contenedorInput}>
          <Input
            label={null}
            type="text"
            placeholder="Ingresa tu Carrera"
            classInput="inputCarrera anchoTotal"
            name={`${id}-input-busqueda`}
            id={`${id}-input-busqueda`}
            onChange={manejarCambiosForm}
          />
        </div>

        <div className={styles.contenedorSelect}>
          <select
            name={`${id}-select-lugar`}
            id={`${id}-select-lugar`}
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
          <button
            className={`btn btn-danger anchoTotal ${styles.btnBuscar}`}
          >
            Buscar Prácticas
          </button>
        </div>
      </form> */}

      <div className={styles.contenedorCarreras}>
        <CareerCard rutaImg={imgIngSoftware} carrera="Ingeniería de Software" />
        <CareerCard rutaImg={imgContabilidad} carrera="Contabilidad" />
        <CareerCard rutaImg={imgIngSoftware} carrera="Ingeniería de Software" />
        <CareerCard rutaImg={imgContabilidad} carrera="Contabilidad" />
        <CareerCard rutaImg={imgIngSoftware} carrera="Ingeniería de Software" />
        <CareerCard rutaImg={imgContabilidad} carrera="Contabilidad" />
      </div>
    </div>
  );
};
