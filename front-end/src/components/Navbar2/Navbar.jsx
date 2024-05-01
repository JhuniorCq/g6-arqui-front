import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Dropdown2 } from "../Dropdown2/Dropdown";
import "./Navbar.css";

export const Navbar2 = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="left-align">
            <Link to="/">Logo</Link>
          </li>
          <div className="busque">
          <div className="contenedor-input1">
            <label htmlFor="input-carrera1"></label>
            <input type="text" id="input-carrera1" className="input-carrera1 ancho-total1" placeholder="Ingresa tu carrera" />
            <Link to="/" className="icono-boton"></Link>
          </div>
          <div className="contenedor-select1">
          <select name="" id="input-lugar1" className="input-lugar1 ancho-total2">
            <option value="">
            <span>Lugar</span>
            </option>
            <option value="">Lima</option>
            <option value="">Ica</option>
            <option value="">Huancayo</option>
            
            <option value="">Puno</option>
            <option value="">Cusco</option>
          </select>
          </div>
          </div>
          
          <Link to="/" className="enlace-blanco">Mis Postulaciones</Link>
          <li className="right-align">
            <Dropdown2
              datosDropdown={{
                nombre: "Jose Barrios",
                opcion1: "Inicio",
                opcion2: "Configuración",
                opcion3: "Cerrar Sesión",
                ruta1: "/",
                ruta2: "/configuracion",
                ruta3: "/"
              }}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

