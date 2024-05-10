import "./MyPostulation.css";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import {  useState, useEffect } from "react";
export const Mypostulation = () => {
  const personaId = 123;
  const [postulaciones, setPostulaciones] = useState([]);

  const simulacion = () => {
    const datosDePrueba = [
      {
        id: 1,
        fecha: "2024-05-01",
        oferta: "[URGENTE] Asesor de ventas con exp. Fijo ",
        pago: "1450",
        lugar: "Lima,Lima",
        estado: "En revisión",
      },
      {
        id: 2,
        fecha: "2024-05-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "1300",
        estado: "Aceptada",
      },
      {
        id: 3,
        fecha: "2024-04-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "1200",
        estado: "Aceptada",
      },
      {
        id: 4,
        fecha: "2024-03-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "1150",
        estado: "Aceptada",
      },
      {
        id: 5,
        fecha: "2024-02-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "800",
        estado: "Aceptada",
      },
      {
        id: 6,
        fecha: "2024-01-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "3000",
        estado: "Aceptada",
      },
      {
        id: 7,
        fecha: "2024-04-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "1200",
        estado: "Aceptada",
      },
      {
        id: 8,
        fecha: "2024-03-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "1150",
        estado: "Aceptada",
      },
      {
        id: 9,
        fecha: "2024-02-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "800",
        estado: "Aceptada",
      },
      {
        id: 10,
        fecha: "2024-01-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "3000",
        estado: "Aceptada",
      },
      {
        id: 11,
        fecha: "2024-01-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "3000",
        estado: "Aceptada",
      },
      {
        id: 12,
        fecha: "2024-01-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "3000",
        estado: "Aceptada",
      },
      {
        id: 13,
        fecha: "2024-05-01",
        oferta: "[URGENTE] Asesor de ventas con exp. Fijo ",
        pago: "1450",
        lugar: "Lima,Lima",
        estado: "En revisión",
      },
      {
        id: 14,
        fecha: "2024-05-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "1300",
        estado: "Aceptada",
      },
      {
        id: 15,
        fecha: "2024-04-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "1200",
        estado: "Aceptada",
      },
      {
        id: 16,
        fecha: "2024-03-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "1150",
        estado: "Aceptada",
      },
      {
        id: 17,
        fecha: "2024-02-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "800",
        estado: "Aceptada",
      },
      {
        id: 18,
        fecha: "2024-01-02",
        oferta: "Trabaja remoto // 50 Asesores ventas call center",
        lugar: "Lima,Lima",
        pago: "3000",
        estado: "Aceptada",
      },
    ];
    return datosDePrueba.slice();
  };

  useEffect(() => {
    setPostulaciones(simulacion());
  }, [personaId]);

  return (
    <div className="contenedorHome">
      <div className="contenedorTitulo1">
        <h2>Mis Postulaciones:</h2>
      </div>
      <div className="contenedorFiltros">
        <h5 className="subTitle">Filtros:</h5>
        <select name="" id="" className="fontWeight400">
          <option value="">Fecha</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select name="" id="" className="fontWeight400">
          <option value="">Salario</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select name="" id="" className="fontWeight400">
          <option value="">Estado</option>
          <option value="">Aceptado</option>
          <option value="">Rechazado</option>
          <option value="">En revisión</option>
        </select>
        <button className="btn btnConfi1">
          <CiSearch />
          Buscar
        </button>
      </div>
      <form className="Tabladatos">
        <table className="table">
          <tbody>
            {postulaciones.map((postulacion) => (
              <tr key={postulacion.id}>
                 <td>
                  {postulacion.oferta} <br/> {postulacion.lugar}
                </td>
                <td>
                <FaHandHoldingDollar />{postulacion.pago} <br/> <IoIosTime />{postulacion.estado}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};
