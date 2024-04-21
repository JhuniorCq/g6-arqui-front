import { CareerCard } from "../../components/CareerCard/CareerCard";
import "./Home.css"; // Esto es una IMPORTACIÒN de CSS GLOBAL -> Tengo que usar CSS Modules

export const Home = () => {
  return (
    <div className="contenedor-home">
      <div className="contenedor-titulo">
        <h1 className="titulo">Convocatorias 2024 de Prácticas en Perú</h1>
      </div>

      <div className="contenedor-parrafo">
        <p className="parrafo">
          Encuentra en un solo lugar convocatorias para practicantes
          PreProfesionales y Profesionales
        </p>
      </div>

      <form className="formulario">
        <div className="contenedor-input">
          <label htmlFor="input-carrera"></label>
          <input type="text" id="input-carrera" className="input-carrera ancho-total" placeholder="Ingresa tu carrera" />
        </div>

        
        <div className="contenedor-select">
          <select name="" id="input-lugar" className="input-lugar ancho-total">
            <option value="">
            <span>Lugar</span>
            </option>
            <option value="">Lima</option>
            <option value="">Ica</option>
            <option value="">Huancayo</option>
            
            <option value="">Puno</option>
            <option value="">Cusco</option>
          </select>
          {/* <div class="dropdown">
            <button class="btn btn-outline-secondary dropdown-toggle input-lugar ancho-total" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="bi bi-geo-alt"></i>
              Lugar
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div> */}
        </div>

        <div className="contenedor-boton">
          <button className="btn btn-danger btn-buscar ancho-total">Buscar Prácticas</button>
        </div>
      </form>

      <div className="contenedor-carreras">
        <CareerCard 
          rutaImg="/img/ingenieria-software.jpg"
          carrera="Ingeniería de Software"
        />
        <CareerCard 
          rutaImg="/img/contabilidad.jpg"
          carrera="Contabilidad"
        />

        <CareerCard 
          rutaImg="/img/ingenieria-software.jpg"
          carrera="Ingeniería de Software"
        />
        <CareerCard 
          rutaImg="/img/contabilidad.jpg"
          carrera="Contabilidad"
        />

        <CareerCard 
          rutaImg="/img/ingenieria-software.jpg"
          carrera="Ingeniería de Software"
        />
        <CareerCard 
          rutaImg="/img/contabilidad.jpg"
          carrera="Contabilidad"
        />
      </div>
    </div>
  );
};
