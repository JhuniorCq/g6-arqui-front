import { Link } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import "./Login.module.css";

export const Login = ({ titulo, tipo }) => {
  return (
    <div className="contenedor-login">
      <form className="form-login">
        <div className="contenedor-inputs">
          <div className="contenedor-titulo">
            <h1>{titulo}</h1>
          </div>

          <div className="contenedor-input">
            <Input
              label="Correo"
              type="text"
              placeholder="Tucorreo@ejemplo.com"
              className="input"
            />
          </div>

          <div className="contenedor-input">
            <Input
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              className="input"
            />
          </div>

          <div className="contenedor-button">
            <button className="btn btn-danger">Ingresar</button>
          </div>

          <div>
            {/* Por ahora será un <a>, luego será <Link /> */}
            <a href="#">Olvide mi contraseña</a>
          </div>

          <div>
            <p>
              ¿No estás registrado?,{" "}
              <Link
                to={
                  tipo === "postulante"
                    ? "/registro-postulante"
                    : "/registro-empresa"
                }
              >
                Registrate aquí
              </Link>
            </p>
          </div>
        </div>

        <div className="contenedor-inputs"></div>
      </form>
    </div>
  );
};
