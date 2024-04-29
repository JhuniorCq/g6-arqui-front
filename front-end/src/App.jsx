import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home/Home";
import { Login } from "./routes/Login/Login";
import { RegisterPostulant } from "./routes/Register/RegisterPostulant";
import { RegisterCompany } from "./routes/Register/RegisterCompany";
import { useContext } from "react";
import { AuthContext } from "./context/Auth/AuthContext";

function App() {

  const authContext = useContext(AuthContext);
  const { user, login, logout } = authContext;

  // console.log(user);

  return (
    <>
      <Navbar rol={user.rol} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro-postulante" element={<RegisterPostulant />} />
        <Route path="/registro-empresa" element={<RegisterCompany />} />
        <Route path="/login-postulante" element={<Login titulo="Inicio de Sesión - Postulante" typeUser="postulante" />} />
        <Route path="/login-empresa"element={<Login titulo="Inicio de Sesión - Empresa" typeUser="empresa" />} />
        {/* Rutas para el Postulante */}


        {/* Rutas para la Empresa */}
      </Routes>
    </>
  );
}

export default App;
