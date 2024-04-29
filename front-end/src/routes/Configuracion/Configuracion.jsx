import { CareerCard } from "../../components/CareerCard/CareerCard";
import "./Configuracion.css";

export const Configuracion = () => {
  return (
    <div className="contenedor-home">
      <div className="contenedor-titulo1">
        <h2 className="titulo2">Datos del Postulante</h2>
      </div>
      <div className="Tabladatos">
        <table border={1}>
           <tr>
            <td>Nombre y apellidos:</td>
            <td><input type="text" id="input-name" className="input-name ancho-total" placeholder="Nombre" /></td>
           </tr>
           <tr>
            <td>DNI:</td>
            <td><input type="text" id="input-name" className="input-name ancho-total" placeholder="78459612" /></td>
           </tr>
           <tr>
            <td>Domicilio:</td>
            <td><input type="text" id="input-name" className="input-name ancho-total" placeholder="Calle Los Cedros 123, San Isidro, Lima, Perú." /></td>
           </tr>
           <tr>
            <td>Profesión:</td>
            <td><input type="text" id="input-name" className="input-name ancho-total" placeholder="Ingeniero de Software" /></td>
           </tr>
           <tr>
            <td>Educación:</td>
            <td><input type="text" id="input-name" className="input-name ancho-total" placeholder="Desarrollador Backend-Redata
Desarrollador full stack-Siesa
Analista de base de datos- Movistar" /></td>
           </tr>
           <tr>
            <td>Intereses Profesionales:</td>
            <td><input type="text" id="input-name" className="input-name ancho-total" placeholder="Nombre" /></td>
           </tr>
           <tr>
            <td>Proyectos pasados:</td>
            <td><input type="text" id="input-name" className="input-name ancho-total" placeholder="Como ingeniero de software, me apasiona el desarrollo de tecnología, la resolución de problemas y la innovación en el campo de la informática." /></td>
           </tr>
           <tr>
            <td>Certificaciones:</td>
            <td><input type="text" id="input-name" className="input-name ancho-total" placeholder="Desarrollo app movistar" /></td>
           </tr>
        </table>
      </div>
      <div className="contenedor-titulo1">
        <h3 className="titulo1">Modificar e-mail y clave</h3>
      </div>
      <div className="content">
        <p>Estas registrado con el e-mail</p><input type="text" id="input-name" placeholder="josebarrios@gmail.com." />
        <p>A este e-mail te enviaremos las notificaciones sobre nuestros avisos y postulaciones</p>
      </div>
      <div className="contenedor-titulo1">
        <h3 className="titulo1">Subir Curriculum</h3>
      </div>
      <div className="content">
        <p>Usted Ingresa su curriculum con el que podra ser presentado a las empresas</p>
        <button className="btn-confi"><img src="/img/cv.png" alt="Icono de CV" />Subir CV</button>        
      </div>
      <div className="contenedor-titulo1">
        <h3 className="titulo1">Eliminar cuenta</h3>
      </div>
      <div className="content">
        <div className="checkbox-content">
          <label>
            <input type="checkbox" />
            Eliminar cuenta
          </label>
          <p>
            Esta opción hace que tu cuenta <input type="text" id="input-name" placeholder="josebarrios@gmail.com." /> se elimine de manera definitiva junto con toda tu actividad en computrabajo y todos los servicios contratados hasta la fecha.
          </p>
        </div>
        <button className="btn-confi">
          <img src="/img/cv.png" alt="Icono de Eliminar cuenta" />Eliminar cuenta
        </button> 
      </div>
    </div>
  );
};
