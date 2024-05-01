import { CareerCard } from "../../components/CareerCard/CareerCard";
import "./Configuracion.module.css";
import { AuthContext } from "../../context/Auth/AuthContext";
import {useId} from 'react'
export const ConfiguracionPostulant = () => {

      const id= useId();
      return (
        <div className="contenedor-home">
          <div className="contenedor-titulo1">
            <h2 className="titulo2">Datos del Postulante</h2>
          </div>
            <div class="container">
            <div class="row">
              <div class="col">
                <div class="Tabladatos">
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Nombre y apellidos:</td>
                        <td><input type="text" id="${id}-nombres" class="form-control input-name1" placeholder="Nombre" /></td>
                      </tr>
                      <tr>
                        <td>DNI:</td>
                        <td><input type="text" id="${id}-dni" class="form-control input-dni" placeholder="78459612" /></td>
                      </tr>
                      <tr>
                        <td>Domicilio:</td>
                        <td><input type="text" id="${id}-domicilio" class="form-control input-domicilio" placeholder="Calle Los Cedros 123, San Isidro, Lima, Perú." /></td>
                      </tr>
                      <tr>
                        <td>Profesión:</td>
                        <td><input type="text" id="${id}-profesion" class="form-control input-profesion" placeholder="Ingeniero de Software" /></td>
                      </tr>
                      <tr>
                        <td>Educación:</td>
                        <td><input type="text" id="${id}-educacion" class="form-control input-educacion" placeholder="Desarrollador Backend-Redata" /></td>
                      </tr>
                      <tr>
                        <td>Intereses Profesionales:</td>
                        <td><input type="text" id="${id}-interesesprofesionales" class="form-control input-intereses" placeholder="----" /></td>
                      </tr>
                      <tr>
                        <td>Proyectos pasados:</td>
                        <td><input type="text" id="${id}-proyectospasados" class="form-control input-proyectos" placeholder="Como ingeniero de software, me apasiona el desarrollo de tecnología, la resolución de problemas y la innovación en el campo de la informática." /></td>
                      </tr>
                      <tr>
                        <td>Certificaciones:</td>
                        <td><input type="text" id="${id}-certificaciones" class="form-control input-certificados" placeholder="Desarrollo app movistar" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="container contenedor-cam">
      <div class="contenedor-titulo1">
        <h3 class="titulo1">Modificar e-mail y clave</h3>
      </div>
      <div class="content">
        <p>Estás registrado con el e-mail</p>
        <input type="text" id="input-name" class="form-control" placeholder="josebarrios@gmail.com" />
        <p>A este e-mail te enviaremos las notificaciones sobre nuestros avisos y postulaciones</p>
      </div>
    
      <div class="contenedor-titulo1">
        <h3 class="titulo1">Subir Curriculum</h3>
      </div>
      <div class="content">
        <p>Usted Ingresa su curriculum con el que podrá ser presentado a las empresas</p>
        <button class="btn btn-confi"><img src="/img/cv.png" alt="Icono de CV" />Subir CV</button>
      </div>
    
      <div class="contenedor-titulo1">
        <h3 class="titulo1">Eliminar cuenta</h3>
      </div>
      <div class="content">
        <div class="checkbox-content">
          <label>
            <input type="checkbox" />
            Eliminar cuenta
          </label>
          <p>
            Esta opción hace que tu cuenta <input type="text" id="input-name" class="form-control" placeholder="josebarrios@gmail.com" /> se elimine de manera definitiva junto con toda tu actividad en Computrabajo y todos los servicios contratados hasta la fecha.
          </p>
        </div>
        <div class="btn-container">
          <button class="btn btn-confi">
            <img src="/img/cv.png" alt="Icono de Eliminar cuenta" />Eliminar cuenta
          </button>
        </div>
      </div>
    </div>
    
        </div>
      );
    };
    