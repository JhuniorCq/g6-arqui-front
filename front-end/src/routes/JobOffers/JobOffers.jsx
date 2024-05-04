import { CareerCard } from "../../components/CareerCard/CareerCard";
import { JobOfferCard } from "../../components/JobOfferCard/JobOfferCard";
import { PiSealCheckFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import styles from "./JobOffers.module.css";
import { BsDatabaseExclamation } from "react-icons/bs";
// El logo deberá ser el valor de una Propiedad de los Objetos del Array de Ofertas de Empleo que traiga del back
import logoEmpresa from "/img/logo-empresa.png";
import { useEffect, useState } from "react";

export const JobOffers = () => {

  const ofertasTrabajoEjemplo = [
    {
      id: 1,
      urgenciaOferta: "Se precisa urgente",
      tituloOferta: "Practicante profesional en las carrera de Sistemas o Ingeniería de Software",
      nombreEmpresa: "Administración de Servicios red data SAC",
      calificacion: "4.1",
      cantPostulaciones: 33,
      ubicacion: "Lince, Lima",
      tiempoExistenciaOferta: "Hace 7 días",
      // Estas 2 últimas propiedades se mostrarán en los Detalles de la OFERTA y NO en el CARD
      logoEmpresa: "Acá puede ir la Ruta al logo",
      mensajeOferta: "Mensajeeeeeeeeeeeee Unoooooooooooooo"
    },
    {
      id: 2,
      urgenciaOferta: "Se precisa urgente",
      tituloOferta: "Practicante de Desarrollo Front-End",
      nombreEmpresa: "La Calera S.A.C.",
      calificacion: "3.5",
      cantPostulaciones: 19,
      ubicacion: "Miraflores, Lima",
      tiempoExistenciaOferta: "Hace 1 mes",
      logoEmpresa: "Acá puede ir la Ruta al logo",
      mensajeOferta: "Mensajeeeeeeeeeeeeee Dooooossss"
    },
    {
      id: 3,
      urgenciaOferta: "Se precisa urgente",
      tituloOferta: "Analista QA",
      nombreEmpresa: "ORBIS VENTURES S.A.C.",
      calificacion: "4.1",
      cantPostulaciones: 103,
      ubicacion: "Lince, Lima",
      tiempoExistenciaOferta: "Hace 3 días",
      logoEmpresa: "Acá puede ir la Ruta al logo",
      mensajeOferta: "Mensajeeeeeeeeee Treeeeeeesssssssssssssssss"
    }
  ]

  const [stateOfertaDetalle, setStateOfertaDetalle] = useState(ofertasTrabajoEjemplo[0]);

  useEffect(() => {
    console.log(stateOfertaDetalle)
  }, [stateOfertaDetalle]);

  return (
    <div className="">
      <div className={styles.contenedorFiltros}>
        <select name="" id="" className={`${styles.fontWeight400}`}>
          <option value="">Fecha</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select name="" id="" className={`${styles.fontWeight400}`}>
          <option value="">Tipo Profesional</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select name="" id="" className={`${styles.fontWeight400}`}>
          <option value="">Lugar de Trabajo</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select name="" id="" className={`${styles.fontWeight400}`}>
          <option value="">Experiencia</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select name="" id="" className={`${styles.fontWeight400}`}>
          <option value="">Salario</option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>

      <div className={styles.contenedorPrincipal}>
        {/* Primera Columna */}
        <div className={styles.contenedorOfertasEmpleo}>
          <div className={styles.contenedorNumeroOfertas}>
            <p>
              {/* Acá en vez de 432 irá el length del Array de Objetos "Ofertas Trabajo" que brinde el back */}
              <span className={styles.fontWeight}>432</span> Ofertas de trabajo
              de{" "}
              <span className={styles.fontWeight}>Ingeniería de Software</span>
            </p>
          </div>

          {
            ofertasTrabajoEjemplo.map(ofertaEmpleo => (
              <JobOfferCard
                key={ofertaEmpleo.id}
                urgenciaOferta={ofertaEmpleo.urgenciaOferta}
                tituloOferta={ofertaEmpleo.tituloOferta}
                nombreEmpresa={ofertaEmpleo.nombreEmpresa}
                calificacion={ofertaEmpleo.calificacion}
                ubicacion={ofertaEmpleo.ubicacion}
                tiempoExistenciaOferta={ofertaEmpleo.tiempoExistenciaOferta}
                onClick={() => setStateOfertaDetalle(ofertaEmpleo)}
               />
            ))
          }

        </div>
        {/* Segunda Columna */}
        {/* Si convierto todo esto en un Componente, cómo le paso los estilos, uno por uno sería feo */}
        <div className={styles.contenedorDetallesOferta}>
          <div className={`${styles.detalleOferta} ${styles.flexColumn}`}>
            <div className={`${styles.flexRow} ${styles.alignItemsCenter} ${styles.gap20px}`}>
              <h1 className={styles.fontItalic}>
                {stateOfertaDetalle.tituloOferta}
              </h1>
              <img src={logoEmpresa} alt={`Logo de ${stateOfertaDetalle.tituloOferta}`} className={styles.logoEmpresa} />
            </div>

            <div className={styles.segundaFila}>
              <p>
                <span
                  className={`${styles.calificacion} ${styles.fontWeight400}`}
                >
                  {stateOfertaDetalle.calificacion}
                </span>
                <FaStar style={{ color: "yellow" }} />
              </p>
              <p>
                <span className={styles.nombreEmpresa}>
                  {stateOfertaDetalle.nombreEmpresa}
                </span>
                <PiSealCheckFill style={{ color: "blue" }} />
              </p>
            </div>

            <p className={styles.fontWeight400}>{stateOfertaDetalle.cantPostulaciones} Postulaciones</p>

            <p className={styles.fontWeight}>{stateOfertaDetalle.ubicacion}</p>

            <p>{stateOfertaDetalle.tiempoExistenciaOferta}</p>

            <div className={styles.cajaBoton}>
              <button className={`btn btn-success ${styles.botonPostular}`}>Postularme</button>
            </div>
            <hr />

            <div>
              <p>
                {stateOfertaDetalle.mensajeOferta}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
