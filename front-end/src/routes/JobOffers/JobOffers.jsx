import { JobOfferCard } from "../../components/JobOfferCard/JobOfferCard";
import styles from "./JobOffers.module.css";
// El logo deberá ser el valor de una Propiedad de los Objetos del Array de Ofertas de Empleo que traiga del back
import logoEmpresa from "/img/logo-empresa.png";
import { useEffect, useId, useState } from "react";
import { OfferDetails } from "../../components/OfferDetails/OfferDetails";
import { useLocation } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import { FaSearch } from "react-icons/fa";
import { JobOfferSearch } from "../../components/JobOfferSearch/JobOfferSearch";

export const JobOffers = () => {
  const id = useId();
  const location = useLocation();
  const { state } = location; // Esta propiedad "state" es propida del "location" -> En ella YO almacene a un Objeto de 2 propiedades
  const { idBusqueda, stateBusqueda } = state;

  // Tal vez por acá uso un "useState" para GUARDAR como estado a -> stateBusqueda[idBusqueda] -> Ya que con el Navbar Postulante la BUSQUEDA se podrá ACTUALIZAR

  // ARRAY DE OBJETOS DE LAS OFERTAS DE EMPLEO (SIMULACIÓN)
  const ofertasTrabajoEjemplo = [
    {
      id: 1,
      idEmpresa: 11,
      urgenciaOferta: "Se precisa urgente",
      tituloOferta:
        "Practicante profesional en las carrera de Sistemas o Ingeniería de Software",
      nombreEmpresa: "Administración de Servicios red data SAC",
      calificacion: "4.1",
      cantPostulaciones: 33,
      ubicacion: "Lince, Lima",
      tiempoExistenciaOferta: "Hace 7 días",
      // Estas 2 últimas propiedades se mostrarán en los Detalles de la OFERTA y NO en el CARD
      logoEmpresa: "Acá puede ir la Ruta al logo",
      mensajeOferta: "Mensajeeeeeeeeeeeee Unoooooooooooooo",
    },
    {
      id: 2,
      idEmpresa: 12,
      urgenciaOferta: "Se precisa urgente",
      tituloOferta: "Practicante de Desarrollo Front-End",
      nombreEmpresa: "La Calera S.A.C.",
      calificacion: "3.5",
      cantPostulaciones: 19,
      ubicacion: "Miraflores, Lima",
      tiempoExistenciaOferta: "Hace 1 mes",
      logoEmpresa: "Acá puede ir la Ruta al logo",
      mensajeOferta: "Mensajeeeeeeeeeeeeee Dooooossss",
    },
    {
      id: 3,
      idEmpresa: 13,
      urgenciaOferta: "Se precisa urgente",
      tituloOferta: "Analista QA",
      nombreEmpresa: "ORBIS VENTURES S.A.C.",
      calificacion: "4.7",
      cantPostulaciones: 103,
      ubicacion: "Lince, Lima",
      tiempoExistenciaOferta: "Hace 3 días",
      logoEmpresa: "Acá puede ir la Ruta al logo",
      mensajeOferta: "Mensajeeeeeeeeee Treeeeeeesssssssssssssssss",
    },
  ];

  const [stateOfertaDetalle, setStateOfertaDetalle] = useState(
    ofertasTrabajoEjemplo[0]
  );

  // Este useEffect es para probar no más
  useEffect(() => {
    console.log(stateOfertaDetalle);
  }, [stateOfertaDetalle]);

  return (
    <div className="">
      {/* Este FORM del BUSCADOR, lo puedo convertir en un Componente y reutilizarlo en el Home también */}
      <div>
        <JobOfferSearch />
      </div>

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
              <span className={styles.fontWeight}>
                {ofertasTrabajoEjemplo.length}
              </span>{" "}
              Ofertas de trabajo de{" "}
              <span className={styles.fontWeight}>
                {stateBusqueda[idBusqueda]}
              </span>
            </p>
          </div>

          {ofertasTrabajoEjemplo.map((ofertaEmpleo) => (
            <JobOfferCard
              key={ofertaEmpleo.id}
              urgenciaOferta={ofertaEmpleo.urgenciaOferta}
              tituloOferta={ofertaEmpleo.tituloOferta}
              nombreEmpresa={ofertaEmpleo.nombreEmpresa}
              calificacion={ofertaEmpleo.calificacion}
              ubicacion={ofertaEmpleo.ubicacion}
              tiempoExistenciaOferta={ofertaEmpleo.tiempoExistenciaOferta}
              setState={() => setStateOfertaDetalle(ofertaEmpleo)}
              idEmpresa={ofertaEmpleo.idEmpresa}
            />
          ))}
        </div>
        {/* Segunda Columna */}
        <div className={styles.contenedorDetallesOferta}>
          <OfferDetails
            tituloOferta={stateOfertaDetalle.tituloOferta}
            calificacion={stateOfertaDetalle.calificacion}
            nombreEmpresa={stateOfertaDetalle.nombreEmpresa}
            cantPostulaciones={stateOfertaDetalle.cantPostulaciones}
            ubicacion={stateOfertaDetalle.ubicacion}
            tiempoExistenciaOferta={stateOfertaDetalle.tiempoExistenciaOferta}
            mensajeOferta={stateOfertaDetalle.mensajeOferta}
          />
        </div>
      </div>
    </div>
  );
};
